import express from 'express';
import bodyParser from 'body-parser';
import { calculateBmi } from './bmiCalculator';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if(!height || !weight)
  {
    return res.status(400).json({ error: 'malformatted parameters' });
  }

  const bmi = calculateBmi(height, weight);
  return res.json({ height, weight, bmi });
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
