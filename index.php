<?php
// Konfigurationsdatei einbinden
require_once 'config/baseconfig.php';

// Funktion zum bedingten Laden von CSS-Dateien
function loadCssIfExists($path)
{
  if (file_exists($_SERVER['DOCUMENT_ROOT'] . '/' . $path)) {
    echo '<link rel="stylesheet" href="' . $path . '">' . PHP_EOL;
  }
}
?>
<!doctype html>
<html lang="de">

<head>
  <!--
			Layout © <?php echo $authorInfo; ?>
			Lizenz: CC BY-NC 4.0 – nicht-kommerzielle Nutzung, Credit-Link darf nicht entfernt werden.
			Siehe LICENSE.txt für Details.
		-->
  <meta charset="UTF-8" />
  <title><?php echo $siteTitle; ?></title>
  <!-- Rest des Head-Bereichs -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="assets/css/index.css" />
  <link rel="stylesheet" href="assets/css/components/home-button.css" />
  <link rel="stylesheet" href="assets/css/components/navigation.css">

  <!-- Dynamisches Laden der Sektions-CSS-Dateien -->
  <?php
  for ($i = 1; $i <= 9; $i++) {
    loadCssIfExists("assets/css/sections/section-{$i}.css");
  }
  ?>

  <!-- Externe Geräte-Erkennungs-Datei einbinden -->
  <script src="assets/js/core/device-detector.js"></script>
</head>

<body>
  <main>
    <div class="scroll-container" id="scroll-container">
      <div class="sections-inner">
        <?php
        // Dynamisches Generieren der Sektionen
        for ($i = 1; $i <= 9; $i++):
        ?>
          <!-- Sektion <?php echo $i; ?> -->
          <section class="section section-<?php echo $i; ?>" id="section-<?php echo $i; ?>">
            <div class="content-grid section-<?php echo $i; ?>-grid">
              <?php include getSectionPath($i); ?>
            </div>
          </section>
        <?php endfor; ?>
      </div>
    </div>
  </main>
  <script src="assets/js/pages/index.js"></script>
  <script src="assets/js/utils/disable-scroll.js"></script>
  <script src="assets/js/utils/reset-animation.js"></script>
</body>

</html>