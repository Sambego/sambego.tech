// Serves the static site, plus talks.sambego.tech → /data/talks.json.
const HOST_FILES = {
  "talks.sambego.tech": "/data/talks.json",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const file = HOST_FILES[url.hostname];

    if (file) {
      url.pathname = file;
      url.search = "";
      return env.ASSETS.fetch(new Request(url, request));
    }

    return env.ASSETS.fetch(request);
  },
};
