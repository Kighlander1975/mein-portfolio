# Changelog

Alle wichtigen Änderungen am Projekt werden in dieser Datei dokumentiert.

## [Unreleased]

## [1.1.0] - 2026-04-24

### Hinzugefügt

- PHP-basierte Struktur für bessere Modularität
- Ordner `sections/` mit separaten Dateien für jede Sektion (section-1.php bis section-9.php)
- Ordner `components/` für wiederverwendbare UI-Elemente
- "Zur Startseite"-Button Komponente für Navigation von allen Sektionen
- Zentrale Konfigurationsdatei `config/baseconfig.php` mit globalen Variablen und Hilfsfunktionen
- Modularisiertes CSS mit separaten Dateien für Komponenten unter `assets/css/components/`

### Geändert

- Umwandlung von index.html zu index.php mit PHP-Includes für alle Sektionen
- Bessere Wartbarkeit durch Auslagerung der Sektionsinhalte in separate Dateien
- Verbesserte Code-Organisation mit zentraler Konfiguration und Hilfsfunktionen

### Entfernt

- Touch-Funktionalität (in vorheriger Änderung), da hauptsächlich für Desktop-Geräte konzipiert

## [1.0.0] - 2025-01-15

### Hinzugefügt

- Initiale Version des 3x3 Grid Layouts
- Smooth Scrolling zwischen den 9 Sektionen
- Tastatur-Navigation (Ziffern 1-9 und Pfeiltasten)
- Responsive Design für verschiedene Bildschirmgrößen
- Device-Detector für mobile Geräte
