
/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 정수 제곱근 판별

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12934
*/


// 기본 틀
function solution(n) {
    var answer = 0;
    return answer;
}



// 풀이
function solution(n) {
    var answer = Math.sqrt(n);
    return answer%1 === 0 ? (answer+1)**2 : -1;
}



// 다른 풀이 1
function nextSqaure(n){
  var result = 0;
  var x = 0;
  while (x*x < n){
    x++;
  }
  if (x*x == n){
    x++;
    result = x*x; 
  }else{
    result = 'no';
  }

  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + nextSqaure(121));



// 다른 풀이 2
function nextSqaure(n){
    var result = 0;
    var n = Math.sqrt(n);
    result = Number.isInteger(n) ? Math.pow(n+1, 2) : 'no';
    return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + nextSqaure(121));
console.log("결과 : " + nextSqaure(3));


/*

*/
