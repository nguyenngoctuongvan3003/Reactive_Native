//  There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

function tinhDTB(s1,s2,s3){
    let dtb=(s1+s2+s3)/3
    return dtb
}

let diemDolphins1= Math.round(tinhDTB(96,108,89))
let diemKoalas1= Math.round(tinhDTB(88,91,110))

let diemDolphins2= Math.round(tinhDTB(97,112,101))
let diemKoalas2= Math.round(tinhDTB(109,95,123))

let diemDolphins3= Math.round(tinhDTB(97,112,101))
let diemKoalas3= Math.round(tinhDTB(109,95,106))

function soSanhDiem(diemDolphins, diemKoalas){
    if(diemDolphins > diemKoalas && diemDolphins>=100){
        console.log(`Dolphins ${diemDolphins} thắng, Koalas  ${diemKoalas} thua`)
    }else if(diemKoalas > diemDolphins && diemKoalas>=100){
        console.log(`Koalas ${diemKoalas} thắng, Dolphins  ${diemDolphins} thua`)
    
    }else if( diemDolphins== diemKoalas && diemDolphins>=100 && diemKoalas>=100 ){
        console.log(`Dolphins=Koalas=${diemDolphins} cả 2 đội hòa nhau`)
    }else{
        console.log(`Dolphins ${diemDolphins} và Koalas ${diemKoalas} , Không có đội nào thắng`)
    }
}

soSanhDiem(diemDolphins1,diemKoalas1)
soSanhDiem(diemDolphins2,diemKoalas2)
soSanhDiem(diemDolphins3,diemKoalas3)