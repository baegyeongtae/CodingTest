
/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 연습문제 > 서울에서 김서방 찾기

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12919
*/


// 기본 틀
function solution(seoul) {
    var answer = '';
    return answer;
}



// 풀이
function solution(seoul) {
    var answer = '';
    seoul.map(name => {
        if (name === "Kim") {
            answer = seoul.indexOf(name)
        } 
    })
    return "김서방은 "+answer+"에 있다"
}




// 다른 풀이 
function findKim(seoul){
  var idx = seoul.indexOf('Kim');
  return "김서방은 " + idx + "에 있다";
}

// 실행을 위한 테스트코드입니다.
console.log( findKim(["Queen", "Tod", "Kim"]));

/*

*/
