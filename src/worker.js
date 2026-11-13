// Serves the static site, plus:
// - talks.sambego.tech → /data/talks.json
// - /index.json, and / or /index.html requested as application/json → index.json with all $refs merged in
const HOST_FILES = {
  "talks.sambego.tech": "/data/talks.json",
};

const INDEX_PATHS = new Set(["/", "/index.html"]);

function wantsJson(request) {
  const accept = request.headers.get("Accept") ?? "";
  const contentType = request.headers.get("Content-Type") ?? "";
  return accept.includes("application/json") || contentType.includes("application/json");
}

async function loadJson(url, env) {
  const response = await env.ASSETS.fetch(new Request(url));
  if (!response.ok) throw new Error(`${url.pathname}: ${response.status}`);
  return resolveRefs(await response.json(), url, env);
}

// Replace every { "$ref": "./file.json" } with that file's contents, relative to the referring file.
async function resolveRefs(value, base, env) {
  if (Array.isArray(value)) return Promise.all(value.map((item) => resolveRefs(item, base, env)));
  if (value && typeof value === "object") {
    if (typeof value.$ref === "string") return loadJson(new URL(value.$ref, base), env);
    const entries = await Promise.all(
      Object.entries(value).map(async ([key, item]) => [key, await resolveRefs(item, base, env)]),
    );
    return Object.fromEntries(entries);
  }
  return value;
}

async function mergedIndex(url, env, headers = {}) {
  const data = await loadJson(new URL("/index.json", url), env);
  return new Response(JSON.stringify(data, null, 2) + "\n", {
    headers: { "Content-Type": "application/json; charset=utf-8", ...headers },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const file = HOST_FILES[url.hostname];

    if (file) {
      url.pathname = file;
      url.search = "";
      return env.ASSETS.fetch(new Request(url, request));
    }

    if (url.pathname === "/index.json") {
      return mergedIndex(url, env);
    }

    if (INDEX_PATHS.has(url.pathname)) {
      if (wantsJson(request)) {
        return mergedIndex(url, env, { Vary: "Accept, Content-Type" });
      }
      const response = await env.ASSETS.fetch(request);
      const headers = new Headers(response.headers);
      headers.append("Vary", "Accept, Content-Type");
      return new Response(response.body, { status: response.status, headers });
    }

    return env.ASSETS.fetch(request);
  },
};
