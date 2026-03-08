/* ═══════════════════════════════════════════════════════════
   COOKIE CONSENT + ADSENSE CONDICIONAL — MolvicStudios
   Versión 2.0 — RGPD/LOPDGDD conforme con granularidad por finalidad.

   USO: <script src="cookie-consent.js"></script> antes de </body>
   ═══════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  var PUB_ID = 'ca-pub-1513893788851225';
  var CONSENT_KEY = 'molvic_cookie_consent_v2_' + location.hostname.replace(/\./g, '_');
  var PRIVACY_URL = '/pages/legal/privacidad.html';

  // ── AdSense loader ──
  function loadAdSense(personalized) {
    if (document.querySelector('script[src*="adsbygoogle"]')) return;
    if (!personalized) {
      (window.adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1;
    }
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + PUB_ID;
    s.crossOrigin = 'anonymous';
    document.head.appendChild(s);
  }

  // ── Read saved consent ──
  function getSaved() {
    try { return JSON.parse(localStorage.getItem(CONSENT_KEY) || 'null'); } catch { return null; }
  }

  // ── Apply saved consent on page load ──
  var saved = getSaved();
  if (saved) {
    if (saved.advertising) loadAdSense(true);
    else if (saved.essential) loadAdSense(false); // non-personalized still loaded
    return; // No banner needed
  }

  // ── Build granular consent banner ──
  function createBanner() {
    var old = document.getElementById('molvic-cookie-banner');
    if (old) old.remove();

    var wrap = document.createElement('div');
    wrap.id = 'molvic-cookie-banner';
    wrap.style.cssText = [
      'position:fixed', 'bottom:0', 'left:0', 'right:0',
      'z-index:2147483647', 'pointer-events:auto', 'isolation:isolate',
      'transform:translateZ(0)',
      'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif',
      'font-size:14px', 'line-height:1.5'
    ].join(';');

    wrap.innerHTML = [
      '<div id="mcc-main" style="background:#111118;border-top:2px solid #333;padding:20px 24px;',
        'box-shadow:0 -8px 40px rgba(0,0,0,0.75);color:#e0e0e0;">',
        '<div style="max-width:1000px;margin:0 auto;">',
          '<div style="display:flex;align-items:flex-start;gap:20px;flex-wrap:wrap;">',
            '<div style="flex:1;min-width:240px;">',
              '<p style="margin:0 0 6px;font-weight:700;font-size:15px;">🍪 Control de cookies</p>',
              '<p style="margin:0;font-size:13px;color:#aaa;line-height:1.6;">',
                'Usamos cookies para mostrar anuncios y mejorar el servicio. Puedes decidir qué aceptas. ',
                '<a href="' + PRIVACY_URL + '" style="color:#7eb8ff;text-decoration:underline;">Política de Privacidad</a>',
              '</p>',
            '</div>',
            '<div style="display:flex;flex-direction:column;gap:8px;flex-shrink:0;">',
              '<div style="display:flex;gap:8px;flex-wrap:wrap;">',
                '<button id="mcc-accept-all" style="background:#4a8eff;color:#fff;border:none;padding:10px 20px;',
                  'border-radius:8px;font-weight:700;cursor:pointer;font-size:13px;white-space:nowrap;">✅ Aceptar todo</button>',
                '<button id="mcc-reject-all" style="background:transparent;color:#aaa;border:1px solid #444;',
                  'padding:10px 20px;border-radius:8px;cursor:pointer;font-size:13px;white-space:nowrap;">Solo esenciales</button>',
                '<button id="mcc-show-settings" style="background:transparent;color:#7eb8ff;border:1px solid #4a8eff;',
                  'padding:10px 20px;border-radius:8px;cursor:pointer;font-size:13px;white-space:nowrap;">⚙️ Más opciones</button>',
              '</div>',
            '</div>',
          '</div>',
          '<div id="mcc-settings" style="display:none;margin-top:16px;padding-top:16px;border-top:1px solid #333;">',
            '<p style="margin:0 0 12px;font-weight:600;font-size:13px;color:#ccc;">Personaliza tus preferencias:</p>',
            '<div style="display:flex;flex-direction:column;gap:10px;">',
              renderCategory('mcc-cat-essential', '🔧 Esenciales', 'Necesarias para el funcionamiento básico del sitio. No se pueden desactivar.', true, true),
              renderCategory('mcc-cat-advertising', '📢 Publicidad', 'Cookies de Google AdSense para mostrar anuncios relevantes. Sin estas, los anuncios serán genéricos.', false, false),
            '</div>',
            '<button id="mcc-save-settings" style="margin-top:14px;background:#4a8eff;color:#fff;border:none;',
              'padding:10px 24px;border-radius:8px;font-weight:700;cursor:pointer;font-size:13px;">Guardar preferencias</button>',
          '</div>',
        '</div>',
      '</div>'
    ].join('');

    document.body.appendChild(wrap);

    // Events
    document.getElementById('mcc-accept-all').onclick = function() {
      saveConsent({ essential: true, advertising: true });
      wrap.remove();
      loadAdSense(true);
    };

    document.getElementById('mcc-reject-all').onclick = function() {
      saveConsent({ essential: true, advertising: false });
      wrap.remove();
      loadAdSense(false);
    };

    document.getElementById('mcc-show-settings').onclick = function() {
      var s = document.getElementById('mcc-settings');
      s.style.display = s.style.display === 'none' ? 'block' : 'none';
      this.textContent = s.style.display === 'block' ? '✖ Cerrar' : '⚙️ Más opciones';
    };

    document.getElementById('mcc-save-settings').onclick = function() {
      var adv = document.getElementById('mcc-cat-advertising');
      var consent = {
        essential: true,
        advertising: adv ? adv.checked : false
      };
      saveConsent(consent);
      wrap.remove();
      loadAdSense(consent.advertising);
    };
  }

  function renderCategory(id, title, desc, disabled, checked) {
    return [
      '<label style="display:flex;align-items:flex-start;gap:12px;cursor:' + (disabled ? 'default' : 'pointer') + ';">',
        '<input type="checkbox" id="' + id + '" ' + (checked ? 'checked' : '') + ' ' + (disabled ? 'disabled' : '') +
          ' style="width:18px;height:18px;margin-top:2px;accent-color:#4a8eff;flex-shrink:0;" />',
        '<div>',
          '<p style="margin:0;font-weight:600;font-size:13px;color:#ddd;">' + title + (disabled ? ' <span style="color:#666;font-weight:400;">(siempre activas)</span>' : '') + '</p>',
          '<p style="margin:2px 0 0;font-size:12px;color:#888;">' + desc + '</p>',
        '</div>',
      '</label>'
    ].join('');
  }

  function saveConsent(prefs) {
    prefs.date = new Date().toISOString();
    localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs));
  }

  // ── Show banner after render ──
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { setTimeout(createBanner, 300); });
  } else {
    setTimeout(createBanner, 300);
  }

  // ── Watchdog: re-inject if removed accidentally ──
  var checks = 0;
  var watchdog = setInterval(function() {
    if (++checks > 5) { clearInterval(watchdog); return; }
    var banner = document.getElementById('molvic-cookie-banner');
    if (!banner) { clearInterval(watchdog); return; }
    var rect = banner.getBoundingClientRect();
    if (rect.height === 0) { createBanner(); return; }
    var cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
    var top = document.elementFromPoint(cx, cy);
    if (top && !banner.contains(top)) document.body.appendChild(banner);
  }, 2000);

})();
