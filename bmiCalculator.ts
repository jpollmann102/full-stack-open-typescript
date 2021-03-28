const calculateBmi = (height:number, weight:number):string => {
  const heightM:number = height / 100;
  const bmi:number = weight / (heightM * heightM);
  if(bmi === 15) return 'Very severely underweight';
  else if(15 < bmi && bmi < 16) return 'Severely underweight';
  else if(16 < bmi && bmi < 18.5) return 'Underweight';
  else if(18.5 < bmi && bmi < 25) return 'Normal';
  else if(25 < bmi && bmi < 30) return 'Overweight';
  else if(30 < bmi && bmi < 35) return 'Moderately obese';
  else if(35 < bmi && bmi < 40) return 'Severely obese';
  else return 'Very severely obese';
}

const height:number = Number(process.argv[2]);
const weight:number = Number(process.argv[3]);

console.log(calculateBmi(height, weight));
