function showNotification(messageKey) {
    console.debug("Showing notification: ", messageKey);
    const notification = document.createElement("div");
    notification.textContent = browser.i18n.getMessage(messageKey);
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background-color: #4CAF50;
      color: white;
      padding: 15px;
      border-radius: 5px;
      z-index: 9999;
    `;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
