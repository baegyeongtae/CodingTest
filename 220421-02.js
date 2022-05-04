


/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 연습문제 > 문자열 다루기 기본

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12918
*/


// 기본 틀
function solution(s) {
    var answer = true;
    return answer;
}



// 풀이
function solution(s) {
    if(s.length === 4 || s.length === 6) {
        for (i=0; i<s.length; i++) {
            let number = s.charCodeAt(i);
            if(number < 48 || number > 57) {
                return false
            }
        }
        return true
    }
    return false
}



// 다른 풀이 
function alpha_string46(s){
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( alpha_string46("a234") );

/*

*/
