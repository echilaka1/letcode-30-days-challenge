/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = n => {
  if (n === 4) return false;

  const u = [...n.toString()].reduce((ac, c) => ac + (c ** 2), 0);

  return u === 1 || isHappy(u);
};