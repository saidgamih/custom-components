
// Messagebox component

const message_box = document.querySelector("#message_box");
const inner_message_box = document.querySelector("#inner_message_box");
const hide_message_box = document.querySelector("#hide_message_box");
const ok = document.querySelector("#ok");
const show_message_box = document.querySelector("#show_message_box");

ok.addEventListener("click", hideMsgBox);

function showMsgBox() {
  message_box.style.display = "flex";
  setTimeout(function() {
    message_box.style.opacity = "100%";
    inner_message_box.style.transform = "scale(1.2)";
  }, 250);
  setTimeout(function() {
    inner_message_box.style.transform = "scale(1)";
  }, 500);
}

function hideMsgBox() {
  message_box.style.opacity = "0%";
  setTimeout(function() {
    message_box.style.display = "none";
  }, 200);
}
