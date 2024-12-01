const cekPalindrome = (name) => {
  const reversedName = name.split("").reverse().join("");
  if (name === reversedName) {
    console.log("Palindrome");
  } else {
    console.log("Not Palindrome");
  }
};

cekPalindrome("malam");
cekPalindrome("pagi");
