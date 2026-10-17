/* EduChinese demo — interactions. No backend, no sending. */
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.add("js");

  // Burger
  var burger = document.getElementById("burger");
  var nav = document.getElementById("nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        if (window.innerWidth <= 960) {
          nav.classList.remove("open");
          burger.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // Hero sketch -> photo + hanzi draw (works on touch, no hover needed)
  var photo = document.getElementById("heroPhoto");
  var hanziCard = document.querySelector(".hanzi-card");
  var pencil = document.querySelector(".u-pencil");
  function playHero() {
    if (photo) photo.classList.add("is-revealed");
    if (hanziCard) hanziCard.classList.add("is-drawn");
    if (pencil) pencil.classList.add("is-drawn");
  }
  if (reduce) {
    playHero();
  } else {
    setTimeout(playHero, 350);
    if ("IntersectionObserver" in window && photo) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { playHero(); io.disconnect(); } });
      }, { threshold: 0.2 });
      io.observe(photo);
    }
  }

  // Reveal on scroll (opacity + translateY only)
  var reveals = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var ro = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); ro.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { ro.observe(el); });
    // pencil underlines inside viewport
    var po = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-drawn"); po.unobserve(e.target); } });
    }, { threshold: 0.6 });
    document.querySelectorAll(".u-pencil").forEach(function (el) { po.observe(el); });
  }

  // FAQ accordion (button + aria-expanded, height via grid-rows in CSS)
  document.querySelectorAll(".faq__item").forEach(function (item) {
    var btn = item.querySelector(".faq__q");
    var panel = item.querySelector(".faq__a");
    if (!btn || !panel) return;
    // wrap inner for grid animation
    if (!panel.firstElementChild || panel.firstElementChild.tagName !== "DIV") {
      var wrap = document.createElement("div");
      while (panel.firstChild) wrap.appendChild(panel.firstChild);
      panel.appendChild(wrap);
    }
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      // single-open: close others
      document.querySelectorAll(".faq__q[aria-expanded='true']").forEach(function (b) {
        if (b !== btn) {
          b.setAttribute("aria-expanded", "false");
          b.closest(".faq__item").querySelector(".faq__a").classList.remove("open");
          b.closest(".faq__item").querySelector(".faq__a").setAttribute("hidden", "");
        }
      });
      btn.setAttribute("aria-expanded", open ? "false" : "true");
      if (open) { panel.classList.remove("open"); panel.setAttribute("hidden", ""); }
      else { panel.removeAttribute("hidden"); requestAnimationFrame(function(){ panel.classList.add("open"); }); }
    });
  });

  // Lead form — honest demo, nothing is sent anywhere
  var form = document.getElementById("leadForm");
  if (form) {
    var name = document.getElementById("fName");
    var phone = document.getElementById("fPhone");
    var eName = document.getElementById("eName");
    var ePhone = document.getElementById("ePhone");
    var status = document.getElementById("formStatus");
    function demoMsg() {
      try {
        if (typeof SITE_CONTENT !== "undefined" && SITE_CONTENT.demo) return SITE_CONTENT.demo.formMessage;
      } catch (e) {}
      return "Демо-режим: заявка никуда не отправляется.";
    }
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var ok = true;
      var nv = (name.value || "").trim();
      var pv = (phone.value || "").replace(/\D/g, "");
      if (nv.length < 2) { eName.hidden = false; name.setAttribute("aria-invalid", "true"); ok = false; }
      else { eName.hidden = true; name.removeAttribute("aria-invalid"); }
      if (pv.length < 10) { ePhone.hidden = false; phone.setAttribute("aria-invalid", "true"); ok = false; }
      else { ePhone.hidden = true; phone.removeAttribute("aria-invalid"); }
      status.textContent = ok ? demoMsg() + " Введено: " + nv + " — данные остаются в вашем браузере."
                              : "Проверьте выделенные поля: имя и телефон нужны, чтобы понять пример валидации.";
      status.classList.add("show");
      status.focus && status.setAttribute("tabindex", "-1");
      if (!ok) { (name.getAttribute("aria-invalid") ? name : phone).focus(); }
    });
  }
})();
