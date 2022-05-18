

/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 월간 코드 챌린지 시즌3 > 없는 숫자 더하기


[링크]
https://programmers.co.kr/learn/courses/30/lessons/86051
*/





// 기본 틀
function solution(numbers) {
    var answer = -1;
    return answer;
}



// 풀이
function solution(numbers) {
    let answer = 0;
    let number = numbers.sort()
    for (let i=0; i<10; i++) {
        if(i !== number[i]) {
            number.splice(i, 0, 0);
            answer += i
        }
    }
    return answer
}






// 다른 풀이 1
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}



// 다른 풀이 2
function solution(numbers) {
    let answer = 0;

    for(let i = 0; i <= 9; i++) {
        if(!numbers.includes(i)) answer += i;
    }

    return answer;
}





/*

*/
