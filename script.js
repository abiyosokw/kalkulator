let tokens = [];
let current = '';
let finished = false;

const MAX_DIGIT = 12;

// Mengubah teks ekspresi menjadi versi yang enak dibaca di layar
function formatTampilan(teks) {
  return teks
    .replace(/\*/g, '×')  // semua * menjadi ×
    .replace(/\//g, '÷'); // semua / menjadi ÷
}

function render() {
  // Layar atas: ekspresi, dengan * dan / diganti × dan ÷
  $('#operation-screen').text(formatTampilan(tokens.join('') + current));

  // Layar bawah: angka yang sedang diketik (tidak berubah)
  $('#result-screen').text(current === '' ? '0' : current);
}

function hitung(x, operator, y) {
  let r;
  switch (operator) {
    case '+': r = x + y; break;
    case '-': r = x - y; break;
    case '*': r = x * y; break;
    case '/':
      if (y === 0) return 'Error';
      r = x / y;
      break;
  }
  return parseFloat(r.toFixed(10));
}

function evaluasi(list) {
  const t = list.slice();

  for (let i = 0; i < t.length; i++) {
    if (t[i] === '*' || t[i] === '/') {
      const r = hitung(parseFloat(t[i - 1]), t[i], parseFloat(t[i + 1]));
      if (r === 'Error') return 'Error';
      t.splice(i - 1, 3, String(r));
      i--;
    }
  }

  while (t.length > 1) {
    const r = hitung(parseFloat(t[0]), t[1], parseFloat(t[2]));
    t.splice(0, 3, String(r));
  }
  return parseFloat(t[0]);
}

$('.num').on('click', function () {
  const d = String($(this).data('value'));

  if (finished) { tokens = []; current = ''; finished = false; }

    const panjang = current.replace('-', '').replace('.', '').length;

  if (panjang >= MAX_DIGIT) return;

  current = (current === '0') ? d : current + d;
  render();
});

$('.op').on('click', function () {
  const o = String($(this).data('op'));
  finished = false;
  if (current !== '') {
    tokens.push(current, o);
    current = '';
  } else if (tokens.length > 0) {
    tokens[tokens.length - 1] = o;
  }
  render();
});

$('#equals').on('click', function () {
  if (current === '' || tokens.length === 0) return;
  const hasil = evaluasi(tokens.concat(current));

  $('#result-screen').text(hasil);

  tokens = [];
  current = (hasil === 'Error') ? '' : String(hasil);
  finished = true;
});

$('#clear').on('click', function () {
  tokens = [];
  current = '';
  finished = false;
  $('#operation-screen').text('');
  $('#result-screen').text('0');
});