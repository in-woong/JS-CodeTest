/**
 * @param points {number[]}
 * @returns {number}
 */
function solution(points) {
  const x1 = points[0]
  const y1 = points[1]
  const x2 = points[2]
  const y2 = points[3]
  const x3 = points[4]
  const y3 = points[5]

  const a = (x1 * y2) + (x2 * y3) + (x3 * y1)
  const b = (x2 * y1) + (x3 * y2) + (x1 * y3)
  return Math.abs(a - b)
}

solution