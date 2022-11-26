function solution(skill, skill_trees) {
  let result = 0;

  //skill의 요소들이 있는지 확인
  let filteredTrees = skill_trees.map((tree) => {
    return tree.split('').filter((ele) => skill.includes(ele));
  });

  //가능한 스킬트리인지 확인
  for (let i = 0; i < filteredTrees.length; i++) {
    let isValid = true;
    for (let j = 0; j < filteredTrees[i].length; j++) {
      if (skill[j] !== filteredTrees[i][j]) {
        isValid = false;
        break;
      }
    }
    if (isValid) result++;
  }

  return result;
}

function solution(skill, skill_trees) {
  const skillArray = skill.split('');
  let answer = 0;
  for (const skillEl of skill_trees) {
    const elArray = skillEl.split('');
    const object = {};
    for (let i = 0; i < elArray.length; i += 1) {
      object[elArray[i]] = i + 1;
    }

    let order = -1;

    for (let i = 0; i < skillArray.length; i += 1) {
      console.log(order, object[skillArray[i]]);
      if (order > -1 && !object[skillArray[i]]) break;
      if (order > object[skillArray[i]]) break;
      if (i !== 0 && !object[skillArray[i]]) break;
      if (object[skillArray[i]]) {
        order = object[skillArray[i]];
      }

      if (i === skillArray.length - 1) {
        console.log(skillEl);
        answer += 1;
      }
    }
  }
  return answer;
}
