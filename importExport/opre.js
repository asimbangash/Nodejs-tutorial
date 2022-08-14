const add = (a,b)=>{
  return a+b;
}
const sub = (a,b)=>{
  return a-b;
}
const mult = (a,b)=>{
  return a*b;
}
const name = "fhauler";
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mult = mult;

// OR

module.exports = {add ,sub, mult, name};