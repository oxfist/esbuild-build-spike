(() => {
  // src/index.js
  var num = 3;
  async function sayHelloAfter(seconds) {
    setTimeout(() => {
      console.log("Hello");
    }, seconds * 1e3);
  }
  sayHelloAfter(num);
})();
