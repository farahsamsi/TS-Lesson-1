{
  // Basic data types in TypeScript

  // ______Primitive data types________
  // string
  let firstName = "Farah"; // implicit data type
  let lastName: string = "Samsi"; // explicit data type

  // number
  let roll: number = 123;

  // boolean
  let isAdmin: boolean = true;

  // undefined
  let x: undefined = undefined;

  // null
  let y: null = null;

  let d; //evabe kisu declare na korle ts eta k any data type dhore nibe

  let e: number; //evabe dile ys ai variable a number baad a r kisu assign korte dibe na
  e = "farah";
  e = 123;

  // ______Non Primitive data types___________

  // Array
  let friends: string[] = ["rachel", "monica"];
  let eligibleRollList: number[] = [1, 3];

  friends.push(5);
  eligibleRollList.push(5);

  // tuple  --> special type of array --->type of values can be defined
  let coordinates: [number, number] = [1, 5];
  // in ordinary declaration
  let ageName = [50, "Mr.X"];
  ageName[0] = "Mr.Y";
  // in tuple
  let ageNameTuple: [number, string] = [50, "Mr.X"];
  ageNameTuple[0] = true;
}
