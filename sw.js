const CACHE_NAME = "gin-rai-dee-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json"
  // ถ้ามีรูปไอคอน อย่าลืมใส่บรรทัดนี้ด้วย: "./icon-192.png", "./icon-512.png"
];

// 1. ติดตั้งและเก็บไฟล์ลง Cache
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// 2. เวลาเรียกใช้ไฟล์ ให้ดึงจาก Cache ก่อน (ถ้าไม่มีเน็ตก็รอด)
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});