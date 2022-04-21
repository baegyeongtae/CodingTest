
/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 정수 내림차순으로 배치하기

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12933
*/


// 기본 틀
function solution(n) {
    var answer = 0;
    return answer;
}



// 풀이
function solution(n) {
    var answer = [];
    let num_list = [];
    let list = [];
    num_list = String(n).split("")
    for(i=0; i<num_list.length; i++) {
        list.push(Number(num_list[i]))
    }
    list.sort(function(a, b) {
        return b - a;
    })
    for(i=0; i<list.length; i++) {
        answer.push(String(list[i]))
    }
    answer = Number(answer.join(''))
    return answer
}



// 다른 풀이 
function solution(n) {
  const newN = n + "";
  const newArr = newN
    .split("")
    .sort()
    .reverse()
    .join("");

  return +newArr;
}


/*

*/
