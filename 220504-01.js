



/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 월간 코드 챌린지 시즌 1 > 삼진법 뒤집기

[링크]
https://programmers.co.kr/learn/courses/30/lessons/68935
*/


// 기본 틀
function solution(n) {
    var answer = 0;
    return answer;
}



// 풀이
function solution(n) {
    let answer = 0;
    let three = [];
    while(n !== 0) {
        three.push(n%3)
        n = Math.floor(n/3)
    }
    answer = three.reverse()
    let sum = answer.reduceRight((acc, cur, i) => {
        return acc + cur*Math.pow(3,i)
    }, 0)
    return sum;
}







// 다른 풀이
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}



/*

*/
