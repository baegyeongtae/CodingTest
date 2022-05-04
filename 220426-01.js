


/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 연습문제 > 두 정수 사이의 합

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12912
*/


// 기본 틀
function solution(a, b) {
    var answer = 0;
    return answer;
}



// 풀이
function solution(a, b) {
    let answer = 0;
    let list = [];
    list.push(a, b)
    list.sort((a, b) => {return a-b})
    for(let i=list[0]; i<=list[1]; i++) {
        answer += i
    }
    return answer;
}




// 다른 풀이 1
function adder(a, b){
    var result = 0
    //함수를 완성하세요


    return (a+b)*(Math.abs(b-a)+1)/2;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( adder(3, 5) )



// 다른 풀이 2
function adder(a, b, s = 0){
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( adder(3, 5) )


/*

*/
