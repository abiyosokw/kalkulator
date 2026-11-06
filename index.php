<?php
$nama = "Abiyoso Kayana Wibowo";
$nim  = "255150707111011";
?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Kalkulator jQuery</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="calc">

    <p class="identity">
      <strong>Nama: <?= htmlspecialchars($nama) ?></strong>
      <span>NIM: <?= htmlspecialchars($nim) ?></span>
    </p>

  <div id="display">
    <div id="operation-screen"></div><br>
    <div id="result-screen">0</div>
  </div>

    <div class="pad">
      <button class="num" data-value="1">1</button>
      <button class="num" data-value="2">2</button>
      <button class="num" data-value="3">3</button>

      <button class="num" data-value="4">4</button>
      <button class="num" data-value="5">5</button>
      <button class="num" data-value="6">6</button>

      <button class="num" data-value="7">7</button>
      <button class="num" data-value="8">8</button>
      <button class="num" data-value="9">9</button>

      <button class="num" id="zero" data-value="0">0</button>
      <button id="clear">C</button>

      <button class="op" data-op="+">+</button>
      <button class="op" data-op="-">-</button>
      <button class="op" data-op="*">×</button>
      <button class="op" data-op="/">÷</button>

      <button id="equals">=</button>
    </div>
  </main>

  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="script.js"></script>
</body>
</html>