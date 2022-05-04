


/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 연습문제 > 문자열 내림차순으로 배치하기

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12917
*/


// 기본 틀
function solution(s) {
    var answer = '';
    return answer;
}



// 풀이
function solution(s) {
    var answer = '';
    let list = [];
    let reverse = [];
    let number = '';
    answer = s.split('')
    for(i=0; i<s.length; i++) {
        number = s.charCodeAt(i)
        list.push(number)
    }
    list.sort((a,b) => b-a)
    for(i=0; i<list.length; i++) {
        number = String.fromCharCode(list[i])
        reverse.push(number)
    }
    let last = reverse.join('')
    return last;
}




// 다른 풀이 
function solution(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}

/*

*/
