// Notification component

const notification = document.querySelector("#notification");
const show_notification = document.querySelector("#show_notification");
const hide_notification = document.querySelector("#hide_notification");
let TO = null;

function show() {
  if (TO) clearTimeout(TO);
  notification.style.left = "10px";
  TO = setTimeout(hide, 5000);
}

function hide() {
  notification.style.left = "-280px";
}
