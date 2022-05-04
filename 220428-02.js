


/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 월간 코드 챌린지 시즌3 > 나머지가 1이 되는 수 찾기


[링크]
https://programmers.co.kr/learn/courses/30/lessons/87389
*/


// 기본 틀
function solution(price, money, count) {
    var answer = -1;

    return answer;
}



// 풀이
function solution(n) {
    var answer = 0;
    for(i=0; i<n; i++) {
        if(n%i === 1) {
            answer = i
        }
        if (answer !== 0) {
            return answer
        }
    }
}




// 다른 풀이 1
function solution(n, x = 1) {    
    while (x++) {
        if (n % x === 1) {
            return x;
        }
    }    
}


/*

*/
