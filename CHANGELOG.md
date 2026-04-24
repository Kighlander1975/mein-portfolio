# Changelog

Alle wichtigen Änderungen an diesem Projekt werden in dieser Datei dokumentiert.

## [1.2.0] - 2026-04-24

### Hinzugefügt

- Neue Skript-Datei `assets/js/utils/reset-animation.js` zur Wiederherstellung von Animationen beim erneuten Besuch von Sektionen
- Funktion `loadCssIfExists()` für dynamisches Laden von CSS-Dateien nur wenn sie existieren
- Unterstützung für scrollbare Bereiche innerhalb der Seite (durch Klassen `modal`, `scrollable`, `allow-scroll`)

### Geändert

- Navigation CSS angepasst: maximale Breite auf 95% geändert
- Navigation in zwei Gruppen aufgeteilt (Sektionen 2-5 und 6-9)
- Erhöhter Abstand zwischen den Navigationsgruppen für bessere UX beim Hovern
- Home-Button-Stil: heller Blau-Gradient und schwarze Schrift für bessere Lesbarkeit
- Optimierte index.php durch dynamische Generierung der Sektionen und CSS-Einbindung
- Verbesserte Event-Handler in der disable-scroll.js zur Verhinderung von Konflikten mit index.js

### Behoben

- Problem mit Kollisionen zwischen disable-scroll.js und index.js
- Fehlende Animation beim Zurückkehren zu bereits besuchten Sektionen
- Scrollen mit der mittleren Maustaste (Autoscroll) ist nun deaktiviert

## [1.1.0] - 2026-04-10

### Hinzugefügt

- Grid-basierte Sektionsnavigation
- Home-Button-Komponente
- Grundlegende Navigation zwischen den Sektionen

### Geändert

- Verbesserte Responsive-Anpassungen für mobile Geräte
- Optimierte Ladezeiten durch Skript-Optimierung

## [1.0.0] - 2026-03-15

### Hinzugefügt

- Initiale Version mit 9-Sektionen-Layout
- Grundstruktur und Basisstil
- Geräteerkennung für spezifische Anpassungen
