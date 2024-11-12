function localizeHtml() {
    document.querySelectorAll("[id]").forEach((element) => {
        const message = element.textContent;
        if (message.startsWith("__MSG_") && message.endsWith("__")) {
            const key = message.slice(6, -2); // Remove __MSG_ and __
            element.textContent = browser.i18n.getMessage(key);
        }
    });

    // For attributes like placeholder, title, etc.
    document.querySelectorAll("[placeholder], [title]").forEach((element) => {
        ["placeholder", "title"].forEach((attr) => {
            const message = element.getAttribute(attr);
            if (
                message &&
                message.startsWith("__MSG_") &&
                message.endsWith("__")
            ) {
                const key = message.slice(6, -2);
                element.setAttribute(attr, browser.i18n.getMessage(key));
            }
        });
    });
}

localizeHtml();
