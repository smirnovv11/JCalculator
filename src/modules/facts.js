const facts = [
    'Ноль невозможно записать римскими цифрами',
    'Существует 177147 способов завязать галстук (подсчитали математики)',
    'На Тайване официально разрешено не использовать число 4',
    'Сумма чисел от 1 до 100 составляет 5050',
    'В японии редко есть 4 и 9 этажи',
    'Греки не использовали ноль в своей математике',
    'Самое большое число, имеющее собственное имя, — гуголплекс',
    '1 — не является простым числом',
    'Пифагор считал число 10 священным',
    'В Китае цифра 8 приносит удачу',
    'Существует 43 252 003 274 489 856 000 возможных позиций кубика Рубика',
    '«Самое замечательное число — 73» (Шелдон Купер)',
    'Число Пи бесконечное, оно не заканчивается',
    'Нобелевской премии по математике не существует',
]

const randomFact = () => {
    const random = Math.floor(Math.random() * facts.length)
    return facts[random]
}

module.exports = {
    randomFact,
}
