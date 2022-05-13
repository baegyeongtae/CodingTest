


/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 찾아라 프로그래밍 마에스터 > 폰켓몬

[링크]
https://programmers.co.kr/learn/courses/30/lessons/1845
*/





// 기본 틀
function solution(nums) {
    var answer = 0;
    return answer;
}



// 풀이
function solution(nums) {
    var answer = 0;
    let cur = 0;
    nums.sort((a, b) => a-b).map((v) => {
        if (answer < nums.length/2) {
            if (cur !== v) {
                cur = v;
                answer++;
            }
        }
    })
    return answer
}







// 다른 풀이 1
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length
}




// 다른 풀이 2
function solution(nums) {
    const noDuplicatePokemon = new Set(nums);
    const pokemonVarietyCount = noDuplicatePokemon.size;
    const pokemonCounts = nums.length;
    return pokemonVarietyCount > pokemonCounts/2 ? pokemonCounts/2 : pokemonVarietyCount;

}


/*

*/
