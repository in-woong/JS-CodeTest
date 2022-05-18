function solution(n, k) {
    // lastMove[i][j]: 수직선의 출발 지점에서 i만큼 떨어진 지점으로 가는 모든 경우의 수 중
    // 직전에 j만큼 이동한 경우의 수
    let lastMove = Array.from({ length: n + 1 }, () =>
      Array.from({ length: k + 1 }, () => 0)
    );
  
    // 수직선의 출발 지점에서 i만큼 떨어진 지점 고려
    for (let i = 1; i <= n; i++) {
      // 해당 지점에서 j만큼 거슬러 올라가기
      for (let j = 1; j <= k; j++) {
        if (i - j < 0) continue;
        if (i - j === 0) lastMove[i][j]++;
        // j만큼 거슬러 올라간 지점에서 직전에 j만큼 이동한 경우를 제외하고 모든 경우의 수를 더해서 lastMove[i][j]에 저장
        else
          lastMove[i][j] =
            lastMove[i - j].reduce((acc, e) => (acc += e)) - lastMove[i - j][j];
        lastMove[i][j] %= 1000000007;
      }
    }
  
    let answer = lastMove[n].reduce((acc, e) => (acc += e));
    return answer % 1000000007;
  }
  