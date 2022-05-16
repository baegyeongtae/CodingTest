


/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > Summer/Winter Coding(~2018) > 소수 만들기

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12977
*/





// 기본 틀
function solution(nums) {
    var answer = -1;
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return answer;
}




// 풀이
function solution(nums) {
    let answer = 0;
    let number = 0;
    for(let i =0; i<nums.length-2; i++) {
        for(let j = i+1; j<nums.length-1; j++) {
            for (let k= j+1; k<nums.length; k++) {
                number = nums[i] + nums[j] + nums[k]
                if(isPrime(number)) answer++ 
            }
        }
    }
    return answer;
}

function isPrime(number) {
    for(let l=2; l<number; l++) {
        if(number%l === 0) return false
    }
    return number > 1
}






/*

*/
