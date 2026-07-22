# สรุปโครงสร้างโปรเจกต์ NASA Rover Photo Web Application

เอกสารนี้รวบรวมสรุปโครงสร้าง สถาปัตยกรรม และองค์ประกอบของโปรเจกต์ในปัจจุบัน เพื่อใช้เป็นข้อมูลอ้างอิงสำหรับการจัดทำแผนปรับปรุงโปรเจกต์ (Improvement Plan)

---

## 1. ภาพรวมโปรเจกต์ (Project Overview)

โปรเจกต์นี้เป็น Web Application แบบ Server-Side Rendering (SSR) พัฒนาด้วย **Node.js + Express.js** ร่วมกับ **EJS** เป็น Template Engine ทำหน้าที่ดึงข้อมูลและรูปภาพจาก **NASA Mars Rover Photos API** เพื่อนำมาแสดงผลบนเว็บแอปพลิเคชันตามชื่อหุ่นสำรวจ (Curiosity, Opportunity, Spirit) และวันที่ค้นหา (`earth_date`)

---

## 2. โครงสร้างโฟลเดอร์และไฟล์ (Current Directory Structure)

```text
My Capstone Project-4- NASA ROVER Photo by NASA API/
├── .env                  # เก็บ Environment Variables (APIKEY ของ NASA)
├── .gitignore            # กำหนดไฟล์ที่ไม่ต้องการติดตามใน Git (node_modules, .env)
├── package.json          # กำหนด Dependencies และข้อมูลสเปกโปรเจกต์
├── README.md             # เอกสารคู่มือการรันโปรเจกต์ขั้นพื้นฐาน
├── index.js              # ไฟล์หลัก (Server Entry point) ควบคุม Routes และ API call
├── index.html            # [ไฟล์ตกค้าง/ไม่ได้ใช้งาน] Static HTML
├── script.js             # [ไฟล์ตกค้าง/ไม่ได้ใช้งาน] Client JS
├── style.css              # [ไฟล์ตกค้าง/ไม่ได้ใช้งาน] Static CSS
├── public/               # Static assets สำหรับส่งให้ Client Browser
│   └── styles/           # ไฟล์ CSS แยกตามหน้า
│       ├── main.css      # สไตล์หลัก
│       ├── CamRover.css   # สไตล์หน้ากล้อง/หุ่นสำรวจ
│       ├── photo.css     # สไตล์หน้าแสดงผลรูปภาพ
│       ├── about.css     # สไตล์หน้าเกี่ยวกับ
│       ├── contact.css   # สไตล์หน้าติดต่อ
│       └── images/       # รูปภาพประกอบ UI
└── views/                # EJS Templates สำหรับหน้าแสดงผล
    ├── index.ejs         # หน้าแรก (Search Form)
    ├── photos.ejs        # หน้าแสดงรายการรูปภาพผลลัพธ์จาก API
    ├── camrover.ejs      # หน้าแสดงรายละเอียดหุ่น Rover และกล้อง
    ├── about.ejs         # หน้าเกี่ยวกับโปรเจกต์
    ├── contact.ejs       # หน้าติดต่อ
    └── partials/         # Component ส่วนแชร์ร่วมกัน
        ├── header.ejs    # ส่วนประกอบ <head> และ Meta tags
        ├── navbar.ejs    # เมนูนำทาง (Navigation Bar)
        └── footer.ejs    # ส่วนท้ายหน้า (Footer)
```

---

## 3. เทคโนโลยีและ Dependencies (Tech Stack)

| Package / Tool | เวอร์ชัน | หน้าที่การทำงาน |
| :--- | :--- | :--- |
| **Node.js** | - | Runtime Environment (ใช้รูปแบบ ES Modules: `"type": "module"`) |
| **Express.js** | `^4.18.2` | Web Framework สำหรับจัดการ HTTP Server & Routing |
| **EJS** | `^3.1.9` | Template Engine สำหรับ Dynamic HTML Rendering |
| **Axios** | `^1.5.0` | HTTP Client สำหรับส่งคำขอไปยัง NASA API |
| **body-parser** | `^1.20.2` | Middleware สำหรับดึงข้อมูลจาก Form POST Request (`req.body`) |
| **dotenv** | `^16.4.5` | โหลดค่า Environment Variable จากไฟล์ `.env` |
| **express-validator** | `^7.1.0` | (ติดตั้งแล้ว แต่อยู่ในแผนรอนำมาใช้งานตรวจเช็ก Input) |
| **nodemon** | `^3.1.0` | Development Server สำหรับ Auto-restart |

---

## 4. การทำงานของโค้ดปัจจุบัน (Current Logic & Data Flow)

1. **GET Routes**:
   - GET `/` และ `/home` -> render [index.ejs](file:///c:/Users/t57ha/OneDrive/เดสก์ท็อป/Web Development Bootcamp 2023/My Capstone Project NASA ROVER Photo by NASA API/My Capstone Project-4- NASA ROVER Photo by NASA API/views/index.ejs)
   - GET `/photo` -> render [photos.ejs](file:///c:/Users/t57ha/OneDrive/เดสก์ท็อป/Web Development Bootcamp 2023/My Capstone Project NASA ROVER Photo by NASA API/My Capstone Project-4- NASA ROVER Photo by NASA API/views/photos.ejs)
   - GET `/camrover` -> render [camrover.ejs](file:///c:/Users/t57ha/OneDrive/เดสก์ท็อป/Web Development Bootcamp 2023/My Capstone Project NASA ROVER Photo by NASA API/My Capstone Project-4- NASA ROVER Photo by NASA API/views/camrover.ejs)
   - GET `/about` -> render [about.ejs](file:///c:/Users/t57ha/OneDrive/เดสก์ท็อป/Web Development Bootcamp 2023/My Capstone Project NASA ROVER Photo by NASA API/My Capstone Project-4- NASA ROVER Photo by NASA API/views/about.ejs)
   - GET `/contact` -> render [contact.ejs](file:///c:/Users/t57ha/OneDrive/เดสก์ท็อป/Web Development Bootcamp 2023/My Capstone Project NASA ROVER Photo by NASA API/My Capstone Project-4- NASA ROVER Photo by NASA API/views/contact.ejs)

2. **POST Route (`/SEARCH`)**:
   - ดึงค่านามหุ่นสำรวจ (`NasaRovername`) และวันที่ (`RoverDay`) จาก Form Body
   - ยิง HTTP GET Request ไปยัง NASA API: `https://api.nasa.gov/mars-photos/api/v1/rovers/${Rname}/photos?earth_date=${RoverDay}&api_key=${APIKEY}`
   - หากมีรูปภาพ -> Render [photos.ejs](file:///c:/Users/t57ha/OneDrive/เดสก์ท็อป/Web Development Bootcamp 2023/My Capstone Project NASA ROVER Photo by NASA API/My Capstone Project-4- NASA ROVER Photo by NASA API/views/photos.ejs) พร้อมส่งข้อมูล `APIphotos`
   - หากไม่มีรูปภาพ -> Render [index.ejs](file:///c:/Users/t57ha/OneDrive/เดสก์ท็อป/Web Development Bootcamp 2023/My Capstone Project NASA ROVER Photo by NASA API/My Capstone Project-4- NASA ROVER Photo by NASA API/views/index.ejs) พร้อม Object สื่อสารข้อความเตือน

---

## 5. ประเด็นสำคัญสำหรับนำไปเขียนแผนปรับปรุง (Improvement Plan Key Points)

### 5.1 สถาปัตยกรรมและการจัดโครงสร้างโค้ด (Refactoring & Architecture)
- **ปัญหา**: โค้ดทั้งหมดรวมอยู่ใน [index.js](file:///c:/Users/t57ha/OneDrive/เดสก์ท็อป/Web Development Bootcamp 2023/My Capstone Project NASA ROVER Photo by NASA API/My Capstone Project-4- NASA ROVER Photo by NASA API/index.js) ทำให้ขาดระเบียบเมื่อแอปมีขนาดใหญ่ขึ้น
- **แนวทางปรับปรุง**: ปรับปรุงโครงสร้างเป็นรูปแบบ MVC (Model-View-Controller)
  - `routes/`: แยกไฟล์จัดการเส้นทาง URLs
  - `controllers/`: แยก Logic การประมวลผลและการ Render
  - `services/`: แยกส่วนการเชื่อมต่อกับ NASA API

### 5.2 การทำความสะอาดไฟล์ (Cleanup)
- **ปัญหา**: มีไฟล์ตกค้างที่ไม่ได้ใช้งานที่ Root Directory เช่น `index.html`, `script.js`, `style.css`
- **แนวทางปรับปรุง**: ลบไฟล์ตกค้างออกเพื่อลดความสับสน

### 5.3 การจัดการข้อผิดพลาดและ Validation (Error Handling & Input Validation)
- **ปัญหา 1**: บั๊กในคำสั่งตั้งค่า Port ใน [index.js](file:///c:/Users/t57ha/OneDrive/เดสก์ท็อป/Web Development Bootcamp 2023/My Capstone Project NASA ROVER Photo by NASA API/My Capstone Project-4- NASA ROVER Photo by NASA API/index.js) (`const port = 4000 || process.env.PORT;` ทำให้ระบบเลือกใช้ 4000 เสมอ)
- **ปัญหา 2**: ยังไม่มีการใช้ `express-validator` ตรวจสอบรูปแบบวันที่ หรือกรณีส่งค่าว่าง
- **ปัญหา 3**: การ catch error ส่งผลลัพธ์เป็น Plain Text ดิบๆ (`res.status(500).send(...)`)
- **แนวทางปรับปรุง**: 
  - แก้ไข Port ให้เป็น `process.env.PORT || 4000`
  - นำ `express-validator` มาใช้อย่างจริงจัง
  - สร้าง 404 / 500 Custom Error View เพื่อ UX ที่ดี

### 5.4 การเพิ่มฟีเจอร์และ UI/UX (Features & UI Enhancements)
- **เพิ่มระบบตัวกรองประเภทกล้อง (Camera Filter)**: อนุญาตให้ผู้ใช้กรองรูปตามกล้องที่ต้องการได้ (เช่น FHAZ, RHAZ, NAVCAM)
- **ระบบแบ่งหน้า (Pagination / Lazy Loading)**: ช่วยให้โหลดหน้าเว็บได้เร็วขึ้นเมื่อมีจำนวนรูปภาพมาก
- **Image Lightbox/Modal**: รองรับการกดดูรูปภาพขนาดใหญ่ความละเอียดสูง
- **Modern Responsive Design**: ปรับแต่ง CSS ให้ทันสมัย รองรับการแสดงผลบนอุปกรณ์มือถือ และเพิ่ม Dark Mode

### 5.5 การตั้งค่าสภาพแวดล้อม (Environment Configuration)
- **สร้าง `.env.example`**: เพื่อเป็นตัวอย่างไฟล์ Environment ตัวแปรกำหนดค่า
- **Fallback API Key**: หากไม่มี `.env` ให้สลับไปใช้ `DEMO_KEY` ของ NASA โดยอัตโนมัติพร้อมแจ้งเตือน
- **NPM Scripts**: เพิ่ม `"start": "node index.js"` และ `"dev": "nodemon index.js"` ลงใน `package.json`
