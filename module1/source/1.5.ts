{
  // Reference type --> Object

  const user: {
    company: "Programming Hero"; // this value acts a type. such are called literal type
    readonly firstName: string;
    middleName?: string; //optional type
    lastName: string;
    isMarried: boolean;
  } = {
    company: "Programming Hero",
    firstName: "Farah",
    //   middleName: "Samsi",
    lastName: "Prome",
    isMarried: true,
    //   isMarried: 56,
  };

  user.firstName = "farah"; //readonly property abar reassign kora jabe na
}
