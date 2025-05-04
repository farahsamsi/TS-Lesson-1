{
  // ternary operator || optional type || optional chaining || nullish coalescing operator

  const age: number = 19;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log({ isAdult });

  // nullish coalescing operator ??
  // this operator makes decision based on null and undefined
  const isAuthenticated = "";
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 });
  console.log({ result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Farah",
    address: {
      city: "Dhaka",
      road: "60",
      presentAddress: "dhaka city",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No permanent address";
  console.log({ permanentAddress });

  //
}
