const notificationBox = document.getElementById("notification-box");

const fillNotificationDetails = (
  notificationClass,
  iconClass,
  notificationClassRemoveOne,
  notificationClassRemoveTwo,
  iconClassRemoveOne,
  iconClassRemoveTwo,
  notificationText
) => {
  const notification = document.createElement("div");
  const icon = document.createElement("i");

  notification.classList.add("msg");
  icon.classList.add("fa-solid");
  icon.style.transform = "translateX(0)";

  notification.classList.add(notificationClass);
  icon.classList.add(iconClass);

  notification.classList.remove(notificationClassRemoveOne);
  notification.classList.remove(notificationClassRemoveTwo);
  icon.classList.remove(iconClassRemoveOne);
  icon.classList.remove(iconClassRemoveTwo);

  notification.innerText = notificationText;
  notification.insertAdjacentElement("afterbegin", icon);

  notificationBox.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 4000);
};

const showNotification = () => {
  if (event.target.innerHTML == "Success") {
    fillNotificationDetails(
      "success",
      "fa-circle-check",
      "error",
      "invalid",
      "fa-circle-xmark",
      "fa-circle-exclamation",
      "Successfully submitted"
    );
  } else if (event.target.innerHTML == "Error") {
    fillNotificationDetails(
      "error",
      "fa-circle-xmark",
      "success",
      "invalid",
      "fa-circle-check",
      "fa-circle-exclamation",
      "Please fix the error!"
    );
  } else if (event.target.innerHTML == "Invalid") {
    fillNotificationDetails(
      "invalid",
      "fa-circle-exclamation",
      "error",
      "success",
      "fa-circle-xmark",
      "fa-circle-check",
      "Invalid input, check again"
    );
  }
};
