function solution(problems) {
  let answer = 0;

  for (let i in problems) {
    if (checkProblem(problems[i])) {
      answer += 1;
    }
  }

  return answer;
}

function checkProblem(pb) {
  result = pb[0];
  for (let i = 0; i < pb.length - 1; i++) {
    if (pb[i] != pb[i + 1]) {
      result += pb[i + 1];
    }
  }
  list_result = result.split('');
  set_result = new Set(list_result);

  if (liset_result.length === set_result.size) {
    return true;
  }

  return false;
}
