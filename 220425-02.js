


/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 연습문제 > 문자열 내 마음대로 정렬하기

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12915
*/


// 기본 틀
function solution(strings, n) {
    var answer = [];
    return answer;
}



// 풀이
function solution(strings, n) {
    var answer = [];
    let indexList = [];
    answer = strings.sort((a, b) => {
                          if(a[n] > b[n]) return 1;
                          if(a[n] < b[n]) return -1;
                          if(a[n] === b[n]) {
                              if(a>b) return 1;
                              if(a<b) return -1;
                              else return 0
                          }

                          })
    return answer;
}




// 다른 풀이 
function solution(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}


/*

*/
