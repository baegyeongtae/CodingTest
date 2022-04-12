/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
2022 KAKAO BLIND RECRUITMENT 신고 결과 받기

[링크]
https://programmers.co.kr/learn/courses/30/lessons/92334
*/

// 첫번째 풀이 -----------------------------------------------------------------------------------------------

function solution(id_list, report, k) {
  var answer = [];

  let user = new Map(); // 신고한 유저 목록
  let target = new Map(); // 신고 당한 유저 목록

  id_list.forEach((item) => user.set(item, new Set())); // user = Map { 'con' => Set {}, 'ryan' => Set {} }

  report.forEach((item) => {
    let arr = item.split(" ");
    user.set(arr[0], user.get(arr[0]).add(arr[1]));
    target.set(arr[1], 0);
  });
  // user = Map { 'con' => Set {}, 'ryan' => Set { 'con' } }
  // target = Map { 'con' => 0 }

  let twoTarget = []; // k번 신고 당한 유저

  for (let [key, value] of user) {
    value.forEach((item) => {
      target.set(item, target.get(item) + 1);
    });
  }

  for (let [key, value] of target) {
    if (value >= k) twoTarget.push(key);
  }
  // target = Map { 'con' => 1 }

  user.forEach((item) => {
    let number = 0;
    item.forEach((item) => {
      if (twoTarget.includes(item)) number++;
    });
    answer.push(number);
  });

  console.log(answer);

  return answer;
}

// 두번째 풀이 -----------------------------------------------------------------------------------------------

function solution(id_list, report, k) {
  let user = new Map(); // 신고한 유저 목록
  let target = new Map(); // 신고 당한 유저 목록

  let reports = [...new Set(report)].map((item) => item.split(" "));

  reports.forEach((item) => {
    target.set(item[1], target.get(item[1]) + 1 || 1);
  });

  reports.forEach((item) => {
    if (target.get(item[1]) >= k) {
      user.set(item[0], user.get(item[0]) + 1 || 1);
    }
  });

  let answer = id_list.map((item) => user.get(item) || 0);

  return answer;
}

/*
- 애초에 처음부터 report를 Set 으로 만들어버리면
중복 신고 내역은 전부 사라지기 때문에 작업하기 훨씬 수월하다.
*/
