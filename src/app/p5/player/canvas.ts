import p5 from "p5";
const save = (p: p5, fun: () => void) => {
  p.push();
  fun();
  p.pop();
};
export { save };
