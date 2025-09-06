{
  //Union Types
  // type FrontendDeveloper = 'fakibazDeveloper' | "juniorDeveloper"
  // type fullStackDeveloper = "frontendDeveloper" | "expretDeveloper"

  // type Developer = FrontendDeveloper | fullStackDeveloper

  // const newDeveloper : FrontendDeveloper = "juniorDeveloper"

  // type User = {
  //     name: string,
  //     email? :  string,
  //     gender: "male" | "Female",
  //     bloodGroup: "O+" | "A+" | "AB+",
  // }

  // const naim : Developer = "expretDeveloper"
  type FrontendDeveloper = {
    skill: string[];
    frontendDesignation: "Frontend Developer";
  };

  type BackendDeveloper = {
    skill: string[];
    backendDesignation: "Backend Developer";
  };

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullstackDeveloper = {
    skill: ["html", "css", "js", "express"],
    frontendDesignation: "Frontend Developer",
    backendDesignation: "Backend Developer",
  };
}
