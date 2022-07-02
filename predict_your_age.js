function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    const sumOfEveryAge = new Array(age1,age2,age3,age4,age5,age6,age7,age8)
    .map(age => age*age)
    .reduce((acc, current) => acc + current, 0)
    
    return parseInt(Math.sqrt(sumOfEveryAge) / 2)
}

predictAge(65,60,75,55,60,63,64,45) // 86