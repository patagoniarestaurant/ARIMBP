i18next
  .use(i18nextBrowserLanguageDetector)
  .init({
    fallbackLng: 'es',
    resources: {
      es: { translation: { "title": "Bienvenido a mi sitio", "description": "Este es un ejemplo de sitio con traducción automática y actualización vía admin." } },
      en: { translation: { "title": "Welcome to my site", "description": "This is an example of a site with automatic translation and admin update." } },
      fr: { translation: { "title": "Bienvenue sur mon site", "description": "Ceci est un exemple de site avec traduction automatique et mise à jour via admin." } },
      de: { translation: { "title": "Willkommen auf meiner Website", "description": "Dies ist ein Beispiel für eine Website mit automatischer Übersetzung und Admin-Aktualisierung." } },
      pt: { translation: { "title": "Bem-vindo ao meu site", "description": "Este é um exemplo de site com tradução automática e atualização via admin." } },
      zh: { translation: { "title": "欢迎来到我的网站", "description": "这是一个具有自动翻译和管理员更新功能的网站示例。" } },
      it: { translation: { "title": "Benvenuto nel mio sito", "description": "Questo è un esempio di sito con traduzione automatica e aggiornamento via admin." } },
      ru: { translation: { "title": "Добро пожаловать на мой сайт", "description": "Это пример сайта с автоматическим переводом и обновлением через admin." } }
    }
  }, function(err, t) {
    updateContent();
  });

function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = i18next.t(el.getAttribute('data-i18n'));
  });
}

function changeLanguage(lng) {
  i18next.changeLanguage(lng, updateContent);
}
