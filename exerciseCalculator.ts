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

export interface ExerciseInput {
  daily_exercises:number[],
  target:number
};

const getRating = (totalHours:number, targetHours:number):Rating => {
  const rating:number = totalHours < targetHours ? 1 : totalHours === targetHours ? 2 : 3;
  let description:string;
  if(rating === 1) description = 'Try harder next time';
  else if(rating === 2) description = 'Achieved, but try harder';
  else description = 'Nice work';

  return {
    rating,
    description
  }
}

export const calculateExercises = (exerciseInput:ExerciseInput):Result => {
  const { daily_exercises, target } = exerciseInput;

  const totalHours:number = daily_exercises.reduce((a:number,b:number) => a + b, 0);
  const rating:Rating = getRating(totalHours, target);

  return {
    periodLength: daily_exercises.length,
    trainingDays: daily_exercises.filter(x => x > 0).length,
    success: totalHours >= target,
    rating: rating.rating,
    ratingDescription: rating.description,
    target: target,
    average: totalHours / daily_exercises.length
  }
}

// let dailyHours:number[] = [];
// for(let i = 2; i < process.argv.length - 2; i++) {
//   dailyHours.push(Number(process.argv[i]));
// }
// const target:number = Number(process.argv[process.argv.length - 1]);
//
// console.log(calculateExercises(dailyHours, target));
