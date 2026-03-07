// Home 
document.addEventListener("DOMContentLoaded", function () {
  const tombolShout = document.getElementById("btn-shout");

  if (tombolShout) {
    tombolShout.addEventListener("click", function () {
      alert("Hai, Selamat datang di Sistem Sederhana");
    });
  }
});

// Menu
document.addEventListener("DOMContentLoaded", function () {
  const tombolShout = document.getElementById("btn-shout");
  if (tombolShout) {
    tombolShout.addEventListener("click", function () {
      alert("Hai, Selamat datang di Sistem Sederhana");
    });
  }

  const qtyBakso = document.getElementById("qty-bakso");
  const qtySoto = document.getElementById("qty-soto");
  const qtyMie = document.getElementById("qty-mie");

  const fieldTotal = document.getElementById("jumlah-total");
  const fieldDiskon = document.getElementById("diskon");
  const fieldBayar = document.getElementById("jumlah-bayar");

  const btnReset = document.getElementById("btn-reset");

  if (qtyBakso) {
    alert("Input Jumlah Pesanan agar dihitung Otomatis oleh Sistem");

    const hargaBakso = 12000;
    const hargaSoto = 10000;
    const hargaMie = 15000;

    function hitungTotal() {
      let b = parseInt(qtyBakso.value) || 0;
      let s = parseInt(qtySoto.value) || 0;
      let m = parseInt(qtyMie.value) || 0;

      if (b < 0) {
        b = 0;
        qtyBakso.value = 0;
      }
      if (s < 0) {
        s = 0;
        qtySoto.value = 0;
      }
      if (m < 0) {
        m = 0;
        qtyMie.value = 0;
      }

      let total = b * hargaBakso + s * hargaSoto + m * hargaMie;

      let diskon = 0;
      if (total > 50000) {
        diskon = total * 0.1;
      }

      let bayar = total - diskon;

      fieldTotal.value = total;
      fieldDiskon.value = diskon;
      fieldBayar.value = bayar;
    }

    qtyBakso.addEventListener("input", hitungTotal);
    qtySoto.addEventListener("input", hitungTotal);
    qtyMie.addEventListener("input", hitungTotal);

    btnReset.addEventListener("click", function () {
      qtyBakso.value = 0;
      qtySoto.value = 0;
      qtyMie.value = 0;
      hitungTotal();
    });
  }
});

// Kalulator
const calcIn1 = document.getElementById("calc-in1");
const calcIn2 = document.getElementById("calc-in2");
const calcOp = document.getElementById("calc-op");
const calcOut = document.getElementById("calc-out");
const btnHitung = document.getElementById("btn-hitung");
const btnResetCalc = document.getElementById("btn-reset-calc");

if (calcIn1) {
  btnHitung.addEventListener("click", function () {
    const val1 = calcIn1.value;
    const val2 = calcIn2.value;

    if (val1 === "" || val2 === "") {
      alert("Inputan tidak boleh kosong!");
      return;
    }

    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);

    if (num1 <= 0 || num2 <= 0) {
      alert("inputan pertama dan kedua harus lebih dari 0");
      return;
    }

    let result = 0;
    const op = calcOp.value;

    if (op === "*") {
      result = num1 * num2;
    } else if (op === "/") {
      result = num1 / num2;
    } else if (op === "+") {
      result = num1 + num2;
    } else if (op === "-") {
      result = num1 - num2;
    } else if (op === "%") {
      result = num1 % num2;
    } else if (op === "^") {
      result = num1 ** num2;
    }

    calcOut.value = result;
  });

  btnResetCalc.addEventListener("click", function () {
    calcIn1.value = "";
    calcIn2.value = "";
    calcOp.value = "*";
    calcOut.value = "";
  });
}

// Garis Hidup
const ghTgl = document.getElementById("gh-tgl");
const ghBln = document.getElementById("gh-bln");
const ghThn = document.getElementById("gh-thn");
const btnKirimGh = document.getElementById("btn-kirim-gh");
const btnResetGh = document.getElementById("btn-reset-gh");

const outTgl = document.getElementById("out-tgl");
const outBln = document.getElementById("out-bln");
const outThn = document.getElementById("out-thn");
const outH1 = document.getElementById("out-h1");
const outH2 = document.getElementById("out-h2");
const outHAkhir = document.getElementById("out-hakhir");
const outNum = document.getElementById("out-num");
const ghResultDesc = document.getElementById("gh-result-desc");

if (ghTgl) {

  btnKirimGh.addEventListener("click", function () {

    const tglVal = ghTgl.value;
    const blnVal = ghBln.value;
    const thnVal = ghThn.value;

    if (tglVal === "" || thnVal === "") {
      alert("Mohon lengkapi tanggal dan tahun lahir!");
      return;
    }

    const rawString = String(tglVal) + String(blnVal) + String(thnVal);

    let sum1 = 0;
    for (let char of rawString) {
      sum1 += parseInt(char);
    }

    let sum2 = 0;
    if (sum1 > 9) {
      for (let char of String(sum1)) {
        sum2 += parseInt(char);
      }
    } else {
      sum2 = sum1;
    }

    let finalSum = 0;
    if (sum2 > 9) {
      for (let char of String(sum2)) {
        finalSum += parseInt(char);
      }
    } else {
      finalSum = sum2;
    }

    outTgl.value = tglVal;
    outBln.value = blnVal;
    outThn.value = thnVal;
    outH1.value = sum1;
    outH2.value = sum2;
    outHAkhir.value = finalSum;
    outNum.textContent = finalSum;

    let desc = "";

    switch (finalSum) {
    case 1:
    desc =
      "Anda memiliki karakter yang cenderung mandiri dan percaya diri. Orang dengan garis hidup ini biasanya memiliki inisiatif yang tinggi dan tidak ragu untuk mencoba hal baru. Anda lebih nyaman mengambil keputusan sendiri dan sering menjadi orang yang memulai sesuatu terlebih dahulu.\n\nDalam kehidupan sehari-hari, Anda dikenal sebagai pribadi yang berani, optimis, dan memiliki semangat untuk mencapai tujuan yang diinginkan.";
    break;

  case 2:
    desc =
      "Anda termasuk pribadi yang tenang, penuh pertimbangan, dan menghargai hubungan dengan orang lain. Anda mudah bekerja sama dan mampu memahami perasaan orang di sekitar Anda.\n\nSifat sabar dan kemampuan mendengarkan membuat Anda sering dipercaya dalam sebuah kelompok. Anda cenderung lebih nyaman menciptakan suasana yang damai dan harmonis.";
    break;

  case 3:
    desc =
      "Anda memiliki kepribadian yang ceria dan ekspresif. Biasanya orang dengan garis hidup ini senang berkomunikasi, berbagi cerita, serta mudah bergaul dengan lingkungan sekitar.\n\nKreativitas juga menjadi salah satu kelebihan Anda. Dalam banyak situasi, Anda mampu menghadirkan ide-ide baru yang menarik.";
    break;

  case 4:
    desc =
      "Anda dikenal sebagai pribadi yang disiplin dan bertanggung jawab. Anda lebih suka sesuatu yang teratur dan terencana dengan baik.\n\nOrang dengan garis hidup ini biasanya pekerja keras dan memiliki komitmen tinggi terhadap apa yang sedang dikerjakan. Ketekunan menjadi salah satu kekuatan terbesar Anda.";
    break;

  case 5:
    desc =
      "Anda memiliki jiwa yang dinamis dan menyukai kebebasan. Hal-hal baru sering menarik perhatian Anda karena Anda senang mencoba pengalaman yang berbeda.\n\nKemampuan beradaptasi dengan lingkungan baru juga menjadi kelebihan Anda. Anda cenderung aktif, terbuka, dan mudah menyesuaikan diri dalam berbagai situasi.";
    break;

  case 6:
    desc =
      "Anda termasuk pribadi yang peduli dan memiliki rasa tanggung jawab terhadap orang di sekitar. Dalam keluarga atau lingkungan pertemanan, Anda sering menjadi sosok yang dapat diandalkan.\n\nSifat perhatian dan keinginan membantu membuat Anda mudah dipercaya. Anda juga cenderung menjaga hubungan baik dengan orang lain.";
    break;

  case 7:
    desc =
      "Anda memiliki kecenderungan berpikir mendalam dan suka memahami sesuatu secara lebih detail. Anda sering tertarik pada hal-hal yang membutuhkan analisis dan pemikiran logis.\n\nOrang dengan garis hidup ini biasanya memiliki rasa ingin tahu yang tinggi dan senang mencari pengetahuan baru.";
    break;

  case 8:
    desc =
      "Anda memiliki semangat untuk mencapai keberhasilan dan tujuan hidup yang jelas. Dalam banyak hal, Anda menunjukkan sikap percaya diri serta kemampuan mengatur sesuatu dengan baik.\n\nOrang dengan garis hidup ini biasanya memiliki jiwa kepemimpinan dan mampu mengambil tanggung jawab dalam berbagai situasi.";
    break;

  case 9:
    desc =
      "Anda dikenal sebagai pribadi yang memiliki empati dan kepedulian terhadap orang lain. Anda sering berusaha membantu serta memberikan dukungan kepada orang di sekitar.\n\nSikap terbuka dan toleran membuat Anda mudah diterima dalam berbagai lingkungan. Anda juga cenderung memiliki pandangan yang luas terhadap kehidupan.";
    break;
}

    ghResultDesc.innerText = desc;

  });


  btnResetGh.addEventListener("click", function () {

    ghTgl.value = "";
    ghBln.value = "1";
    ghThn.value = "";

    outTgl.value = "";
    outBln.value = "";
    outThn.value = "";
    outH1.value = "";
    outH2.value = "";
    outHAkhir.value = "";

    outNum.textContent = "";
    ghResultDesc.innerText = "";

  });

}