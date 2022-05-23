//생성자가 없는 수를 구해라

//생성자 수를 통해 다음 값을 구하는 함수
function notSelfNumber(N) {
  let sum = N;
  while (true) {
    if (N == 0) {
      break;
    }
    sum += N % 10;
    N = Math.floor(N / 10);
  }
  return sum;
}

//위 함수를 통해 생성자가 있는 수를 골라내서 dp에 등록

function selfNum(input) {
  let array = [];
  let result = [];
  for (let i = 1; i <= input; i++) {
    if (notSelfNumber(i) <= input) {
      array[notSelfNumber(i)] = true;
    }
  }
  for (let i = 1; i <= input; i++) {
    if (!array[i]) {
      result.push(i);
    }
  }

  console.log(result.join("\n"));
}

selfNum(10000);
//값을 출력
