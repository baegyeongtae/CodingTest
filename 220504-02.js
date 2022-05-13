

/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 월간 코드 챌린지 시즌 2 > 약수의 개수와 덧셈

[링크]
https://programmers.co.kr/learn/courses/30/lessons/77884
*/


// 기본 틀
function solution(left, right) {
    var answer = 0;
    return answer;
}



// 풀이
function solution(left, right) {
    var answer = [];
    let arr = [];
    let count = 0;
    let sum = 0;
    for(let i=left; i<=right; i++) {
        arr.push(i)
    }
    arr.map((num) => {
        for(let j=1; j<=num; j++) {
            if(num%j === 0) {
                answer.push(j)
            }
        }
        count = answer.length;
        if (count%2 === 0) {
            sum += num;
        } else { sum -= num }
        answer = [];
    })
    return sum;
}







// 다른 풀이 1
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}




// 다른 풀이 2
function getDivisorCount(number) {
  if (number === 1) {
    return 1;
  }

  let count = 2;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      count++;
    }
  }

  return count;
}

function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    const summand = getDivisorCount(i) % 2 === 0 ? i : -i;

    result += summand;
  }

  return result;
}


/*

*/
