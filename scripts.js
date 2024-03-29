(() => {
  const events = [
    {
      name: "CityJS London",
      date: 1712142000,
      talk: "Sponsorship",
    },
    {
      name: "DevSum Oslo",
      date: 1693243200,
      talk: "Security Panel",
    },
    {
      name: "DevSum Oslo",
      date: 1693243200,
      talk: "Can't Touch This!",
    },
    {
      name: "Developer Day New York",
      date: 1689667200,
      talk: "Keynote",
    },
    {
      name: "KubeCon EU Amsterdam",
      date: 1689724800,
      talk: "Sponsorship",
    },
    {
      name: "AWS Summit Paris",
      date: 1677350400,
      talk: "Sponsorship",
    },
    {
      name: "NDC London",
      date: 1674672000,
      talk: "Sponsorship",
    },
    {
      name: "NDC Security",
      date: 1674048000,
      talk: "Sponsorship",
    },
    {
      name: "NG-Rome",
      date: 1672627200,
      talk: "Can't touch this!",
    },
    {
      name: "Modern Frontends Live",
      date: 1668624000,
      talk: "No Way, JOSE!",
    },
    {
      name: "Oktane",
      date: 1668019200,
      talk: "Passwords are so 1990!",
    },
    {
      name: "Oktane",
      date: 1667932800,
      talk: "Developer Keynote",
    },
    {
      name: "NG-DE",
      date: 1665052800,
      talk: "Now Way, JOSE!",
    },
    {
      name: "Developer Day Berlin",
      date: 1664966400,
      talk: "Passwords are so 1990!",
    },
    {
      name: "Developer Day London",
      date: 1661856000,
      talk: "Passwords are so 1990!",
    },
    {
      name: "DDD Perth",
      date: 1662681600,
      talk: "Sponsorship",
    },
    {
      name: "Developer Day Sydney",
      date: 1662480000,
      talk: "Passwords are so 1990!",
    },
    {
      name: "Developer Day Seatle",
      date: 1661347200,
      talk: "Passwords are so 1990!",
    },
    {
      name: "NodeTLV",
      date: 1659168000,
      talk: "No way, JOSE!",
    },
    {
      name: "JSConf Budapest",
      date: 1654176000,
      talk: "No way, JOSE!",
    },
    {
      name: "NG India",
      date: 1653129600,
      talk: "TBD",
    },
    {
      name: "Devsum Stockholm",
      date: 1652923200,
      talk: "Passwords are so 1990!",
    },
    {
      name: "DevDays Vilnius",
      date: 1650566400,
      talk: "No Way, JOSE!",
    },
    {
      name: "JSDay Verona",
      date: 1650134400,
      talk: "No Way, JOSE!",
    },
    {
      name: "JSDay Verona",
      date: 1650048000,
      talk: "Passwords are so 1990",
    },
    {
      name: "Javaland",
      date: 1647312000,
      talk: "No Way, JOSE!",
    },
    {
      name: "PHP UK",
      date: 1644979200,
      talk: "Passwords are so 1990",
    },
    {
      name: "JSPoland",
      date: 1643155200,
      talk: "Passwords are so 1990",
    },
    {
      name: "NGPoland",
      date: 1643068800,
      talk: "No Way, JOSE!",
    },
    {
      name: "NDC Oslo",
      date: 1638326400,
      talk: "Passwords are so 1990!",
    },
    {
      name: "Computer Futures meetup",
      date: 1634016000,
      talk: "Knock knock, who's there?",
    },
    {
      name: "EnterJS (Online)",
      date: 1632892800,
      talk: "No way, JOSE!",
    },
    {
      name: "DevBreak France",
      date: 1631078400,
      talk: "No way, JOSE!",
    },
    {
      name: "Front Conference Zurich",
      date: 1629849600,
      talk: "No way, JOSE!",
    },
    {
      name: "Manchester Node.js meetup (Online)",
      date: 1625030400,
      talk: "Knock knock, who's there?",
    },
    {
      name: "React Norway (Online)",
      date: 1623216000,
      talk: "Passwords are so 1990!",
    },
    {
      name: "Codemotion Spring (Online) ",
      date: 1621310400,
      talk: "No way, JOSE!",
    },
    {
      name: "API Days Helsinki (Online)",
      date: 1615785600,
      talk: "That's out of scope!",
    },
    {
      name: "JS Monthly London meetup (Online) ",
      date: 1611753600,
      talk: "No way, JOSE!",
    },
    {
      name: "API Days Paris (Online)",
      date: 1607299200,
      talk: "That's out of scope!",
    },
    {
      name: "Frontend Con (Online)",
      date: 1607385600,
      talk: "No way, JOSE!",
    },
    {
      name: "JS Poland (Online)",
      date: 1608422400,
      talk: "Knock knock, who's there?",
    },
    {
      name: "IPC Munich (Online)",
      date: 1608422400,
      talk: "Passwords are so 1990!",
    },
    {
      name: "APIDays London (Online)",
      date: 1603785600,
      talk: "That's out of scope!",
    },
    {
      name: "Devfest Norway (Online)",
      date: 1602739200,
      talk: "No way, JOSE!",
    },
    {
      name: "Chicago Cloud Exchange Conference (Online)",
      date: 1600598400,
      talk: "Passwords are so 1990!",
    },
    {
      name: "CityJS (Online)",
      date: 1599984000,
      talk: "Secure that app!",
    },
    {
      name: "JSVid Con (Online)",
      date: 1588838400,
      talk: "Passwords are so 1990!",
    },
    {
      name: "React Week NYC",
      date: 1594684800,
      talk: "Passwords are so 1990!",
    },
    {
      name: "Developer week Nuremberg",
      date: 1593417600,
      talk: "Passwords are so 1990!",
    },
    {
      name: "DevDay Faro",
      date: 1590220800,
      talk: "Knock knock, who's there?",
    },
    {
      name: "JSFest Kiyv",
      date: 1585939200,
      talk: "Passwords are so 1990!",
    },
    {
      name: "Web Engineering Düsseldorf",
      date: 1583817600,
      talk: "No way, JOSE!",
    },
    {
      name: "Node.TLV",
      date: 1583184000,
      talk: "Knock knock, who's there?",
    },
    {
      name: "ConFoo Montreal",
      date: 1582694400,
      talk: "No way, JOSE!",
    },
    {
      name: "ConFoo Montreal",
      date: 1582694400,
      talk: "Passwords are so 1990",
    },
    {
      name: "DevFest Paris",
      date: 1581648000,
      talk: "Passwords are so 1990",
    },
    {
      name: "JSConf Hawaiʻi",
      date: 1580841600,
      talk: "No way, JOSE!",
    },
    {
      name: "JSConf Japan",
      date: 1575091200,
      talk: "Passwords are so 1990",
    },
    {
      name: "Frontend Connect",
      date: 1574745600,
      talk: "Passwords are so 1990",
    },
    {
      name: "Design Systems London",
      date: 1573708800,
      talk: "Workshop: Building your first Design System: from scratch to production",
    },
    {
      name: "PHP Barcelona",
      date: 1573512000,
      talk: "Knock knock, who's there?",
    },
    {
      name: "JSDay Canarias",
      date: 1573171200,
      talk: "Passwords are so 1990",
    },
    {
      name: "ID4me Summit",
      date: 1571270400,
      talk: "Integrating ID4me with Auth0, Giving Full Control Back To The User",
    },
    {
      name: "Webcamp Zagreb",
      date: 1570732800,
      talk: "Passwords are so 1990",
    },
    {
      name: "Voxxed Days Ticino",
      date: 1570233600,
      talk: "Passwords are so 1990",
    },
    {
      name: "Intersection Conference Milan",
      date: 1569888000,
      talk: "Passwords are so 1990",
    },
    {
      name: "Voxxed Days BANFF",
      date: 1568937600,
      talk: "Passwords are so 1990",
    },
    {
      name: "GrillJS",
      date: 1567804800,
      talk: "Passwords are so 1990",
    },
    {
      name: "Fullstack London",
      date: 1562745600,
      talk: "Passwords are so 1990",
    },
    {
      name: "JSConf Belgium",
      date: 1561075200,
      talk: "Passwords are so 1990",
    },
    {
      name: "Angular Day Verona",
      date: 1560499200,
      talk: "Knock knock, who's there? Authenticating your single page apps using JSON Web Tokens.",
    },
    {
      name: "Best of Web Paris",
      date: 1559884800,
      talk: "Passwords are so 1990",
    },
    {
      name: "APIDays Helsinki",
      date: 1559625600,
      talk: "Knock knock, who's there? Authenticating your single page apps using JSON Web Tokens.",
    },
    {
      name: "International PHP Conference Berlin",
      date: 1559520000,
      talk: "Knock knock, who's there? Authenticating your single page apps using JSON Web Tokens.",
    },
    {
      name: "Voxxed Days Singapore",
      date: 1559107200,
      talk: "I didn't know the browser could do that!",
    },
    {
      name: "Web Engineering Aachen",
      date: 1558579200,
      talk: "Passwords are so 1990!",
    },
    {
      name: "API Days Zurich",
      date: 1558406400,
      talk: "Knock knock, who's there? Authenticating your single page apps using JSON Web Tokens.",
    },
    {
      name: "API Days Singapore",
      date: 1555996800,
      talk: "Knock knock, who's there? Authenticating your single page apps using JSON Web Tokens.",
    },
    {
      name: "Foss North",
      date: 1554691200,
      talk: "Knock knock, who's there? Authenticating your single page apps using JSON Web Tokens.",
    },
    {
      name: "FrontCon Riga",
      date: 1554259200,
      talk: "Knock knock, who's there? Authenticating your single page apps using JSON Web Tokens.",
    },
    {
      name: "JS Kongress Munich",
      date: 1552358400,
      talk: "Knock knock, who's there? Authenticating your single page apps using JSON Web Tokens.",
    },
    {
      name: "Fronteers Meetup",
      date: 1551902400,
      talk: "Passwords are so 1990!",
    },
    {
      name: "London NodeJS Meetup",
      date: 1551816000,
      talk: "Knock knock, who's there? Authenticating your single page apps using JSON Web Tokens.",
    },
    {
      name: "PHP Limburg Meetup",
      date: 1550640000,
      talk: "Passwords are so 1990!",
    },
    {
      name: "c't <webdev> Cologne",
      date: 1549440000,
      talk: "Knock knock, who's there? Authenticating your single page apps using JSON Web Tokens.",
    },
    {
      name: "Sthlm.js Stockholm",
      date: 1549315200,
      talk: "Passwords are so 1990.",
    },
    {
      name: "Jfokus Stockholm",
      date: 1549238400,
      talk: "Knock knock, who's there? Authenticating your single page apps using JSON Web Tokens.",
    },
    {
      name: "DevFest Porto",
      date: 1548470400,
      talk: "Passwords are so 1990",
    },
    {
      name: "Devops Days Tel Aviv",
      date: 1545100800,
      talk: "Papers Please! A Non-Dystopian Look at Modern Authentication",
    },
    {
      name: "API Days Paris",
      date: 1544476800,
      talk: "Knock knock, who's there? Authenticating your single page apps using JSON Web Tokens.",
    },
    {
      name: "Ausy meetup Leuven",
      date: 1543968000,
      talk: "You might not need a native app for this!",
    },
    {
      name: "Identity and Security London meetup",
      date: 1543478400,
      talk: "Itentity 101",
    },
    {
      name: "DevFest Trondheim",
      date: 1542595200,
      talk: "You might not need a native app for this!",
    },
    {
      name: "js.talks()",
      date: 1542403200,
      talk: "Knock knock, who's there? Authentication SPAs with JWTs.",
    },
    {
      name: "Full Stack Antwerp meetup",
      date: 1540358400,
      talk: "Channel your inner rockstar with the web audio API.",
    },
    {
      name: "Guest Lecture AP Hogeschool Antwerp",
      date: 1539676800,
      talk: "Securing SPAs with JWTs.",
    },
    {
      name: "London API meetup",
      date: 1537296000,
      talk: "A token walks into a SPA.",
    },
    {
      name: "LvivJS",
      date: 1535755200,
      talk: "Channel your inner rockstar with the web audio API.",
    },
    {
      name: "FullStack London",
      date: 1531296000,
      talk: "Channel your inner rockstar with the web audio API.",
    },
    {
      name: "FrontCon Riga",
      date: 1528963200,
      talk: "Channel your inner rockstar with the web audio API.",
    },
    {
      name: "DevSum Stockholm",
      date: 1527724800,
      talk: "You might not need a native app for this!",
    },
    {
      name: "DevDays Vilnius",
      date: 1526976000,
      talk: "Channel your inner rockstar with the web audio API.",
    },
    {
      name: "DevDays Vilnius",
      date: 1526976000,
      talk: "You might not need a native app for this!",
    },
    {
      name: "Jfokus",
      date: 1517808000,
      talk: "I didn't know the browser could do that!",
    },
    {
      name: "AmsterdamJS meetup",
      date: 1512624000,
      talk: "I didn't know the browser could do that!",
    },
    {
      name: "NationJS",
      date: 1512086400,
      talk: "I didn't know the browser could do that!",
    },
    {
      name: "NationJS Kick-off",
      date: 1511990400,
      talk: "A quick intro to the web-audio API,",
    },
    {
      name: "madewithlove retreat",
      date: 1511155200,
      talk: "Web performance: Building for the other side of the world.",
    },
    {
      name: "International JavaScript Conference",
      date: 1508716800,
      talk: "I didn't know the browser could do that!",
    },
    {
      name: "Mobilization ",
      date: 1506816000,
      talk: "I didn't know the browser could do that!",
    },
    {
      name: "Creativity Gym, Thomas More college Mechelen",
      date: 1507171200,
      talk: "I didn't know the browser could do that!",
    },
    {
      name: "Frontend Dev Conf",
      date: 1506729600,
      talk: "A deep dive into the web-audio API.",
    },
    {
      name: "Refresh",
      date: 1504828800,
      talk: "I didn't know the browser could do that!",
    },
    {
      name: "Odessa JS",
      date: 1498963200,
      talk: "Changing live audio with the web-audio API.",
    },
    {
      name: "Odessa JS",
      date: 1498876800,
      talk: "I didn't know the browser could do that!",
    },
    {
      name: "Fronteers meetup Leuven",
      date: 1498128000,
      talk: "I didn't know the browser could do that!",
    },
    {
      name: "AmsterdamJS",
      date: 1496889600,
      talk: "Changing live audio with the web-audio API.",
    },
    {
      name: "Front-Trends",
      date: 1495612800,
      talk: "I didn't know the browser could do that!",
    },
    {
      name: "JSDay Spain",
      date: 1494633600,
      talk: "Changing live audio with the web-audio API.",
    },
    {
      name: "PHP Antwerp",
      date: 1490745600,
      talk: "I didn't know the browser could do that!",
    },
    {
      name: "Fronteers meetup Amsterdam",
      date: 1481078400,
      talk: "Changing live audio with the web-audio API.",
    },
    {
      name: "Frontend United Gent",
      date: 1464297600,
      talk: "Changing live audio with the web-audio API.",
    },
    {
      name: "JSConf Budapest",
      date: 1463107200,
      talk: "Changing live audio with the web-audio API.",
    },
    {
      name: "Fronteers meetup Leuven",
      date: 1447891200,
      talk: "Changing live audio with the web-audio API.",
    },
  ];
  const longestEvent = Math.max(
    ...events.map(
      (event) =>
        event.name.length + new Date().toDateString(event.date * 1000).length,
    ),
  );

  const socialLinks = [
    {
      name: "Twitter / X",
      website: "https://twitter.com/sambego",
    },
    {
      name: "Github",
      website: "https://github.com/sambego",
    },
    {
      name: "LinkedIn",
      website: "https://linkedin.com/in/sambellen/",
    },
    {
      name: "Mail",
      website: "mailto:hey@sambego.be",
    },
  ];
  const longestSocialLink = Math.max(
    ...socialLinks.map((link) => link.name.length),
  );

  const slideLinks = [
    {
      name: "JSON Web Tokens",
      website: "https://jwt.sambego.tech",
    },
    {
      name: "Passkeys, WebAuthn, Passwordless",
      website: "https://1990.sambego.tech",
    },
    {
      name: "WebAuthn",
      website: "https://webauthn.sambego.tech",
    },
    {
      name: "Web Cryptography",
      website: "https://jose.sambego.tech",
    },
    {
      name: "Authorization, Access Control",
      website: "https://ac.sambego.tech",
    },
  ];
  const longestSlideLink = Math.max(
    ...slideLinks.map((link) => link.name.length),
  );

  const experimentLinks = [
    {
      name: "DPOP Playground",
      website: "https://dpop.sambego.tech",
    },
    {
      name: "RSA Playground",
      website: "https://rsa.sambego.tech",
    },
  ];
  const longestExperimentLink = Math.max(
    ...experimentLinks.map((link) => link.name.length),
  );

  const commands = [
    {
      name: "sambego who",
      description: "learn more about me",
    },
    {
      name: "sambego where",
      description: "find out which events I will be speaking at",
    },
    {
      name: "sambego where --past",
      description: "find out where I have been in the past",
    },
    {
      name: "sambego contact",
      description: "get in touch",
    },
    {
      name: "sambego install",
      description: "install me locally",
    },
    {
      name: "sambego help",
      description: "see all available commands",
    },
  ];
  const longestCommand = Math.max(
    ...commands.map((command) => command.name.length),
  );

  const output = document.querySelector(".terminal-output-scroll");
  const input = document.querySelector(".terminal-input");
  const form = document.querySelector(".terminal-form");

  const padString = (input, size) => {
    return input.padEnd(size, " ");
  };

  const createTitle = (cmd) => {
    const prefix = "root@sambego.tech:";
    const title = document.createElement("h2");
    title.innerHTML = `<h2>${prefix} <span class="terminal-command">${cmd}</span></h2>`;

    return title;
  };

  const createSection = (cmd, content) => {
    const section = document.createElement("section");
    section.classList.add("terminal-section");
    section.append(createTitle(cmd));
    section.append(content);

    return section;
  };

  const createWho = () => {
    const headshot = "sam.png";
    const bio = `I am a Principal Developer Advocate, currently working at Auth0 by Okta. I love everything identity, and explaining complex topics in a clear and understandable way. You can find me on stage at developer events worldwide, or simply having great conversations in the hallway. I've been recognized as a <a href="https://developers.google.com/profile/u/sambego" alt="My Google Developer Profile">Google Developer Expert (GDE)</a> in the domains of Web Technologies, Security, Privacy, Payments, and Identity. Feel free to send me cat pictures!`;
    const wrapper = document.createElement("div");
    wrapper.classList.add("bio");
    wrapper.innerHTML = `<img src="${headshot}" alt="Sam Bellen" class="bio-picture" /><p class="bio-about">${bio}</div>`;

    return wrapper;
  };

  const createWhere = (past = false) => {
    const list = document.createElement("ul");
    const filteredEvents = events.filter((event) => {
      if (past) {
        return (
          event.date * 1000 <
          new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
        );
      }
      return (
        event.date * 1000 > new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
      );
    });

    if (filteredEvents.length > 0) {
      const item = document.createElement("li");
      item.classList.add("padded");
      item.innerHTML = `${filteredEvents.length} event(s) found:`;
      list.append(item);

      filteredEvents.forEach((event) => {
        const item = document.createElement("li");
        item.classList.add("spaces");
        item.innerHTML = `${event.name} <span class="meta">${new Date(event.date * 1000).toDateString()}</span><span class="talk">${event.talk}</span>`;
        list.append(item);
      });
    } else {
      const item = document.createElement("li");
      item.innerHTML =
        "Looks like I do not have any events planned. Reach out to me if you like to invite me to your event!";
      list.append(item);
    }

    return list;
  };

  const createContact = () => {
    const longest = Math.max(
      longestSocialLink,
      longestSlideLink,
      longestExperimentLink,
    );
    const createList = (collection, title, length) => {
      const heading = document.createElement("p");
      heading.classList.add("spaces");
      heading.innerHTML = `${title}:`;

      const list = document.createElement("ul");
      collection.forEach((link) => {
        const item = document.createElement("li");
        item.classList.add("spaces");
        item.innerHTML = `${padString(link.name, length)} <a href="${link.website}" title="${link.name}" target="_blank">${link.website}</a>`;
        list.append(item);
      });

      const wrapper = document.createElement("div");
      wrapper.append(heading);
      wrapper.append(list);
      return wrapper;
    };

    const wrapper = document.createElement("div");
    wrapper.append(createList(socialLinks, "Social Links", longest + 8));
    wrapper.append(createList(slideLinks, "Slides", longest + 8));
    wrapper.append(createList(experimentLinks, "Experiments", longest + 8));
    return wrapper;
  };

  const createInstall = () => {
    const instruction = document.createElement("p");
    instruction.innerHTML = `Did you know I am NPM installable? Simply run <code>npx @sambego/about-me</code> in your terminal, and find the links to my slide-decks, expriments, and socials.`;
    return instruction;
  };

  const createHelp = () => {
    const list = document.createElement("ul");
    commands.forEach((command) => {
      const item = document.createElement("li");
      item.classList.add("spaces");
      item.append(padString(command.name, longestCommand + 8));
      item.append(command.description);

      list.append(item);
    });

    const wrapper = document.createElement("div");
    wrapper.innerHTML = `<p>sambego &lt;command&gt;</p>`;
    wrapper.append(list);
    return wrapper;
  };

  const destroy = () => {
    const max = 3;
    const message = document.createElement("p");
    message.innerHTML = `This website will self-destruct in <span class="countdown">${max}</span> seconds.`;

    let i = 0;

    const countDownInterval = window.setInterval(() => {
      i++;
      document.querySelector(".countdown").innerHTML = max - i;

      if (i === max) {
        window.clearInterval(countDownInterval);
        document.querySelector("body").innerHTML = "";
        console.log(
          "Sad to see you tried to delete this website, if you enjoyed this easter-egg, let me know on Twitter/X: https://twitter.com/sambego",
        );
      }
    }, 1000);

    return message;
  };

  const retro = () => {
    const doc = document.querySelector("html");
    const isRetro = doc.classList.contains("retro");
    const message = document.createElement("p");
    message.innerHTML = isRetro
      ? `Fine, we'll go back to ${new Date().getFullYear()}`
      : `If my calculations are correct, when this baby hits 88 miles per hour, you're gonna see some serious sh*t!`;
    doc.classList.toggle("retro");
    return message;
  };

  const processInput = (input) => {
    switch (true) {
      case input.includes("who"):
        return createWho();
      case input.includes("where"):
        if (input.includes("--past")) {
          return createWhere(true);
        }
        return createWhere();
      case input.includes("contact"):
        return createContact();
      case input.includes("install"):
        return createInstall();
      case input.includes("rm -rf ."):
        return destroy();
      case input.includes("back to the future"):
        return retro();
      default:
        return createHelp();
    }
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (input.value === "clear") {
      output.innerHTML = "";
    } else {
      output.append(createSection(input.value, processInput(input.value)));
      output.scrollTop = output.scrollHeight;
    }

    input.value = "";
  });

  output.innerHTML = "";
  output.append(createSection("sambego help", createHelp()));

  console.log('👀');
})();
