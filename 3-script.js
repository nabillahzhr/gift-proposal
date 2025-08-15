// ELEMENTS
const loginScreen = document.getElementById('loginScreen');
const envelopeScreen = document.getElementById('envelopeScreen');
const letter1Screen = document.getElementById('letter1Screen');
const letter2Screen = document.getElementById('letter2Screen');
const resultScreen = document.getElementById('resultScreen');

const loginBtn = document.getElementById('loginBtn');
const openEnvelopeBtn = document.getElementById('openEnvelopeBtn');
const nextLetter1Btn = document.getElementById('nextLetter1');
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');

const songYes = document.getElementById('songYes');
const songNo = document.getElementById('songNo');
const resultText = document.getElementById('resultText');

// LOGIN
loginBtn.addEventListener('click', () => {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if(username && password){
    localStorage.setItem('username', username);
    localStorage.setItem('loggedIn', 'true');
    loginScreen.classList.add('hidden');
    envelopeScreen.classList.remove('hidden');
    const correctUsername = "Abil"; "Ahmad Faozan";
    const correctPassword = "346"; "150806";
  } else {
    alert('Isi username dan password dulu ya!');
  }
});

// BUKA SURAT
openEnvelopeBtn.addEventListener('click', () => {
  envelopeScreen.classList.add('hidden');
  letter1Screen.classList.remove('hidden');
});

// SURAT PERTAMA
nextLetter1Btn.addEventListener('click', () => {
  letter1Screen.classList.add('hidden');
  letter2Screen.classList.remove('hidden');
});

// SURAT KEDUA PILIHAN
btnYes.addEventListener('click', () => {
  letter2Screen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
  resultText.textContent = "Anjayy, berti klo udh gini bukan gimn kepercayaan masing masing lagi ya? Saling mengakui dan tau diri aja mana yg salah mana yg bener okei? Gue percaya sama lo";
  localStorage.setItem('ojanResponse', 'yes');
  songYes.play();
});

btnNo.addEventListener('click', () => {
  letter2Screen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
  resultText.textContent = "Thankks Ojan Markojan";
  localStorage.setItem('ojanResponse', 'no');
  songNo.play();
});


