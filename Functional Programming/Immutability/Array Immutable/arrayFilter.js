const truthArray = [1, "", "Halo", 0, null, "Harry", 14].filter((item) =>
  Boolean(item),
);

console.log(truthArray);
