var test = Number(prompt("Баллы за тесты (0-50):"))
var homework = Number(prompt("Баллы за домашнее задание (0-30):"))
var attendance = Number(prompt("Баллы за посещаемость (0-20):"))

if (isNaN(test) || isNaN(homework) || isNaN(attendance)) {
    console.log("Ошибка: нужно вводить только числа!")


} else if (test < 0 || homework < 0 || attendance < 0) {
    console.log("Ошибка: баллы не могут быть отрицательными!")

} else if (test > 50 || homework > 30 || attendance > 20) {
    console.log("Ошибка: превышен максимальный балл!")

} else {
    var total = test + homework + attendance;
    console.log("Ощий балл", total);

    if (total >= 90){
        console.log("Оценка: Отлично")
    }else if (total >= 75){
        console.log("Оценка: Хорошо")
    }else if (total >= 60){
        console.log("Оценка: Удовлетворительно")
    }else {
        console.log("Оценка: Неудовлетворительно")
    }
}



