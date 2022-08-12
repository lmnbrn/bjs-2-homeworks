// Задача №1. Форматтер чисел
//п.1
function parseCount (isNamber) {
    if (isNaN(Number.parseInt(isNamber))) {
        const errorOut = new Error('Невалидное значение');
        throw errorOut;
    }
    else return Number.parseInt(isNamber);
}

function parseCount(number) {
    let parse = Number.parseInt(number);
    if (Number.isNaN(parse)) {
       throw new Error("Невалидное значение");
    }
    return parse;
 }

 //п.2
 function validateCount(parse) {
    try {
      return parseCount(parse);
    } catch (err) {
      return err;
    }
}

// Задача №1. Треугольник
//п.1
class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
      
      if (a + b < c || b + c < a || a + c < b) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
    }
    getPerimeter() {
      return this.a + this.b + this.c;
    }
    getArea() {
      let p = (this.a + this.b + this.c) / 2;
      return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
    }
}

//п.2
function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
        getArea: () => {
            return "Ошибка! Треугольник не существует";
        }, 
        getPerimeter: () => {
            return "Ошибка! Треугольник не существует";
        }
        }
    }
}
