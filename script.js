// Кнопка "Да"
function yesClick() {
    document.getElementById("result").style.display = "block";

    // Запуск гифок
    for (let i = 0; i < 6; i++) {
        setTimeout(spawnGif, i * 400);
    }
}

// Кнопка "Нет" убегает
function moveNo() {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    // "Да" становится больше
    const scale = yesBtn.dataset.scale ? Number(yesBtn.dataset.scale) : 1;
    const newScale = scale + 0.1;
    yesBtn.dataset.scale = newScale;
    yesBtn.style.transform = `scale(${newScale})`;
}

// Летающие сердечки
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (16 + Math.random() * 24) + "px";
    heart.style.animationDuration = (3 + Math.random() * 5) + "s";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 300);

// Гифки
const gifs = ["heart1.gif", "heart2.gif", "heart3.gif"];

function spawnGif() {
    const gif = document.createElement("img");
    gif.src = gifs[Math.floor(Math.random() * gifs.length)];
    gif.className = "gif";

    gif.style.left = Math.random() * (window.innerWidth - 150) + "px";
    gif.style.top = Math.random() * (window.innerHeight - 150) + "px";

    document.body.appendChild(gif);
    setTimeout(() => gif.remove(), 5000);
}