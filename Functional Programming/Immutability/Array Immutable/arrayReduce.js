const students = [
  {
    name: "Anna",
    score: 90,
  },
  {
    name: "John",
    score: 80,
  },
  {
    name: "Jane",
    score: 95,
  },
  {
    name: "James",
    score: 60,
  },
  {
    name: "Jill",
    score: 75,
  },
];

const totalScore = students.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore);
