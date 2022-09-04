function solution(cacheSize, cities) {
  const cacheArray = Array.from({ length: cacheSize }, () => null);
  if (cacheSize == 0) return cities.length * 5;
  cities = cities.map((city) => city.toLowerCase());
  let count = 0;
  for (let i = 0; i < cities.length; i++) {
    const idx = cacheArray.indexOf(cities[i]);
    if (idx > -1) {
      cacheArray.splice(idx, 1);
      cacheArray.push(cities[i]);
      count += 1;
    } else {
      cacheArray.shift();
      cacheArray.push(cities[i]);
      count += 5;
    }
  }
  return count;
}
