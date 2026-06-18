// Typing effect
let text = "Kamu adalah alasan aku tersenyum setiap hari 💖";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();

// Popup
function showLove() {
  document.getElementById("popup").classList.remove("hidden");
}

// Countdown
let startDate = new Date("2024-01-01");

function updateTime() {
  let now = new Date();
  let diff = now - startDate;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("time").innerHTML = days + " hari bersama 💕";
}
setInterval(updateTime, 1000);

// Efek klik hati
document.addEventListener("click", function(e) {
  let heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.style.position = "absolute";
  heart.style.left = e.pageX + "px";
  heart.style.top = e.pageY + "px";
  heart.style.fontSize = "20px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1000);
});