MONTYSTORE — เว็บเงื่อนไขการใช้งานแอพพรีเมี่ยม

วิธีติดตั้งใน Google Apps Script
1. เข้า https://script.google.com และสร้างโปรเจกต์ใหม่
2. เปิดไฟล์ Code.gs แล้ววางเนื้อหาจาก Code.gs ชุดนี้ทับของเดิม
3. กดเครื่องหมาย + ข้างคำว่า Files เลือก HTML และตั้งชื่อว่า index
4. วางเนื้อหาจาก index.html ลงไป
5. กด Deploy > New deployment > Web app
6. Execute as เลือก Me
7. Who has access เลือก Anyone
8. กด Deploy แล้วคัดลอกลิงก์เว็บไปใช้งาน

การแก้กฎและเงื่อนไข
- เปิด index.html
- ค้นหาข้อความ: const apps = [
- รายการ usage คือเงื่อนไขการใช้งาน
- รายการ prohibited คือข้อห้าม
- รายการ warranty คือการรับประกันและแจ้งปัญหา
- หลังแก้ไข ต้อง Deploy > Manage deployments > Edit > New version > Deploy

หมายเหตุ
- ข้อความในเว็บเป็นเพียงตัวอย่าง ควรแก้ให้ตรงกับเงื่อนไขจริงของร้านก่อนเผยแพร่
- รายชื่อปัจจุบันมี 14 แอพ ตามรายการที่ได้รับ
