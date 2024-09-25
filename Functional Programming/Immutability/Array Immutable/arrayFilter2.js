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

const eligibleForScholarshipStudents = students.filter(
  (student) => student.score >= 85,
);

console.log(eligibleForScholarshipStudents);
