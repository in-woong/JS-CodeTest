function solution(record) {
  let answer = [];
  const users = {};

  record.forEach((history) => {
    const [action, uid, name] = history.split(' ');
    if (action !== 'Leave') users[uid] = name;
  });
  console.log(users);
  record.forEach((history) => {
    const [action, uid, name] = history.split(' ');
    switch (action) {
      case 'Enter':
        answer.push(`${users[uid]}님이 들어왔습니다.`);
        break;
      case 'Leave':
        answer.push(`${users[uid]}님이 나갔습니다.`);
        break;
      default:
        break;
    }
  });
  return answer;
}

const input = [
  [
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
    'Enter uid2345 Hi',
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
