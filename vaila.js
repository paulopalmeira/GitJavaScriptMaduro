class Poligono {
    constructor(sides) {
      this._sides = sides;
      this._name = 'Polígono';
    }
  
    get sides() {
      return this._sides;
    }
  
    set sides(value) {
      if (value > 2) {
        this._sides = value;
      } else {
        console.log("Um polígono deve ter mais de 2 lados.");
      }
    }
  
    get name() {
      return this._name;
    }
  }
  
  const poly1 = new Poligono(4);
  
  console.log(poly1.name);  // Saída: Polígono
  console.log(poly1.sides); // Saída: 4
  
  poly1.sides = 3; // Isso imprimirá "Um polígono deve ter mais de 2 lados."
  
  poly1.sides = 5; // Altera o número de lados
  console.log(poly1.sides); // Saída: 5
  