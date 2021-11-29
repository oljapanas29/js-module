// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email,phone) {
    this.id = id,
    this.name = name,
    this.surname = surname,
    this.email = email,
    this.phone = phone
}
let userArray = [
    new User(1, 'Barsik', 'Domachnij', 'bd@gmail.com', 30964655001),
    new User(2, 'Myrka', 'Domachnja', 'md@gmail.com', 30964655002),
    new User(3, 'Marsik', 'Vasichin', 'mv@gmail.com', 30964655003),
    new User(4, 'Barsik', 'Petichkin', 'bp@gmail.com', 30964655004),
    new User(5, 'Vysuk', 'Martysuk', 'vm@gmail.com', 30964655005),
    new User(6, 'Zirka', 'Ryda', 'zr@gmail.com', 30964655006),
    new User(7, 'Masja', 'Chorna', 'mc@gmail.com', 30964655007),
    new User(8, 'Pampych', 'Njachka', 'pn@gmail.com', 30964655008 ),
    new User(9, 'Pixel', 'Ivanovuch', 'pi@gmail.com', 30964655009),
    new User(10, 'Milko', 'Zabijaka', 'mz@gmail.com', 30964655010)
]
console.log(userArray)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterUser = userArray.filter((object) => {
    if(object.id % 2 ===0) {
        return object
    }
})
console.log(filterUser)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// в мене в зворотньому порядку
let sortUser = userArray.sort((a, b) => b.id - a.id)
console.log(sortUser)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let catsArray = [
    new Client(1, 'Barsik', 'Domachnij', 'bd@gmail.com', 30964655001, ['plate','food','cheese']),
    new Client(2, 'Myrka', 'Domachnja', 'md@gmail.com', 30964655002, ['game','mouse']),
    new Client(3, 'Marsik', 'Vasichin', 'mv@gmail.com', 30964655003, ['cheese','cathouse']),
    new Client(4, 'Barsik', 'Petichkin', 'bp@gmail.com', 30964655004, ['food','mouse','dainty']),
    new Client(5, 'Vysuk', 'Martysuk', 'vm@gmail.com', 30964655005, ['game','plate']),
    new Client(6, 'Zirka', 'Ryda', 'zr@gmail.com', 30964655006, ['mouse','cheese']),
    new Client(7, 'Masja', 'Chorna', 'mc@gmail.com', 30964655007, ['cathouse','game','mouse']),
    new Client(8, 'Pampych', 'Njachka', 'pn@gmail.com', 30964655008, ['plate','mouse'] ),
    new Client(9, 'Pixel', 'Ivanovuch', 'pi@gmail.com', 30964655009, ['dainty','cathouse']),
    new Client(10, 'Milko', 'Zabijaka', 'mz@gmail.com', 30964655010, ['game','plate','food'])
]
console.log(catsArray)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortCatArray = catsArray.sort((a, b) => a.order.length - b.order.length);
console.log(sortCatArray)
