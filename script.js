// หา element ที่ต้องการจาก DOM
const menuToggle = document.querySelector('#menu-toggle');
const siteNav = document.querySelector('.site-nav');
// ตรวจก่อนวา่ เจอจริง กนั หนา้ที่ไม่มีปุ่มน้ีเกิด error
if (menuToggle && siteNav) {
 menuToggle.addEventListener('click', function () {
 siteNav.classList.toggle('open'); // มีกเ็อาออก ไม่มีกใ็ส่เขา้
 // บอกโปรแกรมอ่านหนา้จอวา่ ตอนน้ีเมนูเปิดหรือปิด
 const isOpen = siteNav.classList.contains('open');
 menuToggle.setAttribute('aria-expanded', isOpen);
 });
}
// หาชื่อไฟลข์องหนา้ที่กา ลงัเปิดอยู่ เช่น "projects.html"
let currentPage = window.location.pathname.split('/').pop();
// ถ้าเปิ ดที่รากของเว็บ ใหถ้ือวา่ เป็น index.html
if (currentPage === '') {
 currentPage = 'index.html';
}
// วนดูลิ้งคเ์มนูทุกตวั แลว้ใส่ active ใหต้วัที่ตรงกบั หนา้ปัจจุบนั
const navLinks = document.querySelectorAll('.site-nav a');
navLinks.forEach(function (link) {
 const linkPage = link.getAttribute('href');
 if (linkPage === currentPage) {
 link.classList.add('active');
 } else {
 link.classList.remove('active');
 }
});
