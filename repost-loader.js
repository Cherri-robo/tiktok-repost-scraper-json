/* Hey this loads and embeds the links from the json file. I wouldn't recommend touching this unless you know what you're doing. */

fetch("reposts.json")
  .then((res) => res.json())
  .then((links) => {
    const container = document.querySelector(".repost-container");

    links.forEach((link) => {
      // If you were to filter certain links, you can do so here.
      const match = link.match(/video\/(\d+)/);
      if (!match) return;

      const block = document.createElement("blockquote");
      block.className = "tiktok-embed";
      block.setAttribute("cite", link);
      block.setAttribute("data-video-id", match[1]);

      // InnerHTML stuff here, if you want to add loading text or styles.
      block.innerHTML = "<section></section>";
      container.appendChild(block);
    });

    // Don't touch ahh.
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  })
  .catch((err) => {
    // If your links are broken this will tell you.
    console.error("Couldn't load reposts.json:", err);
  });
