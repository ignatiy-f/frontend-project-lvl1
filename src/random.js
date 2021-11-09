// функция возвращает случайное целое число в заданном диапазоне
export default (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
