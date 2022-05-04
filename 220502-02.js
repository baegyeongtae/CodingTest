

/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 연습문제 > 2016년


[링크]
https://programmers.co.kr/learn/courses/30/lessons/12901
*/


// 기본 틀
function solution(a, b) {
    var answer = '';
    return answer;
}



// 풀이
function solution(a, b) {
    var answer = new Date(2016, a*1-1, b*1).toString().slice(0, 3).toUpperCase();
    return answer;
}




// 다른 풀이 1
function getDayName(a,b){
    var dayList = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
  var monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var daySum;
  if(a < 2) {
    daySum = b - 1;
  } else {
    daySum = monthArr.slice(0, a - 1).reduce((a, b) => a + b) + b - 1;
  }
    return dayList[daySum % 7];
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(getDayName(5,24));
console.log(getDayName(1,19));




// 다른 풀이 2
function getDayName(a,b){
    var answer = "";
  var MONTH = [31,29,31,30,31,30,31,31,30,31,30,31];
  var WEEK = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
  var sum = 0;
    for(var i =1; i<a; i++){
    sum+=MONTH[i-1];
  }
  answer = WEEK[(sum+b-1)%7];
  // 1월 1일은 금요일
    // 31,29,31,30,31,30,31,31,30,31,30,31

    return answer;
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(getDayName(1,8));


/*

*/
