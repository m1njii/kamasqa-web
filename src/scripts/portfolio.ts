// Manejador interactivo de portafolio: Giro 3D, filtros de categoría y carrusel móvil
export function initPortfolio(): void {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const container = document.getElementById("bento-cards-container");
  const scenes = Array.from(document.querySelectorAll(".bento-card-scene"));
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  const dotsContainer = document.getElementById("carousel-dots-container");
  const countBadge = document.getElementById("active-count-label");
  const filterStatusText = document.getElementById("filter-status-text");

  if (!container || scenes.length === 0) return;

  let visibleScenes = [...scenes];
  let currentIndex = 0;

  // 1. Manejo del Giro 3D (Flip Card)
  document.querySelectorAll(".flip-to-back-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const scene = btn.closest(".bento-card-scene");
      if (scene) {
        scene.classList.add("is-flipped");
      }
    });
  });

  document.querySelectorAll(".flip-to-front-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const scene = btn.closest(".bento-card-scene");
      if (scene) {
        scene.classList.remove("is-flipped");
      }
    });
  });

  // 2. Control Dinámico de Dots del Carrusel
  const updateDots = () => {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = "";
    visibleScenes.forEach((_, idx) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = `carousel-dot ${idx === currentIndex ? "active" : ""}`;
      dot.setAttribute("data-dot-index", idx.toString());
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `Ir al proyecto ${idx + 1}`);
      dot.setAttribute("aria-selected", idx === currentIndex ? "true" : "false");
      dot.addEventListener("click", () => {
        scrollToCard(idx);
      });
      dotsContainer.appendChild(dot);
    });
  };

  const updateArrows = () => {
    if (prevBtn) {
      (prevBtn as HTMLButtonElement).disabled = currentIndex === 0;
    }
    if (nextBtn) {
      (nextBtn as HTMLButtonElement).disabled = currentIndex === visibleScenes.length - 1;
    }
  };

  const scrollToCard = (index: number) => {
    if (index < 0 || index >= visibleScenes.length) return;
    const targetScene = visibleScenes[index] as HTMLElement;
    if (targetScene && container) {
      container.scrollTo({
        left: targetScene.offsetLeft - container.offsetLeft,
        behavior: "smooth"
      });
      currentIndex = index;
      updateDots();
      updateArrows();
    }
  };

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        scrollToCard(currentIndex - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentIndex < visibleScenes.length - 1) {
        scrollToCard(currentIndex + 1);
      }
    });
  }

  // Sincronización al scrollear horizontalmente en móvil (Touch Swipe)
  let scrollTimeout: number;
  container.addEventListener("scroll", () => {
    window.clearTimeout(scrollTimeout);
    scrollTimeout = window.setTimeout(() => {
      if (window.innerWidth <= 860) {
        const scrollLeft = container.scrollLeft;
        let closestIdx = 0;
        let minDiff = Infinity;

        visibleScenes.forEach((scene, idx) => {
          const diff = Math.abs((scene as HTMLElement).offsetLeft - container.offsetLeft - scrollLeft);
          if (diff < minDiff) {
            minDiff = diff;
            closestIdx = idx;
          }
        });

        if (closestIdx !== currentIndex) {
          currentIndex = closestIdx;
          updateDots();
          updateArrows();
        }
      }
    }, 60);
  }, { passive: true });

  // 3. Sistema de Filtros por Categoría
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedCat = btn.getAttribute("data-category");
      if (!selectedCat) return;

      filterButtons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      visibleScenes = [];
      scenes.forEach((scene) => {
        scene.classList.remove("is-flipped");
        const sceneCat = scene.getAttribute("data-card-category");
        if (selectedCat === "Todos" || sceneCat === selectedCat || scene.classList.contains("bento-card-cta-scene")) {
          scene.classList.remove("card-hidden");
          visibleScenes.push(scene);
        } else {
          scene.classList.add("card-hidden");
        }
      });

      // Actualizar contador
      const count = selectedCat === "Todos"
        ? scenes.length - 1
        : scenes.filter((s) => s.getAttribute("data-card-category") === selectedCat).length;

      if (countBadge) {
        countBadge.textContent = `${count} Caso${count !== 1 ? "s" : ""} Activo${count !== 1 ? "s" : ""}`;
      }

      if (filterStatusText) {
        if (selectedCat === "Todos") {
          filterStatusText.textContent = "Mostrando todos los proyectos seleccionados";
        } else {
          filterStatusText.textContent = `Filtrando por sector: ${selectedCat}`;
        }
      }

      currentIndex = 0;
      updateDots();
      updateArrows();
      if (container) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }

      if (typeof (window as any).__kamasqaTranslate === "function") {
        (window as any).__kamasqaTranslate();
      }
    });
  });

  updateDots();
  updateArrows();
}
