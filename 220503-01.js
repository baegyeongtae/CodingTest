


/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 월간 코드 챌린지 시즌1 > 두 개 뽑아서 더하기

[링크]
https://programmers.co.kr/learn/courses/30/lessons/68644
*/


// 기본 틀
function solution(numbers) {
    var answer = [];
    return answer;
}



// 풀이
function solution(numbers) {
    var answer = [];
    let list = [];
    for(i=0; i<numbers.length; i++) {
        for(j=i+1; j<numbers.length; j++) {
            list.push(numbers[i] + numbers[j])
        }
    }
    list.sort((a, b) => a-b)
    answer = [...new Set(list)] 
    return answer;
}



// 다른 풀이
function solution(numbers) {
    var answer = [];
    numbers = numbers.sort();
    console.log(numbers);
    for(var i = 0; i < numbers.length; i++){
        for(var k = i+1; k < numbers.length; k++){
            if(!answer.includes(numbers[i]+numbers[k])){
                answer.push(numbers[i]+numbers[k]);
            }
        }
    }
    answer = answer.sort(function(a, b){
        return a-b;
    });
    return answer;
}


/*

*/
