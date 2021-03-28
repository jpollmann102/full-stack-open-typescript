interface Result {
  periodLength:number,
  trainingDays:number,
  success:boolean,
  rating:number,
  ratingDescription:string,
  target:number,
  average:number
};

interface Rating {
  rating:number,
  description:string
};

const getRating = (totalHours:number, targetHours:number):Rating => {
  const rating = totalHours < targetHours ? 1 : totalHours === targetHours ? 2 : 3;
  let description;
  if(rating === 1) description = 'Try harder next time';
  else if(rating === 2) description = 'Achieved, but try harder';
  else description = 'Nice work';

  return {
    rating,
    description
  }
}

const calculateExercises = (dailyHours:number[], targetHours:number):Result => {
  const totalHours:number = dailyHours.reduce((a:number,b:number) => a + b, 0);
  const rating:Rating = getRating(totalHours, targetHours);
  return {
    periodLength: dailyHours.length,
    trainingDays: dailyHours.filter(x => x > 0).length,
    success: totalHours >= targetHours,
    rating: rating.rating,
    ratingDescription: rating.description,
    target: targetHours,
    average: totalHours / dailyHours.length
  }
}

let dailyHours:number[] = [];
for(let i = 2; i < process.argv.length - 2; i++) {
  dailyHours.push(Number(process.argv[i]));
}
const target:number = Number(process.argv[process.argv.length - 1]);

console.log(calculateExercises(dailyHours, target));
