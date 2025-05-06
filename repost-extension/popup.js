document.getElementById("scrape").addEventListener("click", async () => {
    // Grabs the current tab with force
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    // Injects content.js into TikTok
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  });
