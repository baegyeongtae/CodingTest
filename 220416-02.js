/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 제일 작은 수 제거하기

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12935
*/


// 기본 틀
function solution(arr) {
    var answer = [];
    return answer;
}



// 풀이
function solution(arr) {
    if(arr.length === 1) {
        return [-1]
    } else {
        arr.splice(arr.indexOf(Math.min(...arr)),1)
    }
    return  arr
}



// 다른 풀이
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}


/*

*/
