/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 신고 결과 받기

[링크]
x만큼 간격이 있는 n개의 숫자
*/


// 기본 틀
function solution(x, n) {
    var answer = [];
    return answer;
}



// 풀이
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for (i=0; i<b; i++) {
        let star = ""                          // 변수 선언.
        for (j=0; j<a; j++) {
            star += '*'
        }
        console.log(star)
    }
});


/*

*/
