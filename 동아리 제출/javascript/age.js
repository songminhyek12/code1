let age = 32;
let userName = 'Max';
let hobbies = ['cookies', 'reading', 'sports'];
let job = { name: 'Developer', salary: 50000, place: 'NewYork' };
age = 18;
let totalaudultYears;
function calculaterAudultYears(userAge) {
  return userAge - 20;
  // 함수 안에()는 매개변수 이고 이것도 다양한 값을 넣기 위해 사용
}

// 여기서 return을 사용하는 이유는 확장성이 편해서 이다.
// 예를들면 어떤 값을 유도하기 위해 값을 고쳐야 한다면 return은 정해진 age만 고치면
// 값이 유동적이기 때문에 return을 사용한다.

age = 50;
totalaudultYears = calculaterAudultYears();
alert(totalaudultYears);
