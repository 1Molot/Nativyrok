const user = {
    name: "Bob",
    age: 24,
    isStudent: false
}
// const users2 = users1
//
// users2.name = "Alex"
// console.log(users1.name)
// const users1Copy = {
//     name: users1.name,
//     age: users1.age,
//     isStudent: users1.isStudent
// }
// console.log(users1 === users1Copy)
const users1Copy = {...users1}
users1Copy.name = "Alex"
console.log(users1)
console.log(users1 === users1Copy)

const users = [
    {
        id: 1,
        name: "Bob",
        isStudent: true,
    },
    {
        id: 2,
        name: "Alex",
        isStudent: true,
    },
    {
        id: 3,
        name: "Ann",
        isStudent: true,
    },
    {
        id: 4,
        name: "Donald",
        isStudent: true
    }
]
users.pop()

const usersCopy = [...users]
console.log(usersCopy === users)
usersCopy.pop()
console.log(users)
console.log(usersCopy)
console.log(users === usersCopy)

const Users2 = [
    {
        id: 1,
        name: "Bob",
        isStudent: true,
    },
    {
        id: 2,
        name: "Alex",
        isStudent: true,
    },
    {
        id: 3,
        name: "Ann",
        isStudent: true,
    },
    {
        id: 4,
        name: "Donald",
        isStudent: true
    }
]

const newUsers = {
    id: 5,
    name: "John",
    isStudent: true,
}

const addUser = [...users, newUsers]
addUsers.push(newUsers)

const concatUsers = [...users, ...users2]

// // const upd1Users = addUser.map(users => {
// //     if (users.name === "john") {
// const copyUser = {...user}
// copyUser.isStudent = false
// //         return copyUser
// //     } else {
// //         return users
// //     }
// // })
const upd1Users = addUsers.map(user => user.name === "John" ? {...user,isStudent: false} : user)
console.log(upd1Users)
const upd2Users = upd1Users.map(user => ({..., isSMarries:true}))
console.log(upd2Users)

const deleteUsers = upd2Users.filter(users => users.id !==5)
console.log(deleteUsers)
console.log(upd2Users === deleteUsers)
console.log(upd2Users === upd1Users)
console.log({} === {})
console.log(0 === [])
