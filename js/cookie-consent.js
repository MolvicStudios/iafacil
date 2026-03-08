/* ═══════════════════════════════════════════════════════════
   COOKIE CONSENT + ADSENSE CONDICIONAL — IAFACIL.HELP
   Incluir en TODAS las páginas ANTES de </body>
   ═══════════════════════════════════════════════════════════ */

(function() {
  var CONSENT_KEY = 'iafacil_cookie_consent';
  var PUB_ID = 'ca-pub-1513893788851225';

  function loadAdSense() {
    if (document.querySelector('script[src*="adsbygoogle"]')) return;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + PUB_ID;
    s.crossOrigin = 'anonymous';
    document.head.appendChild(s);
  }

  // Check saved consent
  var consent = localStorage.getItem(CONSENT_KEY);
  if (consent === 'rejected') {
    (window.adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1;
    loadAdSense();
    return;
  }
  if (consent === 'accepted') {
    loadAdSense();
    return;
  }

  // No consent yet — show banner
  var banner = document.createElement('div');
  banner.id = 'cookie-consent-banner';
  banner.innerHTML =
    '<div style="max-width:960px;margin:0 auto;display:flex;align-items:center;gap:16px;flex-wrap:wrap;">' +
      '<div style="flex:1;min-width:240px;">' +
        '🍪 Este sitio utiliza cookies de Google AdSense para mostrar anuncios personalizados. ' +
        'Consulta nuestra <a href="/pages/legal/privacidad.html" style="color:var(--primary-color,#6c5ce7);">Política de Privacidad</a> ' +
        'y <a href="/pages/legal/cookies.html" style="color:var(--primary-color,#6c5ce7);">Política de Cookies</a>. ' +
        'Más info: <a href="https://policies.google.com/technologies/partner-sites" style="color:var(--primary-color,#6c5ce7);" target="_blank" rel="noopener">Cómo usa Google los datos</a>.' +
      '</div>' +
      '<div style="display:flex;gap:8px;flex-shrink:0;">' +
        '<button id="cc-accept" style="' +
          'background:var(--primary-color,#6c5ce7);color:#fff;border:none;padding:8px 18px;' +
          'border-radius:8px;font-weight:700;cursor:pointer;font-size:0.85rem;' +
        '">Aceptar</button>' +
        '<button id="cc-reject" style="' +
          'background:transparent;color:var(--text-muted,#888);border:1px solid var(--border-color,#333);padding:8px 18px;' +
          'border-radius:8px;cursor:pointer;font-size:0.85rem;' +
        '">Solo esenciales</button>' +
      '</div>' +
    '</div>';

  banner.style.cssText =
    'position:fixed;bottom:0;left:0;right:0;z-index:99999;' +
    'background:var(--bg-secondary,#1a1a2e);' +
    'border-top:1px solid var(--border-color,#333);' +
    'padding:14px 20px;font-size:0.85rem;' +
    'color:var(--text-primary,#e0e0e0);' +
    'box-shadow:0 -4px 20px rgba(0,0,0,0.5);' +
    'font-family:inherit;';

  document.body.appendChild(banner);

  document.getElementById('cc-accept').addEventListener('click', function() {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    banner.remove();
    loadAdSense();
  });

  document.getElementById('cc-reject').addEventListener('click', function() {
    localStorage.setItem(CONSENT_KEY, 'rejected');
    banner.remove();
    (window.adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1;
    loadAdSense();
  });
})();
