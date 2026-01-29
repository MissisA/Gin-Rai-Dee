const menuData = {
     healthy: [
     { name: "สลัดอกไก่", cal: 150, price: "60-80", desc: "ผักสดกรอบๆ กับอกไก่นุ่มๆ คลีนสุดๆ" },
        { name: "น้ำพริกปลาทู+ผักต้ม", cal: 100, price: "40-50", desc: "รสจัดจ้าน ผักเน้นๆ ไม่อ้วนแน่นอน" },
        { name: "ต้มจืดเต้าหู้หมูสับ", cal: 120, price: "40-50", desc: "ซุปร้อนๆ คล่องคอ สบายท้อง" },
        { name: "ยำวุ้นเส้น", cal: 140, price: "50-60", desc: "เปรี้ยวเผ็ดซี๊ดซ๊าด วุ้นเส้นไม่อืดท้อง" },
        { name: "ผัดผักรวมมิตร", cal: 130, price: "40-50", desc: "ผักสดหลากสีสัน ผัดน้ำมันน้อยๆ" },
        { name: "ปลาแซลมอนย่าง", cal: 200, price: "150-200", desc: "เนื้อปลานุ่มๆ ย่างหอมๆ ทานคู่สลัด" }
     ],
     energy: [
        { name: "ข้าวผัดกะเพราไก่ไข่ดาว", cal: 650, price: "45-55", desc: "เมนูสิ้นคิดยอดฮิต รสจัดจ้าน" },
        { name: "ข้าวมันไก่", cal: 600, price: "45-50", desc: "ไก่นุ่ม ข้าวมันหอม พร้อมน้ำซุป" },
        { name: "ข้าวหมูแดงหมูกรอบ", cal: 700, price: "50-60", desc: "ซอสหวานฉ่ำ หมูกรอบเคี้ยวกรุบ" },
        { name: "ข้าวขาหมู", cal: 690, price: "50-60", desc: "เนื้อหนังนุ่มละลาย ราดน้ำชุ่มๆ" },
        { name: "ข้าวผัดปู", cal: 550, price: "60-80", desc: "ข้าวร่วนหอมกลิ่นกระทะ เนื้อปูเน้นๆ" }
    ],
    noodle: [
        { name: "บะหมี่เกี๊ยวหมูแดง", cal: 400, price: "40-50", desc: "เส้นเหนียวนุ่ม ซุปกลมกล่อม" },
        { name: "ก๋วยเตี๋ยวเรือ", cal: 350, price: "20-40", desc: "น้ำซุปเข้มข้น รสเด็ดไม่ต้องปรุง" },
        { name: "ผัดไทยกุ้งสด", cal: 500, price: "50-70", desc: "เส้นจันท์เหนียวหนึบ รสชาติไทยแท้" },
        { name: "มาม่าต้มยำ", cal: 300, price: "40-50", desc: "แซ่บซี๊ดถึงใจ ยามสิ้นเดือน" }
    ],
    international: [
        { name: "สปาเก็ตตี้คาโบนาร่า", cal: 650, price: "120+", desc: "ครีมซอสเข้มข้น เบคอนกรอบๆ" },
        { name: "เบอร์เกอร์เนื้อ", cal: 700, price: "150+", desc: "เนื้อฉ่ำๆ ชีสเยิ้มๆ กัดเต็มคำ" },
        { name: "ซูชิรวมมิตร", cal: 350, price: "150+", desc: "ปลาดิบสดใหม่ วาซาบิจี๊ดจ๊าด" }
    ],
    fruit: [
        { name: "มะม่วงสุก", cal: 120, price: "30-50", desc: "หวานหอม ชื่นใจ (ระวังน้ำตาล)" },
        { name: "แตงโม", cal: 60, price: "20-30", desc: "ฉ่ำน้ำ ดับกระหายคลายร้อน" },
        { name: "ทุเรียน", cal: 160, price: "100+", desc: "ราชาผลไม้ หวานมัน (แคลอรี่สูงปรี๊ด)" }
    ],
    dessert: [
        { name: "บิงซู", cal: 400, price: "150+", desc: "น้ำแข็งไสเกล็ดหิมะ ราดนมข้นหวานๆ" },
        { name: "เค้กช็อกโกแลต", cal: 450, price: "80+", desc: "ช็อกโกแลตเข้มข้น หวานบาดใจ" },
        { name: "ข้าวเหนียวมะม่วง", cal: 450, price: "60-80", desc: "กะทิเค็มมัน ตัดกับมะม่วงหวานฉ่ำ" }
     ]
};

function getRandomMenu() {

    const menuDisplay = document.getElementById("menu-name");
    const detailsBox = document.getElementById("food-details");

    const descDisplay = document.getElementById("food-desc");
    const calDisplay = document.getElementById("food-cal");
    const priceDisplay = document.getElementById("food-price");

    const btn = document.querySelector("button");
    const categorySelect = document.getElementById("category");

    const selectedCategory = categorySelect.value;
    let currentPool = [];
    
     if (selectedCategory === "all") {
          currentPool = [].concat(
               menuData.healthy,
               menuData.energy,
               menuData.noodle,
               menuData.international,
               menuData.fruit,
               menuData.dessert
          );
     } else {
        if(menuData[selectedCategory]) {
            currentPool = menuData[selectedCategory];
        } else {
            // กรณีหาไม่เจอ สร้างข้อมูลปลอมๆ ขึ้นมากัน Error
            currentPool = [{ name: "ไม่พบข้อมูล", cal: 0, price: 0, desc: "-" }];
        }
     }

    btn.disabled = true;
    btn.innerText = "กำลังสุ่มเมนู...";
    detailsBox.classList.add("hidden");

    const intervalId = setInterval(() => {
     let randomIndex = Math.floor(Math.random() * currentPool.length);
     menuDisplay.textContent = currentPool[randomIndex].name;
    }, 100);

    setTimeout(() => {
     clearInterval(intervalId);

     let finalIndex = Math.floor(Math.random() * currentPool.length);
     menuDisplay.textContent = currentPool[finalIndex].name;

     descDisplay.textContent = currentPool[finalIndex].desc;
     calDisplay.textContent = currentPool[finalIndex].cal + " กิโลแคลอรี่";
     priceDisplay.textContent = currentPool[finalIndex].price;

     detailsBox.classList.remove("hidden");

     btn.disabled = false;
     btn.innerText = "สุ่มเมนูใหม่";
    }, 2000);
}