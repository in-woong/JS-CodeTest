/**
 * @param s {string}
 * @returns {number}
 */
function solution(s) {
  const romanNumDocList = romanNumDocs()

  let result = 0
  while (s.length !== 0) {
    for (const romanNumDoc of romanNumDocList) {
      if (s.startsWith(romanNumDoc.romanNum)) {
        s = s.substring(romanNumDoc.romanNum.length)
        result += romanNumDoc.num
      }
    }
  }
  return result
}

function romanNumDocs() {
  const TOKENS = [['I', 'V', 'X'], ['X', 'L', 'C'], ['C', 'D', 'M'], ['M', '-', '-']]
  const GENERALIZATION_INDICES = ['0', '00', '000', '01', '1', '10', '100', '1000', '02']

  const result = []
  for (let tokenIndex = 0; tokenIndex < TOKENS.length; tokenIndex++) {
    const token = TOKENS[tokenIndex]
    const powOfTen = tokenIndex
    for (let generalizationIndex = 0; generalizationIndex < GENERALIZATION_INDICES.length; generalizationIndex++) {
      const eachGeneralIndices = GENERALIZATION_INDICES[generalizationIndex]
      const num = (generalizationIndex + 1) * Math.pow(10, powOfTen)
      let romanNum = ''
      for (const i of eachGeneralIndices) {
        romanNum += token[i]
      }
      result.push({romanNum, num})
    }
  }

  result.reverse()
  return result
}

solution