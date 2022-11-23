// const test = async () => {
//   console.log(1);
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(2);
//     }, 1000);
//     resolve();
//   });
// };
// const main = async () => {
//   await test();
//   console.log(3);
// };
// main();

const test = () => {
  console.log(1);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(2);
      resolve();
    }, 1000);
  });
};
const main = () => {
  test().then(() => console.log(3));
};
main();
