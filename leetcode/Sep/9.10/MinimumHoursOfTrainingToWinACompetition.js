/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (
  initialEnergy,
  initialExperience,
  energy,
  experience
) {
  let sumEnergy = 0;
  for (let i = 0; i < energy.length; i++) {
    sumEnergy += energy[i];
  }
  let sumExperience = initialExperience;
  let gap = 0;
  for (let i = 0; i < experience.length; i++) {
    const temp = sumExperience - experience[i];
    if (temp <= 0) {
      gap += Math.abs(temp) + 1;
      sumExperience += Math.abs(temp) + 1;
    }
    sumExperience += experience[i];
  }
  console.log(sumEnergy, initialEnergy, gap);
  if (sumEnergy >= initialEnergy) {
    return sumEnergy - initialEnergy + gap + 1;
  }
  return gap;
};
