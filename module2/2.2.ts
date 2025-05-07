{
  // _________Always Use type alias for array, function
  // ________Interface or type alias, any one can be used for object

  // interface : interface diyeo type declare kora jay

  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRole1 = User1 & { role: string };
  const user2: UserWithRole1 = {
    name: "Farah",
    age: 100,
    role: "student",
  };

  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user3: UserWithRole2 = {
    name: "Farah",
    age: 100,
    role: "student",
  };

  // jehetu interface object diye suru hosse ai jonno interface diye primitive type declare kora jabe na
  // therefore sob primitive er jonno amra type alias use korte parbo r non primitive er

  const user1: User2 = {
    name: "Farah",
    age: 100,
  };

  // in JavaScript object is object, array --> object , function --> object

  type Roll1 = number[];
  const rollNumber1: Roll1 = [3, 3, 5];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber2: Roll2 = [3, 3, 5];

  type Add = (num1: number, num2: number) => number;
  // const add: Add = (num1, num2) => num1 + num2;

  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add: Add2 = (num1, num2) => num1 + num2;

  //
}
