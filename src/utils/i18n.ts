// Motor de traducción e internacionalización del cliente (i18n)
import { enDict } from "../data/translations";

type TrackedText = Text & { __origEs?: string };

  const normalizeText = (s: string) => s.replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();

  const translateDynamicEsToEn = (s: string): string | undefined => {
    if (enDict[s] !== undefined) return enDict[s];

    const getSvcTrans = (term: string) => enDict[term] || translateDynamicEsToEn(term) || term;

    // Fallbacks para prefijos / sufijos comunes
    if (s.startsWith("✓ ")) {
      const rest = s.slice(2).trim();
      const tr = enDict[rest] || translateDynamicEsToEn(rest);
      if (tr) return `✓ ${tr}`;
    }
    if (s.startsWith("⏱ ")) {
      const rest = s.slice(2).trim();
      const tr = enDict[rest] || translateDynamicEsToEn(rest);
      if (tr) return `⏱ ${tr}`;
    }
    if (s.endsWith(" →")) {
      const rest = s.slice(0, -2).trim();
      const tr = enDict[rest] || translateDynamicEsToEn(rest);
      if (tr) return `${tr} →`;
    }
    if (s.endsWith(":")) {
      const rest = s.slice(0, -1).trim();
      const tr = enDict[rest] || translateDynamicEsToEn(rest);
      if (tr) return `${tr}:`;
    }

    const mFrom = s.match(/^Desde\s+S\/\s*(.+)$/i);
    if (mFrom) return `From S/ ${mFrom[1]}`;

    const mSave = s.match(/^Ahorras hasta\s+(.+)\s+por lanzamiento$/i);
    if (mSave) return `You save up to ${mSave[1]} (Launch Offer)`;

    const mMods = s.match(/^(\d+)\s+módulos\s+\(\+(.+)\)$/i);
    if (mMods) return `${mMods[1]} modules (+${mMods[2]})`;

    const mYearCopy = s.match(/^©\s*(\d+)\s*KAMASQA\.\s*Todos los derechos reservados\.$/i);
    if (mYearCopy) return `© ${mYearCopy[1]} KAMASQA. All rights reserved.`;

    const mPilar = s.match(/^Ir al pilar\s*(\d+)$/i);
    if (mPilar) return `Go to pillar ${mPilar[1]}`;

    const mDeliv = s.match(/^Ir al entregable\s*(\d+)$/i);
    if (mDeliv) return `Go to deliverable ${mDeliv[1]}`;

    const mFormat = s.match(/^Ir al formato\s*(\d+)$/i);
    if (mFormat) return `Go to format ${mFormat[1]}`;

    const mPaso = s.match(/^Paso\s*(\d+)$/i);
    if (mPaso) return `Step ${mPaso[1]}`;

    const mCard = s.match(/^Ver tarjeta\s*(\d+)$/i);
    if (mCard) return `View card ${mCard[1]}`;

    const mDetalles = s.match(/^Ver detalles completos de\s*(.+)$/i);
    if (mDetalles) return `View full details of ${getSvcTrans(mDetalles[1])}`;

    const mServicio = s.match(/^Ver servicio\s*(.+)$/i);
    if (mServicio) return `View ${getSvcTrans(mServicio[1])} service`;

    const mCotizarWa = s.match(/^Cotizar\s*(.+)\s*por WhatsApp$/i);
    if (mCotizarWa) return `Quote ${getSvcTrans(mCotizarWa[1])} on WhatsApp`;

    const mAgendar = s.match(/^Agendar reunión para\s*(.+)$/i);
    if (mAgendar) return `Book discovery call for ${getSvcTrans(mAgendar[1])}`;

    const mPillarsInc = s.match(/^Pilares incluidos en tu\s*(.+)$/i);
    if (mPillarsInc) return `Pillars included in your ${getSvcTrans(mPillarsInc[1])}`;

    const mLoQueInc = s.match(/^Lo que incluye tu proyecto de\s*(.+)$/i);
    if (mLoQueInc) return `What is included in your ${getSvcTrans(mLoQueInc[1])}`;

    const mReady = s.match(/^¿Listo para comenzar con tu\s*(.+)\??$/i);
    if (mReady) return `Ready to get started with your ${getSvcTrans(mReady[1])}?`;

    const mMetaTime = s.match(/^(.+)\s*·\s*(\d+\s*a\s*\d+\s*días hábiles)$/i);
    if (mMetaTime) {
      const svc = getSvcTrans(mMetaTime[1]);
      const time = enDict[mMetaTime[2]] || mMetaTime[2].replace('días hábiles', 'business days').replace(' a ', ' to ');
      return `${svc} · ${time}`;
    }

    const mTimeAvg = s.match(/^⏱\s*(.+)\s*promedio$/i);
    if (mTimeAvg) return `⏱ ${mTimeAvg[1]} average`;

    const mDays = s.match(/^(\d+)\s+a\s+(\d+)\s+días hábiles$/i);
    if (mDays) return `${mDays[1]} to ${mDays[2]} business days`;

    const mActiveCases = s.match(/^(\d+)\s+Casos?\s+Activos?$/i);
    if (mActiveCases) return `${mActiveCases[1]} Active Case${mActiveCases[1] !== '1' ? 's' : ''}`;

    const mFilterSec = s.match(/^Filtrando por sector:\s*(.+)$/i);
    if (mFilterSec) return `Filtering by sector: ${getSvcTrans(mFilterSec[1])}`;

    const mCotizarCard = s.match(/^Cotizar proyecto similar a\s*(.+)$/i);
    if (mCotizarCard) return `Quote project similar to ${mCotizarCard[1]}`;

    const mCotizarSol = s.match(/^Cotizar solución similar a\s*(.+)$/i);
    if (mCotizarSol) return `Quote solution similar to ${mCotizarSol[1]}`;

    const mGirarCard = s.match(/^Girar tarjeta para ver análisis técnico de\s*(.+)$/i);
    if (mGirarCard) return `Flip card to view technical analysis of ${mGirarCard[1]}`;

    const mAbrirWeb = s.match(/^Abrir sitio web de\s*(.+)$/i);
    if (mAbrirWeb) return `Open website of ${mAbrirWeb[1]}`;

    const mIrAlCaso = s.match(/^Ir al caso\s*(\d+)$/i);
    if (mIrAlCaso) return `Go to case ${mIrAlCaso[1]}`;

    const mIrAlProy = s.match(/^Ir al proyecto\s*(\d+)$/i);
    if (mIrAlProy) return `Go to project ${mIrAlProy[1]}`;

    const mSubMeta = s.match(/^(.+)\s*·\s*(Activación en 24h|24 a 48 horas|Atención prioritaria)$/i);
    if (mSubMeta) {
      const svc = getSvcTrans(mSubMeta[1]);
      const time = enDict[mSubMeta[2]] || mSubMeta[2];
      return `${svc} · ${time}`;
    }

    const mCotizarSub = s.match(/^Cotizar subservicio\s*(.+)$/i);
    if (mCotizarSub) return `Quote ${getSvcTrans(mCotizarSub[1])} subservice`;

    const mVerSub = s.match(/^Ver subservicio\s*(\d+)$/i);
    if (mVerSub) return `View subservice ${mVerSub[1]}`;

    return undefined;
  };

  const translateDocument = (lang: "es" | "en") => {
    document.documentElement.lang = lang;

    // Actualización de document.title
    if (!(window as any).__origTitle) {
      (window as any).__origTitle = document.title;
    }
    if (lang === "en") {
      const orig = (window as any).__origTitle;
      const transTitle = enDict[orig] || translateDynamicEsToEn(orig);
      if (transTitle) document.title = transTitle;
    } else if ((window as any).__origTitle) {
      document.title = (window as any).__origTitle;
    }

    // 1. Traducción exhaustiva del árbol de nodos de texto
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes: TrackedText[] = [];
    let current = walker.nextNode();
    while (current) {
      nodes.push(current as TrackedText);
      current = walker.nextNode();
    }

    nodes.forEach((node) => {
      const parentTag = node.parentElement?.tagName;
      if (parentTag === "SCRIPT" || parentTag === "STYLE") return;
      if (node.parentElement?.closest("[data-no-translate]")) return;

      const raw = node.nodeValue || "";
      const norm = normalizeText(raw);
      if (!norm) return;

      const directMatch = translateDynamicEsToEn(norm);
      if (directMatch !== undefined && !node.__origEs) {
        node.__origEs = norm;
      }

      if (lang === "en") {
        const esKey = node.__origEs || norm;
        const translated = translateDynamicEsToEn(esKey);
        if (translated) {
          const leadSpace = /^\s/.test(raw) ? " " : "";
          const trailSpace = /\s$/.test(raw) ? " " : "";
          node.nodeValue = `${leadSpace}${translated}${trailSpace}`;
        }
      } else {
        if (node.__origEs) {
          const leadSpace = /^\s/.test(raw) ? " " : "";
          const trailSpace = /\s$/.test(raw) ? " " : "";
          node.nodeValue = `${leadSpace}${node.__origEs}${trailSpace}`;
        }
      }
    });

    // 2. Traducción de atributos visibles (aria-label, title, placeholder)
    const attrElements = document.querySelectorAll<HTMLElement>("[aria-label], [title], [placeholder]");
    attrElements.forEach((el) => {
      ["aria-label", "title", "placeholder"].forEach((attr) => {
        const val = el.getAttribute(attr);
        if (!val) return;
        const norm = normalizeText(val);
        const dataKey = `orig${attr.replace(/-/g, "")}`;
        if (!(el.dataset as Record<string, string>)[dataKey]) {
          (el.dataset as Record<string, string>)[dataKey] = norm;
        }
        if (lang === "en") {
          const baseVal = (el.dataset as Record<string, string>)[dataKey] || norm;
          const trans = translateDynamicEsToEn(baseVal);
          if (trans) el.setAttribute(attr, trans);
        } else {
          const original = (el.dataset as Record<string, string>)[dataKey];
          if (original) el.setAttribute(attr, original);
        }
      });
    });
  };

  (window as unknown as { __kamasqaTranslate?: () => void }).__kamasqaTranslate = () => {
    const activeLang = (localStorage.getItem("kamasqa_lang") as "es" | "en") || "es";
    translateDocument(activeLang);
  };

  window.addEventListener("kamasqa:lang", (e: Event) => {
    const detail = (e as CustomEvent<{ lang: "es" | "en" }>).detail;
    if (detail?.lang) {
      translateDocument(detail.lang);
    }
  });

  const initialLang = (localStorage.getItem("kamasqa_lang") as "es" | "en") || "es";
  if (initialLang === "en") {
    translateDocument("en");
    window.dispatchEvent(new CustomEvent("kamasqa:lang", { detail: { lang: "en" } }));
  }

export function initI18n(): void {
  // Escuchador de traducción global
  (window as unknown as { __kamasqaTranslate?: () => void }).__kamasqaTranslate = () => {
    const activeLang = (localStorage.getItem("kamasqa_lang") as "es" | "en") || "es";
    translateDocument(activeLang);
  };

  window.addEventListener("kamasqa:lang", (e: Event) => {
    const detail = (e as CustomEvent<{ lang: "es" | "en" }>).detail;
    if (detail?.lang) {
      translateDocument(detail.lang);
    }
  });

  const initialLang = (localStorage.getItem("kamasqa_lang") as "es" | "en") || "es";
  if (initialLang === "en") {
    translateDocument("en");
    window.dispatchEvent(new CustomEvent("kamasqa:lang", { detail: { lang: "en" } }));
  }
}

export { enDict, translateDynamicEsToEn, translateDocument };
