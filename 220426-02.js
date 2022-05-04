


/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 연습문제 > 나누어 떨어지는 숫자 배열

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12910
*/


// 기본 틀
function solution(arr, divisor) {
    var answer = [];
    return answer;
}



// 풀이
function solution(arr, divisor) {
    var answer = [];
    arr.map((v) => {
        if(v%divisor === 0) {
            answer.push(v)
        }
    })
    answer.sort((a,b) => {return a-b})
    if(answer.length === 0) {return [-1]}
    return answer;
}




// 다른 풀이 1
function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}



// 다른 풀이 2
function solution(arr, divisor) {
    var answer = [];
    arr.map((o) => {
        o % divisor === 0 && answer.push(o);
    })
    return answer.length ? answer.sort((a, b) => a - b) : [-1];

}


/*

*/
