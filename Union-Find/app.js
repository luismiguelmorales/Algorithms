class UF {
  N;
  nodes = [];

  /*

  [0, 1, 2, 3, 4]
  [0, 1, 2, 3, 4] <-- components
  [0, 1, 2, 0, 4]
  [0, 1, 2, 0, 1]
  

  */

  // initialize union-find data structure with N objects (0 to N – 1)
  constructor(N) {
    this.N = N;
  }

  // add connection between p and q
  union(p, q) {}

  // are p and q in the same component?
  connected(p, q) {
    return false;
  }
}

const initializeUF = (numbersString) => {
  const numbersArray = numbersString.split(" ").map(Number);
  if (numbersArray.length == 1) {
    N = numbersArray[0];
    uf = new UF(N);
  } else if (numbersArray.length == 2) {
    [p, q] = numbersArray;

    if (!uf.connected(p, q)) {
      uf.union(p, q);
    }
  }
};

function main() {
  let N, p, q;
  let uf;
  process.stdin.setEncoding("utf8");

  process.stdin.on("data", initializeUF);
}

main();
