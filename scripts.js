const translations = {
  en: {
    title: "Welcome",
    header: "Hello, World!",
    paragraph: "This is a bilingual static website."
  },
  ar: {
    title: "مرحبًا",
    header: "مرحبًا بالعالم!",
    paragraph: "هذا موقع ثابت ثنائي اللغة."
  }
};

function setLang(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// اختياري: حافظ على اختيار المستخدم بين الجلسات
const defaultLang = localStorage.getItem("lang") || "en";
setLang(defaultLang);
document.querySelectorAll("nav button").forEach(btn =>
  btn.addEventListener("click", () => {
    const lang = btn.textContent === "عربي" ? "ar" : "en";
    localStorage.setItem("lang", lang);
  })
);
