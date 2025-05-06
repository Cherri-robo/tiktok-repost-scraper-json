# TikTok Repost Scraper JSON

Browser-based tool that grabs repost links from your profile and saves them into a `reposts.json`. You can then upload it to your website and make a custom embed that actually looks how you want.

Uses a console script to grab the reposts.
JavaScript widget to embed them.
Clean output. No login. No API. No bs.

Tried to make this automatic, but TikTok CAPTCHA said no. So this is the next best thing.

---

## How it works

* Scrapes your repost links directly from the TikTok site
* Saves them to a `reposts.json` file
* You can plug that into a website widget to show your reposts without manually embedding each one
* Works as a browser extension so you don’t have to copy-paste anything yourself

---

## Using the Extension

1. Download or clone this repo
2. Go to `chrome://extensions/`
3. Enable Developer Mode
4. Load the `repost-extension/` folder as an unpacked extension
5. Go to your TikTok profile and open the Reposts tab
6. Click the extension and hit "Scrape Reposts"

It’ll scroll through your reposts and automatically generate a clean `reposts.json` file.

---

## Embedding on Your Site

There's a working example included: `index.html`

If you're building your own, this is the minimum you need:

```html
<div class="repost-widget"></div>
<script defer src="repost-loader.js"></script>
```

It loads the links from `reposts.json` and throws them into clean TikTok iframes.

If you're testing it locally, run a dev server (`py -m http.server`) so it doesn't get blocked.

---

## Files

```
📦 tiktok-repost-scraper-json
├── repost-extension/         # browser extension core
│   ├── icon.png
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.js
│   └── content.js
├── index.html                # example site embed
├── repost-loader.js          # loads reposts into widget
├── reposts.json              # stores your repost URLs
└── README.md
```

---

## Credits

Made by @cherri-robo out of spite.
Fork it. Break it. Make it your own.
