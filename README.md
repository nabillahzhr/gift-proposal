<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Surat untuk Ojan</title>
  <link rel="stylesheet" href="2-style.css">
</head>
<body>
  <!-- LOGIN -->
  <div id="loginScreen" class="screen">
    <div class="login-box">
      <h2>Login</h2>
      <input type="text" id="username" placeholder="Nama">
      <input type="password" id="password" placeholder="Password">
      <button id="loginBtn">Masuk</button>
    </div>
  </div>

  <!-- AMPOLOP -->
  <div id="envelopeScreen" class="screen hidden">
    <div class="envelope" id="openEnvelopeBtn">
      <div class="flap"></div>
      <p>Buka Surat</p>
    </div>
  </div>

  <!-- SURAT PERTAMA -->
  <div id="letter1Screen" class="screen hidden">
    <div class="letter">
      <p id="letter1Text">
        HBD, Jan. Gue nggak bisa diem aja anyg walaupun lo udah ngelarang si wkwkwk. Gue nggak tau cara paling tepat buat ngucapin ini selain jujur aja: gue bersyukur banget lo ada di hidup gue. Makasih udah jadi temen deket gue, yang selalu bikin gue ngerasa aman, dihargain, dan dikuatin. Gue tau hidup nggak selalu mulus, tapi gue harap lo selalu punya alasan buat senyum, punya kekuatan buat jalan terus, dan punya orang-orang yang nggak pernah ninggalin lo — termasuk gue. Makasih juga udah masih mau di sini temenan sama gue, di saat yang lain udah sibuk sama dunia masing-masing. Lain kali bagi-bagi teh yang pahitnya juga, jangan cuma cerita pas udah beresnya doang, nggak seru — gue juga butuh tantangan wkwkwk. Lo tau kan, Jan… nggak semua orang bisa bikin gue betah, tapi entah kenapa, lo bisa.
      </p>
      <button id="nextLetter1">Lanjut →</button>
    </div>
  </div>

  <!-- SURAT KEDUA -->
  <div id="letter2Screen" class="screen hidden">
    <div class="letter">
      <p id="letter2Text">
        Jan, udah cukup lah kita di posisi nanggung gini. Kita udah tau perasaan masing-masing dari dulu, bahkan udah lewat batas temen tapi nggak pernah lo teken jelas. Gue nggak mau jadi cuma ‘temen yang spesial’ tanpa status. Jadi, sekarang gue minta lo jawab
      </p>
      <div class="btn-group">
        <button id="btnYes" class="btn-sky">Kita Lanjut</button>
        <button id="btnNo" class="btn-off">Kita Berenti & Aku Pergi</button>
      </div>
    </div>
  </div>

  <!-- HASIL AKHIR -->
  <div id="resultScreen" class="screen hidden">
    <div class="letter">
      <p id="resultText"></p>
    </div>
  </div>

  <!-- AUDIO -->
  <audio id="songYes" src="https://cdn.pixabay.com/download/audio/2023/10/13/audio_7a4a6a8a02.mp3?filename=acoustic-uplifting-169409.mp3"></audio>
  <audio id="songNo" src="https://cdn.pixabay.com/download/audio/2021/11/09/audio_9a67d7b58a.mp3?filename=memories-11321.mp3"></audio>

  <script src="3-script.js"></script>
</body>
</html>
