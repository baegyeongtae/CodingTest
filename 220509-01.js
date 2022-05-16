


/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 월간 코드 챌린지 시즌2 > 음양 더하기

[링크]
https://programmers.co.kr/learn/courses/30/lessons/76501
*/





// 기본 틀
function solution(absolutes, signs) {
    var answer = 123456789;
    return answer;
}



// 풀이
function solution(absolutes, signs) {
    var answer = 0;
    for(let i=0; i<absolutes.length; i++) {
        if (signs[i] === true) {
            answer += absolutes[i]
        } else answer -= absolutes[i]
    }
    return answer;
}






// 다른 풀이 1
function solution(absolutes, signs) {

    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}




// 다른 풀이 2
function solution(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((v, i) => {
        if (signs[i]) {
            answer += v;
        } else {
            answer -= v;
        }
    })
    return answer;
}






/*

*/
