# Description

Smart Clippy is a browser extension that copies the tab title and URL to the clipboard in some preferred style.

For instance using markdown hyperlink style:
```markdown
[title](url)
```
Using the html style:
```html
<a href="url">title</a>
```
Using plain text:
```text
title - url
```

> If any text is selected, it will be appended at the end of the copied string
> ```markdown
> [tab title](tab url) > selection
> ```

## Supported styles:

- Markdown.
- HTML anchor tag.
- Plain text.
- Some custom format with the placeholders {title} and {url}.

# Future Improvements

-   [x] Add icons.
-   [x] Add a keyboard shortcut. (Ctrl + Shift + V)
-   [x] Allow to personalize the format of the copied text.
-   [ ] UI to customize the format.
-   [ ] Add more functionalities like copying the video description if its youtube.
-   [ ] Improve styles: popup.html, options.html, notification.js

# Resources

-   https://github.com/mozilla/webextension-polyfill/
-   https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions
-   https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/
