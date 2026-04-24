<?php
// Konfigurationsdatei einbinden
require_once 'config/baseconfig.php';
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
  <!-- Externe Geräte-Erkennungs-Datei einbinden -->
  <script src="assets/js/core/device-detector.js"></script>
</head>

<body>
  <main>
    <div class="scroll-container" id="scroll-container">
      <div class="sections-inner">
        <!-- Sektion 1 -->
        <section class="section section-1" id="section-1">
          <div class="content-grid section-1-grid">
            <?php include getSectionPath(1); ?>
          </div>
        </section>

        <!-- Sektion 2 -->
        <section class="section section-2" id="section-2">
          <div class="content-grid section-2-grid">
            <?php include getSectionPath(2); ?>
          </div>
        </section>

        <!-- Sektion 3 -->
        <section class="section section-3" id="section-3">
          <div class="content-grid section-3-grid">
            <?php include getSectionPath(3); ?>
          </div>
        </section>

        <!-- Sektion 4 -->
        <section class="section section-4" id="section-4">
          <div class="content-grid section-4-grid">
            <?php include getSectionPath(4); ?>
          </div>
        </section>

        <!-- Sektion 5 -->
        <section class="section section-5" id="section-5">
          <div class="content-grid section-5-grid">
            <?php include getSectionPath(5); ?>
          </div>
        </section>

        <!-- Sektion 6 -->
        <section class="section section-6" id="section-6">
          <div class="content-grid section-6-grid">
            <?php include getSectionPath(6); ?>
          </div>
        </section>

        <!-- Sektion 7 -->
        <section class="section section-7" id="section-7">
          <div class="content-grid section-7-grid">
            <?php include getSectionPath(7); ?>
          </div>
        </section>

        <!-- Sektion 8 -->
        <section class="section section-8" id="section-8">
          <div class="content-grid section-8-grid">
            <?php include getSectionPath(8); ?>
          </div>
        </section>

        <!-- Sektion 9 -->
        <section class="section section-9" id="section-9">
          <div class="content-grid section-9-grid">
            <?php include getSectionPath(9); ?>
          </div>
        </section>

      </div>
    </div>
  </main>
  <script src="assets/js/pages/index.js"></script>
</body>

</html>