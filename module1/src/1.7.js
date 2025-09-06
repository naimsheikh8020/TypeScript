var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    //spread operator
    //rest oparator
    //destructuring
    //Learn spread operator
    var bros1 = ["Mir", "Firoz", "Mizan"];
    var bros2 = ["Tanmoy", "Nahid", "Rahat"];
    bros1.push.apply(bros1, bros2);
    console.log(bros1);
    var mentros1 = {
        typescritp: "Naim",
        redux: "mir",
        dbms: "Ashik",
    };
    var mentros2 = {
        prisma: "farabi",
        nextjs: "abir",
        cloud: "Nahid",
    };
    var mentorlist = __assign(__assign({}, mentros1), mentros2);
    console.log(mentorlist);
    // learn rest operator
    var greetFriend = function () {
        var friends = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            friends[_i] = arguments[_i];
        }
        friends.forEach(function (friend) { return console.log(friend); });
    };
    greetFriend("abul", "kabul", "babul");
}
