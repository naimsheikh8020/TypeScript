{
  //type alias
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1 : Student = {
    name: "naim",
    age: 20,
    gender: "Male",
    address: "Dhaka",
  };
  const student2 : Student = {
    name: "sheikh",
    age: 40,
    gender: "male",
    address: "Gopalganj",
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName : UserName = "naim00007";
  const isAdmin : IsAdmin = true;

  type Add = (num1: number, num2: number) => number;
  const add : Add = (firstNumber, secondNumber) => firstNumber + secondNumber
}
