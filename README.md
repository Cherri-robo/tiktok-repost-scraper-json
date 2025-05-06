# TikTok Repost Scraper JSON

Browser-based tool that grabs repost links from your profile and saves them into a `reposts.json`. You can then upload it to your website and make a custom embed that actually looks how you want.

Uses a console script to grab the reposts.
JavaScript widget to embed them.
Clean output. No login. No API. No nonsense.

Tried to make this automatic, but TikTok CAPTCHA said absolutely not. So this is the next best thing.

---

## How it works

* Scrapes your repost links directly from the TikTok site
* Saves them to a `reposts.json` file
* You can plug that into a website widget and display them however you want
* Works as a browser extension so you don’t have to do it manually

---

## Using the Extension

1. Download or clone this repo
2. Go to `chrome://extensions/`
3. Enable Developer Mode
4. Load the folder as an unpacked extension
5. Go to your TikTok profile and open the Reposts tab
6. Click the extension and hit "Scrape Reposts"

It’ll scroll through the reposts and save them for you.

---

## Embedding on Your Site

1. Put the `reposts.json` file and `repost-loader.js` on your site
2. Add this to your HTML:

```html
<div class="repost-widget"></div>
<script defer src="repost-loader.js"></script>
```

If you're testing it locally, run a server (like `py -m http.server`) so it doesn't freak out.

---

## Files

```
tiktok-repost-scraper-json
├── icon.png              # the icon duh
├── manifest.json         # extension setup
├── popup.html            # popup interface
├── popup.js              # injects the content script
├── content.js            # scrolls and scrapes
├── repost-loader.js      # embeds reposts into a website
├── reposts.json          # output file
└── README.md             # this file
```

---

## Credits

Made by @cherri-robo out of necessity and spite.
Feel free to fork or mess with it.
