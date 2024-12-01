function FazzFood(harga, promo, jarak, pajak) {
  // menghitung biaya pajak
  let biayaPajak = 0;
  if (pajak == true) {
    biayaPajak = (5 / 100) * harga;
  } else {
    console.log("Tidak Dikenakan Pajak");
  }

  // menghitung biaya kirim
  let biayaKirim = 0;
  if (jarak > 2) {
    biayaKirim = (jarak - 2) * 3000 + 5000;
  } else {
    biayaKirim = 5000;
  }

  // menentukan promo dan mencari total harga potongan
  let potongan = 0;
  if (promo === "FAZZFOOD50" || promo === "DITRAKTIR60") {
    // jika promo yang dimasukkan FAZZFOOD50
    if (promo === "FAZZFOOD50") {
      if (harga >= 50000) {
        potongan = harga * (50 / 100);
      } else {
        potongan = 0;
      }
    }
    // Jika Promo yang dimasukkan DITRAKTIR60,
    if (promo === "DITRAKTIR60") {
      if (harga >= 25000) {
      } else {
        potongan = 0;
      }
    }
  }

  // menghitung subtotal
  const subTotal = harga + biayaPajak - potongan + biayaKirim;

  // menampilkan output
  console.log(
    `Harga : ${harga}\nPotongan : ${potongan}\nBiaya antar : ${biayaKirim}\nPajak : ${biayaPajak}\nSub Total : ${subTotal}`
  );
}

FazzFood(75000, "FAZZFOOD50", 5, true);
