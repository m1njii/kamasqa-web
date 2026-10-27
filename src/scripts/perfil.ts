// Manejador interactivo de perfil: carrusel móvil de pilares y métricas
export function initPerfil(): void {
// Control de carrusel en móvil para los 4 pilares con interacción y autoplay cada 5 segundos
  const track = document.getElementById("pillars-track");
  const dots = document.querySelectorAll<HTMLButtonElement>("#pm-dots .pm-dot");
  const prevBtn = document.getElementById("pm-prev");
  const nextBtn = document.getElementById("pm-next");

  if (track && dots.length > 0) {
    let activeIdx = 0;
    const total = dots.length;
    let autoTimer: number | null = null;

    const scrollTo = (idx: number) => {
      const cards = track.children;
      const card = cards[idx] as HTMLElement;
      if (card) {
        const left = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
        track.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
      }
      activeIdx = idx;
      dots.forEach((d, i) => d.classList.toggle("active", i === activeIdx));
    };

    const updateDotsOnScroll = () => {
      const scrollLeft = track.scrollLeft;
      const card = track.children[0] as HTMLElement;
      const cardWidth = card ? card.offsetWidth + 16 : 280;
      const calcIdx = Math.round(scrollLeft / cardWidth);
      const clamped = Math.max(0, Math.min(total - 1, calcIdx));
      if (clamped !== activeIdx) {
        activeIdx = clamped;
        dots.forEach((d, i) => d.classList.toggle("active", i === activeIdx));
      }
    };

    const startAutoplay = () => {
      if (autoTimer) clearInterval(autoTimer);
      if (window.innerWidth <= 860) {
        autoTimer = window.setInterval(() => {
          const next = (activeIdx + 1) % total;
          scrollTo(next);
        }, 5000);
      }
    };

    const stopAutoplay = () => {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
      }
    };

    track.addEventListener("scroll", updateDotsOnScroll, { passive: true });

    let touchStartX = 0;
    track.addEventListener("touchstart", (e) => {
      stopAutoplay();
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener("touchend", (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) {
          scrollTo((activeIdx + 1) % total);
        } else {
          scrollTo((activeIdx - 1 + total) % total);
        }
      }
      startAutoplay();
    }, { passive: true });

    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        stopAutoplay();
        scrollTo(idx);
        startAutoplay();
      });
    });

    prevBtn?.addEventListener("click", () => {
      stopAutoplay();
      const next = (activeIdx - 1 + total) % total;
      scrollTo(next);
      startAutoplay();
    });

    nextBtn?.addEventListener("click", () => {
      stopAutoplay();
      const next = (activeIdx + 1) % total;
      scrollTo(next);
      startAutoplay();
    });

    startAutoplay();
    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) stopAutoplay();
      else startAutoplay();
    }, { passive: true });
  }

  // ========================================================
  // Carrusel de Cartas Apiladas (Hero de Perfil en Móvil)
  // Auto-play cada 3 segundos + interactivo por touch / click
  // ========================================================
  const statsTrack = document.getElementById("peh-stats-track");
  const statCards = document.querySelectorAll<HTMLElement>(".peh-stat-card");
  const statDots = document.querySelectorAll<HTMLElement>(".peh-dot");
  const statPrev = document.getElementById("peh-prev");
  const statNext = document.getElementById("peh-next");

  if (statsTrack && statCards.length > 0) {
    let topIndex = 0;
    const totalStats = statCards.length;
    let statTimer: number | null = null;

    const updateStack = () => {
      if (window.innerWidth > 860) return;

      statCards.forEach((card, idx) => {
        const relLayer = (idx - topIndex + totalStats) % totalStats;
        card.setAttribute("data-layer", relLayer.toString());
        card.classList.toggle("is-top", relLayer === 0);
      });

      statDots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === topIndex);
      });
    };

    const nextCard = () => {
      const currentTop = statCards[topIndex];
      if (currentTop) {
        currentTop.classList.add("is-leaving");
        window.setTimeout(() => {
          currentTop.classList.remove("is-leaving");
          topIndex = (topIndex + 1) % totalStats;
          updateStack();
        }, 220);
      } else {
        topIndex = (topIndex + 1) % totalStats;
        updateStack();
      }
    };

    const prevCard = () => {
      topIndex = (topIndex - 1 + totalStats) % totalStats;
      updateStack();
    };

    // Al hacer click en la carta pasa a la siguiente
    statsTrack.addEventListener("click", () => {
      resetStatTimer();
      nextCard();
    });

    // Swipe táctil en móvil
    let startX = 0;
    statsTrack.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      stopStatTimer();
    }, { passive: true });

    statsTrack.addEventListener("touchend", (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = endX - startX;
      if (Math.abs(diff) > 35) {
        if (diff < 0) nextCard();
        else prevCard();
      }
      startStatTimer();
    }, { passive: true });

    statNext?.addEventListener("click", (e) => {
      e.stopPropagation();
      resetStatTimer();
      nextCard();
    });

    statPrev?.addEventListener("click", (e) => {
      e.stopPropagation();
      resetStatTimer();
      prevCard();
    });

    // Autoplay estricto cada 3 segundos en responsive
    const startStatTimer = () => {
      stopStatTimer();
      if (window.innerWidth <= 860) {
        statTimer = window.setInterval(() => {
          nextCard();
        }, 3000);
      }
    };

    const stopStatTimer = () => {
      if (statTimer) {
        clearInterval(statTimer);
        statTimer = null;
      }
    };

    const resetStatTimer = () => {
      stopStatTimer();
      startStatTimer();
    };

    startStatTimer();
    updateStack();

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) {
        stopStatTimer();
      } else {
        startStatTimer();
        updateStack();
      }
    }, { passive: true });
  }
}
