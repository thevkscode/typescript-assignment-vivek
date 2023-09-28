interface x {
  val1: string;
  val2: boolean;
}
interface y {
  val1: string;
  val3: number;
}

//                    <<<<<<<<<<<<<<<<<<<<UNION>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//this is union of two interface and we can see that all the values:val1,val2 and val3 can be used
const a: x | y = {
  val1: "fjk",
  val2: false, //if this is commented then also 'a' doesn't show any error(if we keep other 2 uncommented)
  val3: 3,
};
//it should fulfill atleast one interface, here it's not fulfilling the condition so it will give error
// const b:x|y={
//     val2:false,
//     val3:3,
// }

//                     <<<<<<<<<<<<<<<<<INTERSECTION>>>>>>>>>>>>>>>>>>

//if we intersect x and y then c is only valid if it has all the properties of x and y
const c: x & y = {
  val1: "fd",
  val2: false,
  val3: 5,
};
