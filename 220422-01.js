

/*
[플랫폼]
프로그래머스

[난이도]
레벨 1

[문제]
코딩테스트 연습 > 시저 암호

[링크]
https://programmers.co.kr/learn/courses/30/lessons/12926
*/


// 기본 틀
function solution(n) {
    var answer = 0;
    return answer;
}



// 풀이
function solution(s, n) {
    var answer = '';
    let next = '';
    for(i=0; i<s.length; i++) {
        if(s[i] === ' ') {
            answer = ' '
            next += answer;
        } else {
            answer = s[i].codePointAt(0);
            if (answer <= 90 && answer >= 65) {
                answer += n;
                if (!(answer <= 90 && answer >= 65)) {
                    answer -= 26;
                }
                next += String.fromCharCode(answer);
            } else if (answer <= 122  && answer >= 97) {
                answer += n;
                if (!(answer <= 122 && answer >= 97)) {
                    answer -= 26;
                }
                next += String.fromCharCode(answer);
            }
        }
    }
    return next;
}




// 다른 풀이 1
function solution(s, n) {
    var chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          "
    return s.split('').map(e => chars[chars.indexOf(e)+n]).join('');
}




// 다른 풀이 2
function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}

/*

*/
