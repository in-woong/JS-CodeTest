const users = [
    {
        name: "roto", type: "human"
    },
    {
        name: "nana", type:"cat"
    }
]

function printCats(users) {
    const print = users.filter(user => user.type == "cat");
    console.log(print);

}

printCats(users);