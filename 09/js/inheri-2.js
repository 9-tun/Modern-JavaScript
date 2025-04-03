/* 클래스 선언 */
class Book {
  constructor(title, price){
    this.title = title;
    this.price = price;
  }
  buy(){
    console.log(`${this.title}을(를) ${this.price}에 구매했습니다.`);
  }
}

const book1 = new Book("세이노의 가르침", 6480);
book1.buy();

/* extends를 사용한 상속 */
class TextBook extends Book{
  constructor(title, price, section){
    super(title, price);
    this.section = section;
  }

  buyTextBook(){
    console.log(`${this.section} 분야, ${this.title}을 ${this.price}에 구매했습니다.`);
  }
}

const book2 = new TextBook("데일 카네기 인간관계론", 10350, "인문학");
book2.buyTextBook();    
book2.buy();           
