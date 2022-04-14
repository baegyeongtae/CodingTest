/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 하샤드 수

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12947
*/


// 기본 틀
function solution(x) {
    var answer = true;
    return answer;
}



// 풀이
function solution(x) {
    let answer = true;
    let num_list = '';
    let sum = 0;
    
    num_list = String(x).split("")
    
    for (i=0; i<num_list.length; i++) {
        sum += Number(num_list[i])
    }
    if (x%sum === 0){
        return answer
    } return !answer
}


/*

*/
