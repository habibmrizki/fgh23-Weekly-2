// 1
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

//2
const reverseWords = (kalimat) => {
  return kalimat.split(" ").reverse().join(" ");
};

console.log(reverseWords("Saya Belajar Javascript"));
