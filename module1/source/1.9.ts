{
  //type alias : using type alias type can be declared and stored in type variable and can be recalled whenever needed

  // type alias for object
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: {
    name: string;
    age: number;
    gender: string;
    contactNo: string;
    address: string;
  } = {
    name: "Farah",
    age: 20,
    gender: "female",
    contactNo: "0123456789",
    address: "dhk",
  };

  const student2: Student = {
    name: "Samsi",
    age: 20,
    gender: "female",
    //   contactNo: "0123456789",
    address: "dhk",
  };

  // type alias for other data types
  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "anything";
  const isAdmin: IsAdmin = true;

  // type alias for function
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
  //
}
