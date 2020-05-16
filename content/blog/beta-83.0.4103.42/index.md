---
title: Here's what's new in Chrome OS Beta 83.0.4103.31!
date: "2020-05-06T20:35:18.000Z"
description: "An in-depth look in the the most recent Beta update (83.0.4103.41)"
---

Hey folks, 

**Chrome OS Beta Channel got updated today** - from **83.0.4103.31** to **83.0.4103.42**. This is a small bug-fix update that is rolling out to most Chromebooks. Here are the notable changes in this build!

_Disclaimer: this is everything I found with this version of Chrome OS. There may be more things I might've missed. If you find a mistake or discover something new, feel free to let me know in the comments below._

**~~Note: SafetyNet is not working in this build!~~ Update: looks like it's working for some.**

### Ash

* **Fixed a bug on some devices** (like elm) **where the Chromebook would randomly enter tablet mode when the lid is closed or reopened.** This is due to the lid angle calculation falling in the same range as the tablet mode angle range.

* **Search + character “+” to maximize/minimize windows feature** from **84.0.4133.0** backported to this build. Requires `chrome://flags/#new-shortcut-mapping` to be enabled.

### Blink

**Video-rvfc** ( `HTMLVideoElement.requestVideoFrameCallback` ) is enabled by default. [See this excellent explainer on what it does](https://github.com/WICG/video-rvfc/blob/gh-pages/explainer.md).

* **Fixed a bad bug with nested cross-domain iframes hiding content and not being able to scroll properly.** Having nested iframes with the height set to a large amount (ie 2000px) results in the bottom of the content for the lowest level site being chopped off and invisible and the elements are not able to be inspected properly.

* SVGs with " `none` " for SVG `<image>` orientation will now render properly.

* Fixed a bug when a node is removed from a shadow host, inserted into a different node, and then moved back into the original shadow host without having any re-slotting happening in between. **Before the fix, the bug broke the Javascript plugin "Dual Listbox"**.

### Chrome

* **Fixed a bug with tab hover cards** where it’ll cause a background browser window to paint as foreground.

* **Fixed a regression with ChromeDriver that causes**`GetElementText`**to break**. This caused text like Cyrillic to render without styles.

* **Fixed reauthentication bug** with password autofill in Chrome OS.

### Chrome OS Settings

* Shelf navigation settings will now be hidden with clamshell-only Chromebooks.

### Family Link

* **Fixed a bug where web contents are not paused** when Chrome reaches the time limit.

* Fixed a crash when setting the time limit for Chrome to 0 and restarting the chromebook with web time limit feature turned off.

### Flags

* **Hover card images flag returns**. Removed by accident due to auto expiry

* **Tab groups flag returns**. Removed by accident due to auto expiry.

### PDF Viewer

* **Copy-paste command** in PDF files fixed from **84.0.4132.2** backported to this build.

Here is the [official changelog](https://chromium.googlesource.com/chromium/src/+log/83.0.4103.31..83.0.4103.42/?&n=100000). Let me know in the comments below if there are any errors or other changes I might've missed. Enjoy!
