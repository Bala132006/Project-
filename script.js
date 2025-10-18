const socket = io();

// Elements
const form = document.getElementById("chat-form");
const input = document.getElementById("msg");
const messages = document.getElementById("messages");

// Send message
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim()) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});

// Receive messages
socket.on("chat message", (msg) => {
  const li = document.createElement("li");
  li.textContent = msg;
  messages.appendChild(li);
  messages.scrollTop = messages.scrollHeight;
});
