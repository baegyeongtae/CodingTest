/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > x만큼 간격이 있는 n개의 숫자

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12954
*/


// 기본 틀
function solution(x, n) {
    var answer = [];
    return answer;
}



// 풀이
function solution(x, n) {
    var answer = [];
    for (i=0; i<n; i++) {
        answer.push(x*(i+1))
    }
    return answer;
}


/*

*/
