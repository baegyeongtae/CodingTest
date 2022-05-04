


/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 연습문제 > 부족한 금액 계산하기

[링크]
https://programmers.co.kr/learn/courses/30/lessons/82612
*/


// 기본 틀
function solution(price, money, count) {
    var answer = -1;

    return answer;
}



// 풀이
function solution(price, money, count) {
    var answer = -1;
    let sum = 0;
    for(i=1; i<=count; i++) {
        sum += price*i
    }
    if (money-sum > 0) {return 0}
    else {return sum-money}
}




// 다른 풀이 1
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}



// 다른 풀이 2
const solution = (..._) => Math.max(_[0]*_[2]*++_[2]/2-_[1], 0);


/*

*/
