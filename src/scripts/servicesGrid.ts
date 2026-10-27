// Manejador interactivo de servicios y subservicios: conmutador de vistas, carrusel y popular ticker
export function initServicesGrid(): void {
// ========================================================
  // 1. Carrusel de Tarjetas de Servicios Principales en Móvil
  // ========================================================
  const srvGrid = document.getElementById("services-grid-track");
  const srvDots = document.querySelectorAll(".srv-carousel-dots .s-dot");

  if (srvGrid && srvDots.length > 0) {
    const updateSrvDots = () => {
      const scrollLeft = srvGrid.scrollLeft;
      const cardWidth = srvGrid.querySelector<HTMLElement>(".vertical-card")?.offsetWidth || 300;
      const activeIdx = Math.round(scrollLeft / cardWidth);
      srvDots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === activeIdx);
      });
    };

    srvGrid.addEventListener("scroll", updateSrvDots, { passive: true });

    srvDots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const idx = Number(dot.getAttribute("data-idx") || 0);
        const card = srvGrid.querySelectorAll<HTMLElement>(".vertical-card")[idx];
        if (card) {
          card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
      });
    });
  }

  // ========================================================
  // 2. Carrusel de Tarjetas de Subservicios en Móvil
  // ========================================================
  const subGrid = document.getElementById("subservices-grid-track");
  const subDots = document.querySelectorAll(".sub-carousel-dots .s-dot");

  if (subGrid && subDots.length > 0) {
    const updateSubDots = () => {
      const scrollLeft = subGrid.scrollLeft;
      const cardWidth = subGrid.querySelector<HTMLElement>(".vertical-card")?.offsetWidth || 300;
      const activeIdx = Math.round(scrollLeft / cardWidth);
      subDots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === activeIdx);
      });
    };

    subGrid.addEventListener("scroll", updateSubDots, { passive: true });

    subDots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const idx = Number(dot.getAttribute("data-sub-idx") || 0);
        const card = subGrid.querySelectorAll<HTMLElement>(".vertical-card")[idx];
        if (card) {
          card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
      });
    });
  }

  // ========================================================
  // 3. Helper para Stack Móvil de Popular Now
  // ========================================================
  function initPopularStack(
    stageId: string,
    itemSelector: string,
    dotsSelector: string,
    prevId: string,
    nextId: string
  ) {
    const stage = document.getElementById(stageId);
    const cards = Array.from(document.querySelectorAll<HTMLElement>(itemSelector));
    const dots = Array.from(document.querySelectorAll<HTMLElement>(dotsSelector));
    const prevBtn = document.getElementById(prevId);
    const nextBtn = document.getElementById(nextId);

    if (!stage || cards.length === 0) return { render: () => {} };

    let currentIdx = 0;
    const total = cards.length;
    let autoTimer: number | null = null;

    const renderStack = () => {
      const isMobile = window.innerWidth <= 840;
      if (!isMobile) {
        cards.forEach((c) => {
          c.style.removeProperty("transform");
          c.style.removeProperty("opacity");
          c.style.removeProperty("z-index");
          c.style.removeProperty("pointer-events");
        });
        return;
      }

      cards.forEach((card, i) => {
        const rel = (i - currentIdx + total) % total;
        if (rel === 0) {
          card.style.transform = "translate3d(0, 0, 0) scale(1)";
          card.style.opacity = "1";
          card.style.zIndex = "10";
          card.style.pointerEvents = "auto";
        } else if (rel === 1) {
          card.style.transform = "translate3d(0, 12px, -20px) scale(0.95)";
          card.style.opacity = "0.78";
          card.style.zIndex = "8";
          card.style.pointerEvents = "none";
        } else if (rel === 2) {
          card.style.transform = "translate3d(0, 24px, -40px) scale(0.90)";
          card.style.opacity = "0.52";
          card.style.zIndex = "6";
          card.style.pointerEvents = "none";
        } else {
          card.style.transform = "translate3d(0, 36px, -60px) scale(0.85)";
          card.style.opacity = "0.25";
          card.style.zIndex = "4";
          card.style.pointerEvents = "none";
        }
      });

      dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === currentIdx);
      });
    };

    const nextCard = () => {
      const topCard = cards[currentIdx];
      if (window.innerWidth <= 840 && topCard) {
        topCard.style.transform = "translate3d(-100px, -20px, 0) rotate(-6deg) scale(0.88)";
        topCard.style.opacity = "0";
        window.setTimeout(() => {
          currentIdx = (currentIdx + 1) % total;
          renderStack();
        }, 220);
      } else {
        currentIdx = (currentIdx + 1) % total;
        renderStack();
      }
    };

    const prevCard = () => {
      currentIdx = (currentIdx - 1 + total) % total;
      renderStack();
    };

    const resetTimer = () => {
      if (autoTimer) window.clearInterval(autoTimer);
      autoTimer = window.setInterval(() => {
        if (window.innerWidth <= 840) {
          nextCard();
        }
      }, 5000);
    };

    dots.forEach((dot, idx) => {
      dot.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIdx = idx;
        renderStack();
        resetTimer();
      });
    });

    nextBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      nextCard();
      resetTimer();
    });

    prevBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      prevCard();
      resetTimer();
    });

    let touchStartX = 0;
    let touchStartY = 0;
    stage.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    stage.addEventListener("touchend", (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
        if (diffX < 0) nextCard();
        else prevCard();
        resetTimer();
      }
    }, { passive: true });

    window.addEventListener("resize", renderStack, { passive: true });
    renderStack();
    resetTimer();

    return { render: renderStack };
  }

  const mainPopularStack = initPopularStack(
    "popular-stage",
    "#popular-stage .pt-item",
    "#pop-mini-dots .pm-dot",
    "pop-prev",
    "pop-next"
  );

  const subPopularStack = initPopularStack(
    "sub-popular-stage",
    "#sub-popular-stage .pt-item",
    "#sub-pop-mini-dots .pm-dot",
    "sub-pop-prev",
    "sub-pop-next"
  );

  // ========================================================
  // 4. Conmutador Dinámico: Servicios Principales <-> Subservicios (Bilingüe)
  // ========================================================
  const toggleBtn = document.getElementById("btn-toggle-services");
  const toggleBtnLabel = document.getElementById("toggle-btn-label");
  const viewStage = document.getElementById("services-view-stage");
  const mainPanel = document.getElementById("services-main-panel");
  const subPanel = document.getElementById("services-sub-panel");
  const secTitle = document.getElementById("services-sec-title");
  const secDesc = document.getElementById("services-sec-desc");
  const viewBadge = document.getElementById("services-view-badge");

  if (toggleBtn && viewStage && mainPanel && subPanel) {
    let currentView: "main" | "sub" = "main";
    let isTransitioning = false;

    const updateHeaderLabels = (view: "main" | "sub") => {
      const isEn = document.documentElement.lang === "en" || localStorage.getItem("kamasqa_lang") === "en";

      if (view === "sub") {
        if (toggleBtnLabel) {
          (toggleBtnLabel as any).__origEs = "← Volver a servicios principales";
          toggleBtnLabel.textContent = isEn ? "← Back to main services" : "← Volver a servicios principales";
        }
        if (viewBadge) {
          (viewBadge as any).__origEs = "Infraestructura & Soporte Dedicado";
          viewBadge.textContent = isEn ? "Dedicated Infrastructure & Support" : "Infraestructura & Soporte Dedicado";
        }
        if (secTitle) {
          (secTitle as any).__origEs = "Subservicios";
          secTitle.textContent = isEn ? "Subservices" : "Subservicios";
        }
        if (secDesc) {
          (secDesc as any).__origEs =
            "Alojamiento cloud de alto rendimiento, identidades corporativas bajo tu dominio y bolsas de horas para soporte especializado.";
          secDesc.textContent = isEn
            ? "High-performance cloud hosting, custom-domain corporate email, and on-demand hours for specialized technical support."
            : "Alojamiento cloud de alto rendimiento, identidades corporativas bajo tu dominio y bolsas de horas para soporte especializado.";
        }
      } else {
        if (toggleBtnLabel) {
          (toggleBtnLabel as any).__origEs = "Ver subservicios y soporte";
          toggleBtnLabel.textContent = isEn ? "View subservices & support" : "Ver subservicios y soporte";
        }
        if (viewBadge) {
          (viewBadge as any).__origEs = "Soluciones Web Principales";
          viewBadge.textContent = isEn ? "Core Web Solutions" : "Soluciones Web Principales";
        }
        if (secTitle) {
          (secTitle as any).__origEs = "Nuestras Soluciones Web";
          secTitle.textContent = isEn ? "Our Web Solutions" : "Nuestras Soluciones Web";
        }
        if (secDesc) {
          (secDesc as any).__origEs =
            "Desde una primera cotización transparente hasta la entrega final, tendrás un proceso claro, atención personalizada y soporte continuo.";
          secDesc.textContent = isEn
            ? "From a transparent initial quote to final delivery, you will enjoy a clear process, personalized attention, and continuous support."
            : "Desde una primera cotización transparente hasta la entrega final, tendrás un proceso claro, atención personalizada y soporte continuo.";
        }
      }
    };

    // Escuchar cambios de idioma en caliente desde el header
    window.addEventListener("kamasqa:lang", () => {
      updateHeaderLabels(currentView);
    });

    toggleBtn.addEventListener("click", () => {
      if (isTransitioning) return;
      isTransitioning = true;

      const goingToSub = currentView === "main";

      // 1. Estado de salida en el panel activo
      const outgoingPanel = goingToSub ? mainPanel : subPanel;
      const incomingPanel = goingToSub ? subPanel : mainPanel;

      outgoingPanel.classList.add("is-leaving");
      outgoingPanel.classList.remove("is-active", "is-entering");

      // Microanimación en el botón
      toggleBtn.classList.toggle("is-sub-active", goingToSub);
      toggleBtn.setAttribute("aria-expanded", String(goingToSub));

      window.setTimeout(() => {
        outgoingPanel.style.display = "none";
        outgoingPanel.classList.remove("is-leaving");
        outgoingPanel.setAttribute("aria-hidden", "true");

        incomingPanel.style.display = "block";
        incomingPanel.removeAttribute("aria-hidden");
        // Reflow forzado para asegurar disparo de la animación CSS
        void incomingPanel.offsetWidth;
        incomingPanel.classList.add("is-active", "is-entering");

        // Centrar carrusel al inicio si está en móvil
        if (goingToSub) {
          if (subGrid) subGrid.scrollLeft = 0;
          subPopularStack.render();
        } else {
          if (srvGrid) srvGrid.scrollLeft = 0;
          mainPopularStack.render();
        }

        // 2. Actualizar textos de cabecera y botón con soporte bilingüe
        currentView = goingToSub ? "sub" : "main";
        viewStage.setAttribute("data-current-view", currentView);
        updateHeaderLabels(currentView);

        // Si la página tiene sistema bilingüe activo, sincronizar traducciones del panel entrante
        const translator = (window as unknown as { __kamasqaTranslate?: () => void }).__kamasqaTranslate;
        if (typeof translator === "function") {
          translator();
        }

        window.setTimeout(() => {
          incomingPanel.classList.remove("is-entering");
          isTransitioning = false;
        }, 320);
      }, 190);
    });
  }
}
