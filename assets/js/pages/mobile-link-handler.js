/**
 * Steuert die Sichtbarkeit des "Trotzdem zur Desktop-Version"-Links auf der mobilen Seite
 * Der Link wird nur angezeigt, wenn kein mobiles Gerät verwendet wird
 * (also wenn jemand fälschlicherweise auf der mobilen Seite gelandet ist)
 */
document.addEventListener("DOMContentLoaded", function () {
  // Prüfen, ob die shouldShowDesktopLink Funktion existiert
  if (typeof window.shouldShowDesktopLink !== "function") {
    console.error("Die Funktion shouldShowDesktopLink wurde nicht gefunden!");
    return;
  }

  // Desktop-Link Element finden (basierend auf deiner HTML-Struktur)
  const desktopLinkContainer = document.querySelector(".desktop-link");

  if (desktopLinkContainer) {
    // Prüfen ob es ein mobiles Gerät ist
    if (window.shouldShowDesktopLink()) {
      // Es ist KEIN mobiles Gerät - Link anzeigen
      desktopLinkContainer.style.display = "block";
    } else {
      // Es ist ein mobiles Gerät - Link verstecken
      desktopLinkContainer.style.display = "none";
    }
  }
});
