Math.random() * 10 - 5;

/**
 * Maps a value from one range to another.
 *
 * @param {number} curValue - the current value to map
 * @param {number} min - the minimum value of the current range
 * @param {number} max - the maximum value of the current range
 * @param {number} outMin - the minimum value of the target range
 * @param {number} outMax - the maximum value of the target range
 * @return {void}
 */
export function mapRange(
  curValue: number,
  min: number,
  max: number,
  outMin: number,
  outMax: number
): number {
  let len = max - min;
  let outLen = outMax - outMin;
  let ratio = outLen / len;
  let newCur = (curValue - min) * ratio + outMin;
  console.log(curValue, ratio, newCur);
  return newCur;
}

export function mapRangeRandom(min: number, max: number): number {
  return mapRange(Math.random(), 0, 1, min, max);
}

console.log(mapRangeRandom(-10, 10));
