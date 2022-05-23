//무지의 먹방라이브
//먹어야할 음식 Nro, 1번 부터시작, 마지막 이후에는 1번 다시
//음식 하나를 1초 섭취 그이후 다음음식 섭취
//네트워크 장애로 방송중지 후 다시 방송을 이어갈때 몇번 음식을 섭취해야하나
//각 음식을 모두 먹는데 필요한 시간 병ㄹ food_times, K초가 매개변수
// 몇번부터 음식을 섭취하면 되는지 return

//순서대로 사라지고

function solution(food_times, k) {
  var answer = 0;
  let count =0;
  for (let i = 0; i<k; i++){
      if(count>=food_times.length){
          count=0;
      }
      if(food_times[count]>0){
          food_times[count]-=1;
          
      }else {
          if(food_times[count+1]>0){
              food_times[count]-=1;
          }else{

          }
        food_times[count+1]-=1;
      }
  }
  return answer;
}

const fs = require('fs');

const input = fs.readFileSync('./data').toString().split(' ');
solution(input[0], input[1]);
