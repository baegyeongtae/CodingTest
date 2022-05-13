


/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 2019 KAKAO BLIND RECRUITMENT > 실패율

[링크]
https://programmers.co.kr/learn/courses/30/lessons/77884
*/





// 기본 틀
function solution(left, right) {
    var answer = 0;
    return answer;
}



// 풀이
function solution(N, stages) {
    var answer = [];
    let countSon = 0;
    let countParent = 0;
    let percent = 0;
    let arr = [];

    for(let i=1; i<=N; i++) {
        stages.map((stage) => {
            if(stage===i) {
                countSon++;
                countParent++;
            } 
            else if(stage>i) {countParent++;}
        })
        percent = countSon/countParent
        answer.push([percent, i])
        countSon = 0;
        countParent = 0;
    }
    answer.sort((a,b) => b[0]-a[0]).map((v) => arr.push(v[1]))
    return arr
}







// 다른 풀이 1
function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}




// 다른 풀이 2
function solution(N, stages) {
    let tempArr = stages;
    let answerObj = {};
    for ( let i = 1; i <= N; i++ ) {
        let top = tempArr.filter(el => el === i).length;
        let bottom = tempArr.length;
        answerObj[i] = top/bottom;
        tempArr = tempArr.filter(el => el !== i);    
    }
    return Object.entries(answerObj).sort((a,b) => b[1] - a[1]).map(v => +v[0])
}


/*

*/
