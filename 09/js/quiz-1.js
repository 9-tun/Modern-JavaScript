class Pet {
  constructor(name, color){
    this.name = name;
    this.color = color;
  }
  run(){
    alert(`${this.name} is running`);
  }
}

const myPet = new Pet("쫑", "흰둥이");
myPet.run();


class Cat extends Pet {
  constructor(name, color, breed){
    super(name, color);
    this.breed = breed;
  }  

  viewInfo(){
    alert(`이름: ${this.name}, 품종: ${this.breed}, 색깔: ${this.color}`);
  }
}

const myCat = new Cat("냐옹이", "검정", "길냥이");
myCat.viewInfo();