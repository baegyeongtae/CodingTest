
/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 자릿수 만들기

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12931
*/


// 기본 틀
function solution(n) {
    var answer = [];
    return answer;
}



// 풀이
function solution(n)
{
    var answer = 0;
    answer = n.toString().split('').map(Number).reduce((acc, cur) => {return acc + cur})
    return answer;
}



// 다른 풀이 1
function solution(n) {
    // 문자풀이
    // return (n+"").split("").reverse().map(v => parseInt(v));

    // 숫자풀이
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}



// 다른 풀이 2
function solution(n){
    // 쉬운방법
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}

/*

*/
