/**
 * Setzt Animationen für alle Sektionen zurück, wenn sie besucht werden
 */
document.addEventListener("DOMContentLoaded", function () {
  // Speichert bereits besuchte Sektionen
  const visitedSections = new Set();

  // Füge die aktuelle Sektion als bereits besucht hinzu (vermeidet Reset beim ersten Laden)
  const initialHash = window.location.hash;
  const initialSection = initialHash.match(/#section-(\d)/)
    ? initialHash.match(/#section-(\d)/)[1]
    : "1";
  visitedSections.add(initialSection);

  // Überwache Änderungen am Hash (URL-Fragment)
  window.addEventListener("hashchange", function () {
    // Ermittle die aktuelle Sektion aus dem Hash
    const hash = window.location.hash;
    const match = hash.match(/#section-(\d)/);
    const currentSection = match ? match[1] : "1";

    // Wenn wir diese Sektion bereits besucht haben, setze die Animation zurück
    if (visitedSections.has(currentSection)) {
      resetSectionAnimation(currentSection);
    }

    // Markiere diese Sektion als besucht
    visitedSections.add(currentSection);
  });

  // Funktion zum Zurücksetzen und Neustarten der Animation für eine bestimmte Sektion
  function resetSectionAnimation(sectionNumber) {
    const section = document.getElementById("section-" + sectionNumber);
    if (!section) return;

    // 1. Animierte Elemente in dieser Sektion finden
    const animatedElements = section.querySelectorAll(
      ".animate, .fade-in, .slide-in, .animated, [data-animation], .animation, " +
        ".hero-content *, .intro-element, .appear, .reveal, .entry-animation",
    );

    // 2. Animationen zurücksetzen
    animatedElements.forEach((element) => {
      // Element kurz ausblenden
      const originalOpacity = window.getComputedStyle(element).opacity;
      element.style.opacity = "0";

      // Animation-Klassen identifizieren
      const classList = Array.from(element.classList);
      const animationClasses = classList.filter(
        (cls) =>
          cls.includes("animate") ||
          cls.includes("fade") ||
          cls.includes("slide") ||
          cls.includes("appear") ||
          cls.includes("reveal") ||
          cls.includes("entry") ||
          cls.includes("intro"),
      );

      // Animation-Attribute identifizieren
      const hasAnimationAttr = element.hasAttribute("data-animation");
      const animationAttrValue = hasAnimationAttr
        ? element.getAttribute("data-animation")
        : null;

      // CSS-Animationseigenschaften speichern
      const originalAnimation = element.style.animation;
      const originalTransition = element.style.transition;

      // Alles zurücksetzen
      if (animationClasses.length > 0) {
        // Animationsklassen entfernen und neu hinzufügen
        animationClasses.forEach((cls) => {
          element.classList.remove(cls);
        });

        // Force Reflow (erzwingt DOM-Neuberechnung)
        void element.offsetWidth;

        // Klassen wieder hinzufügen
        setTimeout(() => {
          animationClasses.forEach((cls) => {
            element.classList.add(cls);
          });
          element.style.opacity = originalOpacity;
        }, 50);
      } else if (hasAnimationAttr) {
        // Data-Animation-Attribut neu anwenden
        element.removeAttribute("data-animation");

        // Force Reflow
        void element.offsetWidth;

        setTimeout(() => {
          element.setAttribute("data-animation", animationAttrValue);
          element.style.opacity = originalOpacity;
        }, 50);
      } else if (originalAnimation || originalTransition) {
        // CSS-Animation zurücksetzen
        element.style.animation = "none";
        element.style.transition = "none";

        // Force Reflow
        void element.offsetWidth;

        // Animation wieder herstellen
        setTimeout(() => {
          element.style.animation = originalAnimation;
          element.style.transition = originalTransition;
          element.style.opacity = originalOpacity;
        }, 50);
      } else {
        // Falls keine spezifischen Animationsklassen, nur Opacity-Animation neu starten
        void element.offsetWidth;
        element.style.transition = "opacity 0.8s ease-in-out";

        setTimeout(() => {
          element.style.opacity = originalOpacity || "1";
        }, 50);
      }
    });
  }
});
