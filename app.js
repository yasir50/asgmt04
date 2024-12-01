let a = 5;
let exp1 =
  ((4 + 5 && "abc") || false + "test" * a-- || --a || (false && ++a + 1)) *
  "end";
// 9 && "abc" || false +"test * a--   //a-- will be 4
// "abc" || NaN || 3 || (false && ++a +1)
// "abc" || NaN || 3 || false * "end"
// "abc" * "end"
// NaN
console.log(exp1);

let exp2 =
  (10 * (("foo" && 5 + ++a) || "bar") && false + "test") || (0 && true);
// 10* (11 || "bar" && false +"test")
// 10*(11 || "bar" && "0test" || false)
// 10 * 11 && "0test"
// 110 && "0test"
// "0test"
console.log(exp2);

let exp3 = 3 + (a-- || "start") * 4 && (--a + "value") * (1 + 2) + "result";
// 3 + 5 * 4
// 3 + 5 * 4 && "3value"
// 3 + 5 * 4 && "3value" * 3 + "result"
// 32 && NaN + "result"
// "NaNResult"
console.log(exp3);

let exp4 = "hello" * (++a + true) || ((2 + 3 * "abc") * (0 + 1) + "xyz" && 0);
// "hello" * 7 || ((2 + 3 * "abc") * (0 + 1) + "xyz" && 0)
// "hello" * 7 || (NaN * 1 + "xyz" && 0)
// "hello" * 7 || (NaN * 1 + "xyz" && 0)
// "hello" * 7 || (NaN + "xyz" && 0)
// "hello" * 7 || ("NaNxyz" && 0)
// "hello" * 7 || 0
// NaN || 0
// 0
console.log(exp4);

let exp5 = true || ((0 + 1) * "test" && 4) || (false && 3 + "value") * a-- + 2;
// true || (1 * "test" && 4) || (false && 3 + "value")
// true || false || false * a-- + 2
// true || false || 0*6  //=6
// true
console.log(exp5);

let exp6 = (++a + "abc" && 4 * 2 + 3) || (0 + 1 && 3 * "hello") || a--;
//  ++a + "abc" && 8 + 3 || 1 && NaN || a--
//  6 + "abc" && 11 || 1 && NaN || a--
//  "6abc" && 11 || 1 && NaN || 6
//  11 || NaN || 6
//  11 || NaN || 6
console.log(exp6);

let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";
// ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result"
// "foo6" * 7 || 2 * 3 + 3 || "result"
// "foo6" * 7 || 6 + 3  || "result"
// NaN || 9 || "result"
// 9
console.log(exp7);

let exp8 = (0 + 1 && true + 0) || ((false + "test") * 4 && 3 + 2) || "value";
// 1 && 1 || "otest" * 4 && 3 + 2 || "value"
// 1 && 1 || NaN && 3 + 2 || "value"
// 1 && 1 || NaN && 5 || "value"
// 1 || NaN  || "value"
// 1
console.log(exp8);

let exp9 = 3 * "abc" + (true + 1) || (++a + "test" && 3 + "result") || null;
// 3 * "abc" + 1 || ("6test" && "3result") || null
// 3 * "abc" + 1 || "3result" || null
// Nan + 1 || "3result" || null
// Nan || "3result" || null
// "3result"
console.log(exp9);

let exp10 =
  (++a + false && "start") || (0 + 1 && "value") || (5 * "end" && a++);
// (6  && "start") || (1 && "value") || (NaN && 6)
// "start" || "value" || NaN
// "start"
console.log(exp10);

let exp11 = (false && "hello") + (a++ || 3 + "test") * 4 || (5 * "abc" && 0);
// false + (5|| "3test") * 4 || NaN && 0
// false  + 5  * 4 || NaN && 0
// 20 || NaN && 0
// 20 || NaN
// 20
console.log(exp11); // different answers
let exp12 =
  "hello" * (true + 0) + 2 || ((false + 1) * 3 && "result") || 4 + "test";
// "hello" * 1 + 2 || (1 * 3 && "result") || 4 + "test"
// "hello" * 1 + 2 || (3 && "result") || 4 + "test"
// "hello" * 1 + 2 || "result" || 4 + "test"
// NaN + 2 || "result" || 4 + "test"
// NaN || "result" || "4test"
// "result"
console.log(exp12);

let exp13 = (5 * (a++ || false) + 2 && false + "test") || (3 * "end" && 4);
// (5 * 5 + 2 && false + "test") || NaN && 4;
// (27 && "0test") || NaN && 4;
// "0test"|| NaN ;
//  "0test"

let exp14 = (false + "abc") * 2 || ((--a + 1) * "start" + 3 && 4) || "end";
// "0abc" * 2 || (5 * "start" + 3 && 4) || "end"
// "0abc" * 2 || (NaN + 3 && 4) || "end"
// "0abc" * 2 || (NaN && 4) || "end"
// "0abc" * 2 || NaN || "end"
//  NaN || NaN || "end"
// "end"
console.log(exp14);

let exp15 = (0 + "foo") * 3 + (true && "result") || "start" + (++a + 1) * 4;
// "foo" * 3 + "result" || "start" + 7 * 4
// NaN + "result" || "start" + 28
// "NaNresult" || "start28"
// "NaNresult"
console.log(exp15);

let exp16 = 2 * "end" || (false && true) || ("start" + (--a + 2) * 5 && null);
// 2 * "end" || false || ("start" + 6 * 5 && null)
// 2 * "end" || false || "start" + 6 * 5 && null
// NaN || false || "start" + 30 && null
// NaN || false || "start30" && null
// NaN || false || null
// null
console.log(exp16);

let exp17 = (3 + 2 * ("test" + a--) && (false + 3) * 5) || (0 + "value" && 4);
// (3 + 2 * "test4 && 3 * 5) || ("0value" && 4)
// (3 + NaN && 15) || 4
// (NaN && 15) || 4
// NaN || 4
// 4
console.log(exp17);

let exp18 =
  ("start" && (false || 2 * "end")) || ((++a + 1) * 3 + "result" && 0);
//   ("start" && (false || NaN)) || (7 * 3 + "result" && 0)
//   ("start" && NaN) || (21 + "result" && 0)
//   NaN || ("21result" && 0)
//   NaN || 0
//   0
console.log(exp18);

let exp19 = (5 + 1 && "foo") || ((++a + 2) * (false + 3) + "test" && 7);
// "foo" || (8 * 3 + "test" && 7)
// "foo" || ("24test" && 7)
// "foo" || 7
// "foo"
console.log(exp19);

let exp20 = (2 * 3 + "hello" && (false + ++a) * "result") || "end" + 5 || 0;
// 2 * 3 + "hello" && 6 * "result" || "end" + 5 || 0
// 6 + "hello" && NaN || "end" + 5 || 0
// "hello" && NaN || "end5" || 0
// NaN || "end5" || 0
// "end5"
console.log(exp20);
let exp21 = (5 * (true + ++a) && "test" + false) || 7 * (true + 2) + "value";
// (5 * 7 && "test" + false) || 7 * 3 + "value"
// (35 && "test0") || "21value"
// "test0" || "21value"
// "test0"
console.log(exp21)

let exp22 =
  ("foo" + 4 && (++a + 1) * "start") || (5 + 6 * (false + true) && "test");
//   ("foo" + 4 && 7 * "start") || (5 + 6 * 1 && "test")
//   ("foo4" && NaN) || (11 && "test")
//   NaN || "test"
//   "test"
console.log(exp22)

let exp23 =
  (false && 2) || ((a++ + 1) * "end" && "start") || (4 * 5 && "result");
//   false || (6 * "end" && "start") || (20 && "result");
//   false || (NaN && "start") || "result;
//   false ||  NaN || "result;
//   "result;
console.log(exp23)

let exp24 = 3 + 2 * "test" || ((false + a--) * "hello" && "world" + 1) || 2;
//  3 + 2 * "test" || (5 * "hello" && "world" + 1) || 2
//  3 + 2 * "test" || (NaN && "world1") || 2
//  3 + 2 * "test" || && || 2
//  3 + NaN   || 2
//  NaN  || 2
//  2
console.log(exp24)

let exp25 = ((3 + 4) * (false || a--) && 5) || ("start" + 1 + "test" && 0);
// (7 * (false || 5) && 5) || ("start1test" && 0)
// (7 * 5 && 5) || ("start1test" && 0)
// (35 && 5) || 0
// 5 || 0
// 5 
console.log(exp25)
let exp26 = ("hello" && 3 * 2 + (a++ + 1)) || (false + true) * "result" + "end"; 
// ("hello" && 3*2 + 6) || 1 * "result" + "end";
// ("hello" && 12) || 1 * "result" + "end";
// 12 || NaN + "end";
// 12 ||"NaNend";
// 12 
console.log(exp26) // different answers

let exp27 = (3 * "test" + (true + 2) && (false || "value")) || "start" + a++;
// (3 * "test" + 3) && "value" || "start" + a++
// NaN && "value" || "start" + 5
// NaN && "value" || "start5"
// NaN || "start5"
// "start5"
console.log(exp27) // different answers

let exp28 = (false + 1) * "hello" || 3 + (a-- && 5) * "result" || "world";
// 1 * "hello" || 3 + 5 * "result" || "world";
// NaN || NaN || "world";
// "world";
console.log(exp28)

let exp29 = "start" + 2 * (true || 1) && (false || "value") * 5 + "result";
// "start" + 2 * true && "value" * 5 + "result";
// "start" + NaN && NaN + "result";
// "startNaN" && "NaNresult";
// "NaNresult";
console.log(exp29)

let exp30 = (true + 3) * "test" || (1 * 5 && false + "value" + "end") || a--;
// 4 * "test" || "0valueend" || a--
// NaN|| "0valueend" || 5
// "0valueend"
console.log(exp30) 


//                  &&
//    - Returns the second value if the first is truthy.
//    - Stops at the first falsy value.
//                  ||
//    - Returns the first truthy value it finds.
//    - Stops at the first truthy value.
//
// The && operator has a higher precedence than the || operator,
// meaning the && operator is executed before the ||
