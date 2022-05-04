


/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 연습문제 > 같은 숫자는 싫어

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12906
*/


// 기본 틀
function solution(arr)
{
    var answer = [];

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return answer;
}



// 풀이
function solution(arr)
{
    var answer = [];
    answer.push(arr[0])
    for(i=0; i<arr.length; i++) {
        if(arr[i] !== arr[i+1]) {
            if(i+1 === arr.length) {return answer}
            else {answer.push(arr[i+1])}
        }
    }
}




// 다른 풀이 1
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}



// 다른 풀이 2
let solution=_=>_.filter((i,$)=>i!=_[--$])


/*

*/
