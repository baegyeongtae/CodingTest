


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
function solution(s){
    var answer = true;
    let pcount = 0;
    let ycount = 0;
    for(i=0; i<s.length; i++) {
        if(s[i] === 'p' || s[i] === 'P') {
            pcount++;
        } else if (s[i] === 'y' || s[i] === 'Y') {
            ycount++;
        }
    }
    if (pcount === ycount) {return answer;}
    else {return !answer;}
}




// 다른 풀이 1
function numPY(s){
  //함수를 완성하세요
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numPY("pPoooyY") )
console.log( numPY("Pyy") )



// 다른 풀이 2
function numPY(s) {
  return s.match(/p/ig).length == s.match(/y/ig).length;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numPY("pPoooyY") )
console.log( numPY("Pyy") )

/*

*/
