// Первый вопрос — "Да"
function yesClick() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("buttons1").style.display = "none";
    document.getElementById("question2").style.display = "block";

    for (let i = 0; i < 5; i++) setTimeout(spawnGif, i * 300);
}

// Второй вопрос — выбор времени
function timeClick(time) {
    const result = document.getElementById("result");
    result.innerHTML = `🥰 Отлично! Тогда встречаемся в <b>${time}</b> ❤️`;
    result.style.display = "block";
    document.getElementById("question2").style.display = "none";
}

// Кнопка "Нет" — убегает по экрану
function moveNo() {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");

    // Случайное положение на экране
    const padding = 10;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    // Тряска
    noBtn.style.animation = "shake 0.3s";
    setTimeout(() => noBtn.style.animation = "", 300);

    // Кнопка "Да" растёт
    const scale = yesBtn.dataset.scale ? Number(yesBtn.dataset.scale) : 1;
    const newScale = Math.min(scale + 0.07, 1.6);
    yesBtn.dataset.scale = newScale;
    yesBtn.style.transform = `scale(${newScale})`;
}

// Летающие сердечки
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (14 + Math.random() * 20) + "px";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
}
setInterval(createHeart, 350);

// Гифки при "Да"
const gifs = ["heart1.gif","heart2.gif","heart3.gif"];
function spawnGif() {
    const gif = document.createElement("img");
    gif.src = gifs[Math.floor(Math.random() * gifs.length)];
    gif.className = "gif";

    gif.style.left = Math.random() * (window.innerWidth - 100) + "px";
    gif.style.top = Math.random() * (window.innerHeight - 120) + "px";

    document.body.appendChild(gif);
    setTimeout(() => gif.remove(), 4000);
}