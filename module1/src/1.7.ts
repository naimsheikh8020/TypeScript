{
  //spread operator
  //rest oparator
  //destructuring

  //Learn spread operator
  const bros1: string[] = ["Mir", "Firoz", "Mizan"];
  const bros2: string[] = ["Tanmoy", "Nahid", "Rahat"];

  bros1.push(...bros2);
  console.log(bros1);

  const mentros1 = {
    typescritp: "Naim",
    redux: "mir",
    dbms: "Ashik",
  };

  const mentros2 = {
    prisma: "farabi",
    nextjs: "abir",
    cloud: "Nahid",
  };

  const mentorlist = { ...mentros1, ...mentros2 };
  console.log(mentorlist);

  // learn rest operator
  const greetFriend = (...friends:string[]) => {
    friends.forEach((friend:string)=> console.log(friend)
    )
  };

  greetFriend("abul", "kabul", "babul");
}
