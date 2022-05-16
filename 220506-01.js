

/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 찾아라 프로그래밍 마에스터 > K

[링크]
https://programmers.co.kr/learn/courses/30/lessons/42748
*/





// 기본 틀
function solution(array, commands) {
    var answer = [];
    return answer;
}


// 풀이
function solution(array, commands) {
    var answer = [];
    for(i=0; i<commands.length; i++) {
        let arr = array.slice(commands[i][0]-1, commands[i][1]).sort((a, b) => {return a-b});
        answer.push(arr[commands[i][2]-1]);
    }
    return answer;
}







// 다른 풀이 1
function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)    

        return newArray[position - 1]
    })
}




// 다른 풀이 2
function solution(array, commands) {
    return commands.map(v => {
        return array.slice(v[0] - 1, v[1]).sort((a, b) => a - b).slice(v[2] - 1, v[2])[0];
    });
}





// 다른 풀이 3
function solution(array, commands) {
    let answer = [];
    for(let i = 0; i < commands.length; i++){
      let eachCommand = commands[i]
      let slice = array.slice(eachCommand[0] - 1, eachCommand[1])
      answer.push(slice.sort((a, b) => a - b)[eachCommand[2] - 1])
    }

    return answer;
}





// 다른 풀이 4
var solution = (_, $) => $.map(([i,j,k]) => _.slice(i-1, j).sort((_,$) => _-$)[k-1])





/*

*/
