"use strict";
// ===========
// ハンバーガーメニュー
// ===========
const menuBtn = document.querySelector(".header-menu-btn");
const nav = document.querySelector(".header-nav");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  nav.classList.toggle("active");
});
// ===========
// 選ばれる理由スライドアニメーション
// ===========
const test = document.querySelector(".reason-bg");
const slideItem1 = document.querySelector(".item1");
const slideItem2 = document.querySelector(".item2");

window.addEventListener("scroll", () => {
  const windowheight = window.innerHeight;
  const item1Top = slideItem1.getBoundingClientRect().top;
  const item2Top = slideItem2.getBoundingClientRect().top;

  if (item1Top < windowheight) {
    slideItem1.classList.add("item1-active");
  }

  if (item2Top < windowheight) {
    slideItem2.classList.add("item2-active");
  }
});
// ===========
// 受講者の声受講者の声アニメーション
// ===========
const voiceItem = document.querySelectorAll(".student-voices-item");

window.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;

  voiceItem.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < windowHeight) {
      item.classList.add("student-voices-item-animation");
    }
  });
});
