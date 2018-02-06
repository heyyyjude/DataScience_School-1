// // 반복문
//
// // while
// var a = 0;
// while(a < 5){
//     a ++;
//     console.log(a);
// }
//
// // for  (가운데 조건이 false가 되면 끝나는 것)
// for(var i = 0; i < 3; i++){
//     console.log(i);
// }
//
// // break
// a = 0;
// while (a < 5){
//     a++;
//     if(a === 3){
//         break;
//     }
//     cosole.log(a);
// }

// continue
// var a = 0;
// while(a<5){
//     a++;
//     if(a === 3){
//         continue;
//     }
//     console.log(a);
// }

// 문제 1. 구구단 가로(for, while)
for(var num1 = 2; num1 <10; num1++){
    for(var num2 = 1; num2<10; num2++){
        console.log(num1 + "*" + num2 + "=" + num1*num2);
    }
    console.log();
}

// 문제 2, 구구단 세로 (for, while)
// 줄바꿈 안되게 출력 proess.stdout.write()
for(var num2 = 1; num2 <10; num2++){
    for(var num1 = 2; num1<10; num1++){
        process.stdout.write(num1 + "*" + num2 + "=" + num1*num2 + "\t");
    }
    console.log();
}
