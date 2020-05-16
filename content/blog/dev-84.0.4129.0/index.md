---
title: Here's what's new in Chrome OS Dev 84.0.4129.0!
date: "2020-04-30T23:13:44.000Z"
description: "An in-depth look in the the most recent Dev update (84.0.4129.0)"
---

**Chrome OS Dev Channel got updated this afternoon - from 84.0.4118.0 to 84.0.4129.0**. Here are the highlight changes I found that's new!

Disclaimer: this is everything I found with this version of Chrome OS. There may be more things I might've missed. If you find a mistake or discover something new, **feel free to let me know in the comments below**.

A few days ago, I went over everything new I found when **Chrome OS Canary** got updated from **84.0.4118.0** to **84.0.4127.0**. This update includes **all of those new changes, plus a little bit more** which I'll cover in this post. If you're not caught up, [click this link to view the post I made earlier about the update from 84.0.4118.0 to 84.0.4127.0](../canary-84-0-4127-0/) **before reading this post!**

With that out of the way, let's begin!

## Notable new features from 84.0.4127.0 to 84.0.4129.0:

### Lacros-chrome

**New flag to test the upcoming lacros-chrome browser:** `chrome://flags/#lacros-support` .

* For those unaware, this is a radical change Google is doing to separate browser and Chrome OS updates. [Kyle Bradshaw from 9to5Google wrote a great article about this](https://9to5google.com/2020/04/28/  google-chrome-os-separate-browser-updates/). In addition, this is great news for developers and users who want to test/submit patches to developer builds of Chrome - no need to switch Chrome OS channels and compromise OS stability.

* Before you get too excited and hop onto the Dev channel, ***this flag is not working yet***!

### Crostini

* The Crostini terminal was updated to 13062 which brings the uprev of the crostini kernel from 4.19 to 5.4. Thanks [u/magick_68](https://www.reddit.com/u/magick_68/)!

## Notable fixes from 84.0.4127.0 to 84.0.4129.0:

* **Tab hover card images flag got renewed.** Expiry was set too low on the flag because of the M82 skip.

* **Improved heuristics** for detecting overlay popup ads.

* **Percent based scrolling** fixes for mousewheels for large scrollers. Percent based scrolling is available to test via `chrome://flags/#percent-based-scrolling` on all Chrome channels.

## What's broken in 84.0.4129.0:

* **SafetyNet fails in this build.**

* **Google Drive access is broken** when accessing it from the File Manager. What's strange is it doesn't affect **84.0.4129.0** Canary. Thanks for the heads-up [u/47prime](https://reddit.com/u/47prime)!

**Official changelog from 84.0.4127.0 to 84.0.4129.0**: [link](https://chromium.googlesource.com/chromium/src/+log/84.0.4127.0..84.0.4129.0?n=100000)

**Official changelog from 84.0.4118.0 to 84.0.4129.0**: [link](https://chromium.googlesource.com/chromium/src/+log/84.0.4118.0..84.0.4129.0?n=100000)
