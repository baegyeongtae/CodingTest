/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 행렬의 덧셈

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12950
*/


// 기본 틀
function solution(arr1, arr2) {
    var answer = [[]];
    return answer;
}



// 풀이 1
function solution(arr1, arr2) { 
  return arr1.map((e,i) => arr2[i].map((v,j) => arr1[i][j]+arr2[i][j]))
}


// 풀이 2
function solution(arr1, arr2) { 
  let answer = []; 
  for(i=0; i<arr1.length; i++) { 
    let temp = []; 
    for(j=0; j<arr1[i].length; j++) { 
      temp.push(arr1[i][j] + arr2[i][j])
    } 
    answer.push(temp) 
  } 
  return answer; 
}

/*

map 함수 사용 시
map(e,i)이면, 두 번째 오는 원소(i)는 그 배열의 index를 나타낸다.

*/
