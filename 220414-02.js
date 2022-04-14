/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 평균 구하기

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12944
*/


// 기본 틀
function solution(arr) {
    var answer = 0;
    return answer;
}



// 풀이
function solution(arr) {
    var answer = 0;
    let sum = 0; 
    for (i=0; i<arr.length; i++) {
        sum += arr[i]
    }
    answer = sum / (arr.length)
    return answer;
}


/*
  console.log()로 반복문을 돌리면 돌 때마다 줄이 자동으로 바뀌어져 출력된다.
  그래서 한 줄을 만드는 반복문 바깥에 둬야 한다.
*/
