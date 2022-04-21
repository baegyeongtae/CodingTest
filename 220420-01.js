
/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 이상한 문자 만들기

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12930
*/


// 기본 틀
function solution(s) {
    var answer = '';
    return answer;
}



// 풀이
function solution(s) {
    let count = 0;
    let sentence = '';
    for(i=0; i<s.length; i++) {
        if(s[i] === ' ') {
            count=0;
            sentence += ' ';
        } else {
            if(count%2 === 0) {
                sentence += s[i].toUpperCase()
            } else {
                sentence += s[i].toLowerCase()
            }
            count++
        }
    }
    return sentence
}



// 다른 풀이 1
function toWeirdCase(s){
  //함수를 완성해주세요
  return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})

}

/*

*/
