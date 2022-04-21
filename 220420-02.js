
/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 약수의 합

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12928
*/


// 기본 틀
function solution(n) {
    var answer = 0;
    return answer;
}



// 풀이
function solution(n) {
    var answer = 0;
    for(i=1; i<(n+1); i++) {
        if(n%i === 0) {
            answer += i
        }
    }
    return answer;
}



// 다른 풀이
function solution(n, a=0, b=0) {
    return n<=a/2?b:solution(n,a+1,b+=n%a?0:a);
}

/*

*/
