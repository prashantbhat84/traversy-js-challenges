function countOccurrences(st, ch) {
  ch = ch.toLowerCase();
  st = st.split("");
  let count = 0;
  for (let i in st) {
    if (st[i].toLowerCase() === ch) {
      count++;
    }
  }
  return count;
}

module.exports = countOccurrences;
