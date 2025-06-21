// 🌐 輪播廣告邏輯
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  const container = document.querySelector('.carousel-container');
  container.style.transform = `translateX(-${index * 100}vw)`;
  currentSlide = index;
}

function nextSlide() {
  let newIndex = (currentSlide + 1) % slides.length;
  showSlide(newIndex);
}

// 自動輪播每 5 秒
setInterval(nextSlide, 5000);

// 點擊圓點跳轉
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});

// ⏱ ETA 倒數模擬（例如 20 分鐘倒數）
let etaMinutes = 20;
const etaSpan = document.getElementById('eta');

function updateETA() {
  if (etaMinutes >= 0) {
    etaSpan.textContent = `${etaMinutes} 分鐘`;
    etaMinutes--;
  } else {
    etaSpan.textContent = "已送達";
  }
}
updateETA();
setInterval(updateETA, 60000); // 每分鐘更新一次

// 📣 彈跳通知模擬
const toast = document.getElementById('toast');

function showToast(message, duration = 5000) {
  toast.textContent = message;
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, duration);
}

// 初始觸發一次（可改為按鈕觸發或條件觸發）
setTimeout(() => {
  showToast("📣 熱門店家「阿興便當」剛上架！");
}, 3000);
