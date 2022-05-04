


/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 연습문제 > 가운데 글자 가져오기

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12903
*/


// 기본 틀
function solution(s) {
    var answer = '';
    return answer;
}



// 풀이
function solution(s) {
    var answer = '';
    if(s.length%2 === 0) {
        answer += s[(s.length)/2 - 1]
        answer += s[(s.length)/2]
    } else {
        answer += s[(s.length-1)/2]
    }
    return answer;
}




// 다른 풀이 1
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}



// 다른 풀이 2
function solution(s) {
    const mid = Math.floor(s.length/2);
    return s.length %2 === 1 ? s[mid] : s[mid-1]+s[mid];
}


/*

*/
