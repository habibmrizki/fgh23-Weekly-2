function getDataFromServer(status, callback) {
  setTimeout(() => {
    if (status) {
      return callback();
    } else {
      return callback("Error : failed to fetch data");
    }
  }, 3000);
}

function processData(error) {
  if (error) {
    return error;
  }
  return ["product 1", "product 2", "product 3"];
}

function main() {
  getDataFromServer(true, (error) => {
    const result = processData(error);
    if (error) {
      console.log(error);
    } else {
      console.log(result);
    }
  });
}

main();
