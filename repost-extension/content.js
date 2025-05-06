// Hi gamers, so this is the most important of the scripts.
// This script scrolls down until everything loads, grabs all repost video links and saves them as reposts.json for download. Ong trust me bro.

(async () => {
    console.log("Repost Scraper is running");
  
    // TikTok is lazy so we need to scroll to load every link.
    async function autoScroll() {
      return new Promise((resolve) => {
        let lastHeight = 0;
        let tries = 0;
  
        const interval = setInterval(() => {
          window.scrollTo(0, document.body.scrollHeight);
          const currentHeight = document.body.scrollHeight;
  
          if (currentHeight === lastHeight) {
            tries++;
          } else {
            tries = 0;
            lastHeight = currentHeight;
          }
  
          if (tries > 3) {
            clearInterval(interval);
            resolve();
          }
        }, 1000);
      });
    }
  
    await autoScroll();
  
    // Grabs all those succulent links.
    const links = Array.from(document.querySelectorAll('a[href*="/video/"]'));
    const videoLinks = Array.from(new Set(links.map(a => a.href)));
  
    console.log(`Found ${videoLinks.length} reposts.`);
  
    // Create the blob to save as reposts.json.
    const blob = new Blob([
      JSON.stringify(videoLinks, null, 2)
    ], { type: 'application/json' });
  
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'reposts.json';
    a.click();
  
    URL.revokeObjectURL(url);
  })();
  // Ta-da! You now have freaky json file with all your links.
