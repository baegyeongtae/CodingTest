/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 콜라츠 추측

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12943
*/


// 기본 틀
function solution(num) {
    var answer = 0;
    return answer;
}



// 풀이
function solution(num) {
    var answer = 0;
    while(answer<501 && num!==1) {
        num%2===0 ? num = num/2 : num = num*3+1
        answer++;
    }
    return answer<501 ? answer : -1 
}



// 다른 풀이
const solution = (num) => collatzGuessCount(num, 0);

const collatzGuessCount = (num, acc) => 
  (num === 1) ? ((acc > 500) ? -1 : acc) : collatzGuessCount(processCollatz(num), acc + 1);

const processCollatz = (num) => (num % 2 === 0) ? (num / 2) : (num * 3 + 1);

/*

*/
