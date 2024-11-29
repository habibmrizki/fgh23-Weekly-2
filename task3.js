//1
function cekKecepatan() {
  return new Promise((resolve, reject) => {
    const waktu = 6000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("Kecepatan OK!");
      }, waktu);
    } else {
      setTimeout(() => {
        reject(new Error("Kecepatan NOT OKE!"));
      }, waktu);
    }
  });
}

const kecepatan = cekKecepatan();

kecepatan
  .then((hasil) => console.log(hasil))
  .catch((error) => console.log(error.message));

// 2
const makanan = ["Nasi Goreng", "Sate", "Soto"];
function makananEnak(food) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (makanan.includes(food)) {
        resolve(`Jenis makanan ${makanan} termasuk makanan enak`);
      } else {
        reject(new Error(`Jenis makanan ${makanan} biasan aja rasa makanan`));
      }
    }, 1000);
  });
}

makananEnak("Sate")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//3
const getName = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user) => {
        console.log(user.name);
      });
    });
};

getName();
