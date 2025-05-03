// destructuring

// object destructuring
const user = {
  id: 345,
  name: {
    firstName: "Farah",
    middleName: "Samsi",
    lastName: "Prome",
  },
  contactNo: "0123456789",
  address: "BD",
};

const {
  contactNo,
  name: { middleName: midName }, //destructuring er somoy kokhonoi explicit type define kora jabe na karon ai syntax a sudhu matro name alias hoy
} = user;

// array destructuring
const myFriends = ["chandler", "joey", "ross", "monica", "rachel", "phoebe"];
const [, , bestFriend] = myFriends;
