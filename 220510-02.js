



/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 2021 카카오 채용연계형 인턴십 > 숫자 문자열과 영단어

[링크]
https://programmers.co.kr/learn/courses/30/lessons/81301
*/





// 기본 틀
function solution(s) {
    var answer = 0;
    return answer;
}



// 풀이
function solution(s) {
    var answer = [];
    let arr = s.split('')
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === 'z') {
            answer.push(0)
            arr.splice(i,3)
        } else if (arr[i] === 'o') {
            answer.push(1)
            arr.splice(i,2)
        } else if (arr[i] === 't') {
            if (arr[i+1] === 'w') {
                answer.push(2)
                arr.splice(i,2)
            } else {
                answer.push(3)
                arr.splice(i,4)
            }
        } else if (arr[i] === 'f') {
            if (arr[i+1] === 'o') {
                answer.push(4)
                arr.splice(i,3)
            } else {
                answer.push(5)
                arr.splice(i,3)
            }
        } else if (arr[i] === 's') {
            if (arr[i+1] === 'i') {
                answer.push(6)
                arr.splice(i,2)
            } else {
                answer.push(7)
                arr.splice(i,4)
            }
        } else if (arr[i] === 'e') {
            answer.push(8)
            arr.splice(i,4)
        } else if (arr[i] === 'n') {
            answer.push(9)
            arr.splice(i,3)
        } else answer.push(Number(arr[i]))
    }
    return Number(answer.join(''));
}




// 다른 풀이 1
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}



// 다른 풀이 2
function solution(s) {
    s = s.replace(/zero/gi, 0)
    .replace(/one/gi, 1)
    .replace(/two/gi, 2)
    .replace(/three/gi, 3)
    .replace(/four/gi, 4)
    .replace(/five/gi, 5)
    .replace(/six/gi, 6)
    .replace(/seven/gi, 7)
    .replace(/eight/gi, 8)
    .replace(/nine/gi, 9)
    return parseInt(s);
}




// 다른 풀이 3
function solution(s) {
    let charSet = {
        "zero" : 0,
        "one" : 1,
        "two" : 2,
        "three" : 3,
        "four" : 4,
        "five" : 5,
        "six" : 6,
        "seven" : 7,
        "eight" : 8,
        "nine" : 9,
    }

    for(let [key, value] of Object.entries(charSet)) {
        let re = new RegExp(`${key}`,"g");
        s = s.replace(re, value);
    }
    return parseInt(s);
}




// 다른 풀이 4
const digit2word = ['zero','one','two','three','four','five','six','seven', 'eight','nine']
function solution(s) {
    return Number(digit2word.reduce((ans, word, digit) => ans.replace(new RegExp(word, 'g'), digit), s));
}




/*

*/
