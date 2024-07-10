function foodReport(name, age, ...food) {
    let str = `${name}, ${age} [${food}]`;
    console.log(str);
}

foodReport("이몽룡", 20, "짜장면", "냉면", "불고기");
foodReport("홍길동", 16, "초밥");

function fooood(name, age, ...food) {
    let string = `${name}, ${age}`;
    console.log(str);
    console.log(food);
}

fooood("이몽룡", 20, "짜장면", "냉면", "불고기");
fooood("홍길동", 16, "초밥");
