function hello(name, origin = "Bandung") {
  return "Halo! Nama saya " + name + ". Saya tinggal di " + origin + ".";
}

const rahmat = hello("Rahmat", "Semarang");
const indra = hello("Indra");

console.log(rahmat);
console.log(indra);
