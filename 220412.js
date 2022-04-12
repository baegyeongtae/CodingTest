/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 신고 결과 받기

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12969
*/


// 기본 틀
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    console.log(a);
    console.log(b);
});



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
  console.log()로 반복문을 돌리면 돌 때마다 줄이 자동으로 바뀌어져 출력된다.
  그래서 한 줄을 만드는 반복문 바깥에 둬야 한다.
*/
