const fetchData = (status) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === true) {
        resolve("data berhasil diambil");
      } else {
        reject("gagal mengambil data");
      }
    }, 3000);
  });
};

fetchData(true)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

async function getData() {
  try {
    const result = await fetchData(true);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getData();
