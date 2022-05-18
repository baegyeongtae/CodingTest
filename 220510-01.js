


/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 2019 카카오 개발자 겨울 인턴십 > 크레인 인형뽑기 게임


[링크]
https://programmers.co.kr/learn/courses/30/lessons/64061
*/





// 기본 틀
function solution(numbers) {
    var answer = -1;
    return answer;
}



// 풀이
function solution(boards, moves) {
    var answer = 0;
    let arr = []
    moves.map((move) => {
        for(let i=0; i<boards.length; i++) {
            if(boards[i][move-1] !== 0) {
                if(arr[arr.length-1] === boards[i][move-1]) {
                    arr.pop();
                    answer += 2;
                } else arr.push(boards[i][move-1]);
                boards[i][move-1] = 0;
                break;
            } 
        }
    })
    return answer;
}





// 다른 풀이 1
const transpose = matrix =>
    matrix.reduce(
        (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
        []
    );

const solution = (board, moves) => {
    const stacks = transpose(board).map(row =>
        row.reverse().filter(el => el !== 0)
    );
    const basket = [];
    let result = 0;

    for (const move of moves) {
        const pop = stacks[move - 1].pop();
        if (!pop) continue;
        if (pop === basket[basket.length - 1]) {
            basket.pop();
            result += 2;
            continue;
        }
        basket.push(pop);
    }

    return result;
};



// 다른 풀이 2
function solution(board, moves) {

    var count =0;
    var stack = [];

    for(var i=0;i<moves.length;i++){
        var now = moves[i]-1
        for(var j=0;j<board.length;j++){
            if(board[j][now]!=0){
                if(stack[stack.length-1]===board[j][now]){
                    stack.pop();
                    count+=2;
                }
                else{
                    stack.push(board[j][now])
                }
                board[j][now] = 0;
                break;
            }
        }
    }
    console.log(stack)
    return count
}





// 다른 풀이 3
function solution(board, moves) {
    var answer = 0;
    var arr = []
    for(var i = 0; i < moves.length; i++){
        for(var j = 0; j < board.length;j++){
            if(board[j][moves[i]-1] !== 0){
                arr.push(board[j][moves[i]-1])
                board[j][moves[i]-1] = 0
                break;
            }
        }
        if (arr.length >=2){
            if (arr[arr.length-1] === arr[arr.length-2]){
                answer +=2
                arr.splice(arr.length-2,2)

            }
        } 
    }
    return answer;
}


/*

*/
