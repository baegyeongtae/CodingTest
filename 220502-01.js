



/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 위클리 챌린지 > 최소직사각형


[링크]
https://programmers.co.kr/learn/courses/30/lessons/86491
*/


// 기본 틀
function solution(sizes) {
    var answer = 0;
    return answer;
}



// 풀이
function solution(sizes) {
    var answer = 0;
    let width = [];
    let height = [];
    sizes.map((v) => v.sort((a, b) => {return a-b}))
    sizes.map((v) => {
        width.push(v[0])
        height.push(v[1])
    })
    answer = Math.max(...width) * Math.max(...height)
    return answer;
}




// 다른 풀이 1
function solution(sizes) {
    const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
    return hor * ver;
}




// 다른 풀이 2
function solution(sizes) {
    const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

    let maxSize = [0, 0];
    rotated.forEach(([w, h]) => {
        if (w > maxSize[0]) maxSize[0] = w;
        if (h > maxSize[1]) maxSize[1] = h;
    })
    return maxSize[0]*maxSize[1];
}


/*

*/
