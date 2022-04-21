
/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 자연수 뒤집어 배열로 만들기

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12932
*/


// 기본 틀
function solution(n) {
    var answer = [];
    return answer;
}



// 풀이
function solution(n) {
    let arr = n.toString().split('').reverse();
    for(i=0; i<arr.length; i++) {
        arr[i] = Number(arr[i])
    }
    return arr;
}



// 다른 풀이 
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


/*

*/
