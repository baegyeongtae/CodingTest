


/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > Summer/Winter Coding(~2018) > 예산

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12982
*/


// 기본 틀
function solution(numbers) {
    var answer = [];
    return answer;
}



// 풀이
function solution(d, budget) {
    let answer = 0;
    let arr = d.sort((a, b) => a-b);
    let sum = 0;
    while (arr.reduce((acc, cur) => (acc+cur),0) > budget) arr.pop();
    return arr.length
}







// 다른 풀이 1
function solution(d, budget) {
    return d.sort((a, b) => a - b).reduce((count, price) => {
        return count + ((budget -= price) >= 0);
    }, 0);
}




// 다른 풀이 2
function solution(d, budget) {
    d.sort((a, b) => a - b);

    while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

    return d.length;
}




// 다른 풀이 3
function solution(d, budget) {
    let answer = 0;
    let money = 0;
    d.sort((a,b) => a-b).forEach(function(val){
        money += val;
        if(money <= budget){
            answer++;    
        }

    })
    return answer;
}

/*

*/

