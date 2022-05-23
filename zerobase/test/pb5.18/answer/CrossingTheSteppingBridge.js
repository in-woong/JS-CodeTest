/**
 * @param bridge {number[]}
 * @param jumpSize {number}
 * @returns {boolean}
 */
function solution(bridge, jumpSize) {
  let lastStoneIndex = 0
  for (let i = 0; i < bridge.length; i++) {
    if (bridge[i] === 1) {
      const distance = i - lastStoneIndex - 1
      if (distance > jumpSize) return false
      lastStoneIndex = i
    }
  }

  return true
}

solution