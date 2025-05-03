{
  //

  // union types |
  //   type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper"; // this is a string literal type where union is also used

  //     type FullStackDeveloper = "fakibazDeveloper" | "expertDeveloper";

  //     type Developer = FrontendDeveloper | FullStackDeveloper;

  //   const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  //   type User = {
  //     name: string;
  //     email?: string;
  //     gender: "male" | "female";
  //     bloodGroup: "O+" | "A+" | "AB+";
  //   };

  //   const user1: User = {
  //     name: "Farah",
  //     gender: "female",
  //     bloodGroup: "O+",
  //     };

  // intersection &
  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;
  const fullStackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "React"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
  //
}
