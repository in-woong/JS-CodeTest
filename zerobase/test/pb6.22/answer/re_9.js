const MOD = 998244353;
const mod = (num) => ((num % MOD) + MOD) % MOD;

function solution(maps) {
  const f = [1];
  const n = maps.length;
  for (let i = 1; i <= n; i++) {
    f[i] = mul(f[i - 1], i);
  }
  const edges = [];

  const dis = (i, j) =>
    Math.abs(maps[i][0] - maps[j][0]) + Math.abs(maps[i][1] - maps[j][1]);

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const d = dis(i, j);
      edges.push([i, j, d]);
    }
  }
  edges.sort((a, b) => a[2] - b[2]);
  const st = [];
  const check = (arr) => {
    if (arr.length > 4) return false;
    let t = -1;
    for (let i = 0; i < arr.length; i++) {
      if (st[arr[i]]) return false;
      for (let j = i + 1; j < arr.length; j++) {
        if (st[arr[j]]) return false;
        if (t == -1) t = dis(arr[i], arr[j]);
        else if (t !== dis(arr[i], arr[j])) return false;
      }
    }
    return true;
  };
  const pos = [];
  for (let i = 0, j = 0; i < edges.length; i = ++j) {
    while (j + 1 < edges.length && edges[i][2] === edges[j + 1][2]) {
      j++;
    }
    const uf = new UnionFind(n);
    for (let k = i; k <= j; k++) {
      const [u, v] = edges[k];
      uf.union(u, v);
    }
    const groups = [...uf.group().values()];
    pos.push(...groups.filter(check));
    for (let k = i; k <= j; k++) {
      const [u, v] = edges[k];
      st[u] = 1;
      st[v] = 1;
    }
  }
  let p2 = 0,
    p3 = 0,
    p4 = 0;
  for (let arr of pos) {
    if (arr.length === 2) p2++;
    else if (arr.length === 3) p3++;
    else p4++;
  }
  let res = 0;
  const ff = [1n];
  for (let i = 1; i <= n; i++) {
    ff[i] = ff[i - 1] * BigInt(i);
  }
  [
    0,
    0,
    pos.filter((arr) => arr.length === 2).length,
    pos.filter((arr) => arr.length === 3).length,
    pos.filter((arr) => arr.length === 4).length,
  ];
  const c = (i, n) =>
    mul(f[n], mul(power(f[i], MOD - 2), power(f[n - i], MOD - 2)));
  for (let i = 0; i <= p2; i++) {
    for (let j = 0; j <= p3; j++) {
      for (let k = 0; k <= p4; k++) {
        const N = n - i - j * 2 - k * 3;
        res = mod(res + mul(f[N], c(i, p2), c(j, p3), c(k, p4), c(N, n)));
      }
    }
  }
  return mod(res);
}

function power(a, b) {
  let res = 1;
  while (b) {
    if (b & 1) res = mul(res, a);
    a = mul(a, a);
    b = b >> 1;
  }
  return res;
}

function mul(...args) {
  if (args.length === 1) return args[0];
  if (args.length > 2) return mul(args[0], mul(...args.slice(1)));
  const [a, b] = args;
  return ((((a >> 16) * b) % MOD) * 65536 + (a & 65535) * b) % MOD;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class UnionFind {
  constructor(n) {
    _defineProperty(this, 'vis', []);
    this.n = n;
    this.p = [...new Array(n).keys()];
  }

  union(i, j) {
    this.vis[i] = this.vis[j] = 1;
    const [rooti, rootj] = [this.find(i), this.find(j)];
    if (rooti === rootj) return;
    this.p[rootj] = rooti;
  }

  find(i) {
    const { p } = this;
    while (i !== p[i]) {
      p[i] = p[p[i]];
      i = p[p[i]];
    }
    return i;
  }

  group() {
    const groups = new Map();
    for (let i = 0; i < this.n; i++) {
      var _groups$get;
      if (!this.vis[i]) continue;
      const root = this.find(i);
      if (!groups.has(root)) groups.set(root, []);
      (_groups$get = groups.get(root)) === null || _groups$get === void 0
        ? void 0
        : _groups$get.push(i);
    }
    return groups;
  }
}
