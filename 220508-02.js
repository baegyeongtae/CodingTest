

/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 월간 코드 챌린지 시즌1 > 내적

[링크]
https://programmers.co.kr/learn/courses/30/lessons/70128
*/





// 기본 틀
function solution(a, b) {
    var answer = 1234567890;
    return answer;
}



// 풀이
function solution(a, b) {
    var answer = 0;
    for(let i=0; i<a.length; i++){
        answer += a[i]*b[i]
    }
    return answer
}





// 다른 풀이 1
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}




// 다른 풀이 2
function solution(a, b) {
    var answer = a.reduce((acc, cur, idx) => acc += cur*b[idx], 0)
    return answer;
}




// 다른 풀이 3
function solution(a, b) {
    var sum = 0;
    for(var i=0; i<a.length; i++){
        sum += a[i]*b[i];
    }
    return sum;
}






/*

*/
