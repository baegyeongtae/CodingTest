/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 최대공약수와 최소공배수

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12940
*/


// 기본 틀
function solution(n, m) {
    var answer = [];
    return answer;
}



// 풀이
function solution(n, m) {
    var answer = [];
    let gcd = 1;
    let lcm = 1;
    
    for(i=2; i<=Math.min(n, m); i++) {
        if(n%i === 0 && m%i===0) {
            gcd = i;
        }
    }
    lcm = (n/gcd) * (m/gcd) * gcd
    answer.push(gcd, lcm)
    return answer;
}



// 다른 풀이 1
function greatestCommonDivisor(a, b) {return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);}
function leastCommonMultipleOfTwo(a, b) {return (a * b) / greatestCommonDivisor(a, b);}
function gcdlcm(a, b) {
    return [greatestCommonDivisor(a, b),leastCommonMultipleOfTwo(a, b)];
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(gcdlcm(3,12));



//다른 풀이 2
function gcdlcm(a, b) {
    var r;
    for(var ab= a*b;r = a % b;a = b, b = r){}
    return [b, ab/b];
}

/*

*/
