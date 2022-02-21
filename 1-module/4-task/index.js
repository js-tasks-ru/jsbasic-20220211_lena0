function checkSpam(str) {
  let a = "1xBet".toUpperCase();
  let b = "XXX".toUpperCase();
  let c = "1xBet".toLowerCase();
  let d = "XXX".toLowerCase();
  if (str.toLowerCase().includes(d||b)||str.toUpperCase().includes(a||c) ) {
    return true;
  } else {
    return false;
  }
}
