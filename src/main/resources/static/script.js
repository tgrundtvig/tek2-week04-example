const form = document.getElementById("message-form");
const input = document.getElementById("message-input");
const list = document.getElementById("message-list");

async function loadMessages() {
    const response = await fetch("/api/messages");
    const messages = await response.json();
    list.innerHTML = "";
    messages.forEach(function (msg) {
        const li = document.createElement("li");
        const time = new Date(msg.createdAt).toLocaleTimeString();
        li.innerHTML = msg.text + '<span class="time">' + time + "</span>";
        list.appendChild(li);
    });
}

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text }),
    });

    input.value = "";
    loadMessages();
});

loadMessages();
