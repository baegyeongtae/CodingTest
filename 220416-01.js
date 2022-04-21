/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 짝수와 홀수

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12937
*/


// 기본 틀
function solution(num) {
    var answer = '';
    return answer;
}



// 풀이
function solution(num) {
    var answer = '';
    if(num%2 === 0) {
        answer = "Even"
    } else answer = "Odd"
    return answer;
}



// 다른 풀이
function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + evenOrOdd(2));
console.log("결과 : " + evenOrOdd(3));


/*

*/
