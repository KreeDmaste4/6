
let one = prompt('Введите имя')
let two = +prompt('Введите год рождения')
let three = +prompt('Введите сейчасшний год')

function age(one,two,three) {
    let a = (three - two)
        alert(one + ', ' + ' Ваш возраст ' + a)
}
console.log(age(one,two,three));