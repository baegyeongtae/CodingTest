
function solution(d, budget) {
    let answer = 0;
    let arr = d.sort((a, b) => a-b);
    let sum = 0;
    while (arr.reduce((acc, cur) => (acc+cur),0) > budget) arr.pop();
    return arr.length
}
