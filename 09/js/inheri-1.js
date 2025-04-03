// 프로토타입을 이용해서 메서드 정의해 보겠습니다.

function Book (title, price) {
  this.title = title;
  this.price = price;
}

Book.prototype.buy = function() {
  console.log(`${this.title}을(를) ${this.price}에 구매했습니다.`);
}

const book1 = new Book("세이노의 가르침", 6480);
book1.buy();

// 앞서 정의한 Book을 상속 받아서 TextBook 객체를 작성해 보겠습니다.
function TextBook (title, price, section){
  Book.call(this, title, price);  // Book의 프로퍼티 재사용
  this.section = section;             // 새 프로퍼티
}

TextBook.prototype.buyTextBook = function() {
  console.log(`${this.section} 분야, ${this.title}을 ${this.price}에 구매했습니다.`);
}

// TextBook의 프로토타입을 Book 프로토타입에 연결합니다.
Object.setPrototypeOf(TextBook.prototype, Book.prototype);

// TextBook의 객체를 생성해 보겠습니다.
const book2 = new TextBook("데일 카네기 인간관계론", 10350, "인문학");
book2.buyTextBook();    // 새로 선언한 메서드
book2.buy();            // 상속 받은 메서드