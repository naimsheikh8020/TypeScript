//destructuring

const user = {
    id: 345,
    name: {
        firstName : "Naim",
        middleName: "sheikh",
        lastName: "Persian"
    },
    contacNo: "01303202218",
    address: "Bangaldesh"
}

const {contacNo, name:{middleName }} = user

//array destructuring

const myFriends = ["chandler", "naim", "fahim", "abir", "jewel"]

const [, , bestfriend, ...rest] = myFriends;