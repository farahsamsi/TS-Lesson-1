{
  // Spread operator
  // rest operator
  // Destructuring

  // learn spread operator
  const bros1: string[] = ["Mir", "Dir", "Sir"];
  const bros2: string[] = ["Bir", "Cir", "Fir"];

  bros1.push(...bros2);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };
  const mentors2 = {
    prisma: "Firoz",
    next: "Tonmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  // learn rest operator which is a cousin of spread operator
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => {
      console.log(`Hi ${friend}`);
    });
  };
  greetFriends("abul", "babul", "kabul");
}
