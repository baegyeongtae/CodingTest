/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 핸드폰 번호 가리기

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12948
*/


// 기본 틀
function solution(phone_number) {
    var answer = '';
    return answer;
}



// 풀이 1
function solution(phone_number) {
    return '*'.repeat(phone_number.length-4) + phone_number.slice(-4)
}


// 풀이 2
function solution(phone_number) {
    const len = phone_number.length - 4;
    return "*".repeat(len) + phone_number.substring(len);
}

/*
str.repeat()
매개변수의 값만큼 새로운 문자열로 반환.

str.substring()
매개변수의 값을 인덱스 값으로 하여 그 시점부터 부분 문자열을 반환.

str.slice(시작, 종료 or 시작);
어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환. 원본 배열은 바뀌지 않는다. 음수를 사용할 경우 뒤부터 불러온다.
*/
