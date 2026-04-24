<?php

/**
 * Basis-Konfiguration
 * 
 * Diese Datei enthält grundlegende Konfigurationseinstellungen für das gesamte Projekt.
 */

// Basis-Pfad für Include-Operationen
$basePath = __DIR__ . '/..';

// Weitere globale Einstellungen könnten hier hinzugefügt werden
$siteTitle = '3x3 Smooth Scroll Grid';
$authorInfo = 'Layout © 2025 Kai Akkermann / kighlander.de';

// Debug-Modus (nützlich für Entwicklungsumgebungen)
$debugMode = false;

// Pfad-Helfer-Funktionen (optional)
function getComponentPath($componentName)
{
    global $basePath;
    return "{$basePath}/components/{$componentName}.php";
}

function getSectionPath($sectionNumber)
{
    global $basePath;
    return "{$basePath}/sections/section-{$sectionNumber}.php";
}
