const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
  let theaterIXX = await promiseTheaterIXX();
  let theaterVGC = await promiseTheaterVGC();
  let IXXVGC = theaterIXX.concat(theaterVGC);
  let result = 0;
  IXXVGC.map((theaterIXX) => theaterIXX.hasil === emotion && (result +=1));
  return result
}

module.exports = {
  promiseOutput,
};
