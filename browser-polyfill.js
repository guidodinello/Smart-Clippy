if (typeof browser === "undefined") {
    const browser = {
        storage: {
            sync: {
                get: (keys) =>
                    new Promise((resolve) =>
                        chrome.storage.sync.get(keys, resolve)
                    ),
                set: (items) =>
                    new Promise((resolve) =>
                        chrome.storage.sync.set(items, resolve)
                    ),
            },
        },
        runtime: {
            openOptionsPage: () => chrome.runtime.openOptionsPage(),
            getURL: (path) => chrome.runtime.getURL(path),
        },
        scripting: {
            executeScript: (details) => chrome.scripting.executeScript(details),
        },
        tabs: {
            query: (queryInfo) => chrome.tabs.query(queryInfo),
        },
        i18n: {
            getMessage: (key) => chrome.i18n.getMessage(key),
        },
    };
    window.browser = browser;
}
