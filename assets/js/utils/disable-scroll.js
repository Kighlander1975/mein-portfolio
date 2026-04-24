/**
 * Deaktiviert das Scrollen mit dem Mausrad und der mittleren Maustaste,
 * aber erlaubt Scrollen innerhalb von Modals und anderen spezifischen Elementen.
 */

document.addEventListener("DOMContentLoaded", function () {
  // Hilfsfunktion: Prüft, ob ein Element oder seine Eltern eine bestimmte Klasse haben
  function hasParentWithClass(element, className) {
    if (!element) return false;
    if (element.classList && element.classList.contains(className)) return true;
    return (
      element.parentNode && hasParentWithClass(element.parentNode, className)
    );
  }

  // Prüft, ob das Event-Target in einem scrollbaren Bereich ist
  function isInScrollableArea(target) {
    return (
      hasParentWithClass(target, "modal") ||
      hasParentWithClass(target, "scrollable") ||
      hasParentWithClass(target, "allow-scroll")
    );
  }

  // Verhindere Scrollen mit dem Mausrad
  window.addEventListener(
    "wheel",
    function (e) {
      // Erlaube Scrollen in Modals und anderen scrollbaren Bereichen
      if (isInScrollableArea(e.target)) return;

      e.preventDefault();
    },
    { passive: false },
  );

  // Verhindere Scrollen mit der mittleren Maustaste (Auto-Scroll)
  document.addEventListener(
    "mousedown",
    function (e) {
      // Erlaube Scrolling in Modals und anderen scrollbaren Bereichen
      if (isInScrollableArea(e.target)) return;

      // Die mittlere Maustaste hat den Wert 1 (0 ist links, 2 ist rechts)
      if (e.button === 1) {
        e.preventDefault();
        return false;
      }
    },
    { passive: false },
  );

  // Verhindere das Standard-Verhalten beim Klick mit der mittleren Maustaste
  document.addEventListener(
    "auxclick",
    function (e) {
      // Erlaube Aktionen in Modals und anderen scrollbaren Bereichen
      if (isInScrollableArea(e.target)) return;

      if (e.button === 1) {
        e.preventDefault();
        return false;
      }
    },
    { passive: false },
  );

  // Überschreibe auch das Touch-Verhalten für mobile Geräte
  document.addEventListener(
    "touchmove",
    function (e) {
      // Erlaube Scrollen in Modals und anderen scrollbaren Bereichen
      if (isInScrollableArea(e.target)) return;

      if (e.touches.length > 1) return; // Erlaube Multi-Touch (z.B. Zoom)
      e.preventDefault();
    },
    { passive: false },
  );
});
