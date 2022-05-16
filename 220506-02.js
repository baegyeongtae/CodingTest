

/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 찾아라 프로그래밍 마에스터 > 완주하지 못한 선수

[링크]
https://programmers.co.kr/learn/courses/30/lessons/42576
*/





// 기본 틀
function solution(participant, completion) {
    var answer = '';
    return answer;
}




// 풀이
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for (i=0; i<participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i]
        }
    }
}






// 다른 풀이 1
var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))




// 다른 풀이 2
function solution(participant, completion) {
    /*
    for(let i in participant) {
        if(completion.includes(participant[i]) == false) return participant[i];
        completion.splice(completion.indexOf(participant[i]), 1);
    }
    */

    participant.sort();
    completion.sort();

    for(let i in participant) {
        if(participant[i] !== completion[i]) return participant[i];
    }
}




// 다른 풀이 3
function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return 'nothing';
}





// 다른 풀이 4
function solution(participant, completion) {
    var dic = completion.reduce((obj, t)=> (obj[t]= obj[t] ? obj[t]+1 : 1 , obj) ,{});
    return participant.find(t=> {
        if(dic[t])
            dic[t] = dic[t]-1;
        else 
            return true;
    });
}




// 다른 풀이 5
const solution = (p, c) => {
    p.sort()
    c.sort()
    while (p.length) {
        let pp = p.pop()
        if (pp !== c.pop()) return pp
    }
}





/*

*/
