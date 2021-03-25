var score = prompt("Enter your score")
var scoreConvert = parseInt(score)
var totalScore = prompt("Enter possible total score")
var totalScoreConvert = parseInt(totalScore)
var result

function gradeCalc(socoreConvert, totalScoreConvert){
    
    if(scoreConvert <= 59){
               result =  scoreConvert /totalScoreConvert;
                console.log("F - Your grade percentage is " + " " + result + "%" )
            }else if(socoreConvert >= 60 && socoreConvert <= 69 ) {
                        result = socoreConvert / totalScoreConvert;
                        console.log("D - Your grade percentage is " + " " + result + "%" )
                    }else if(socoreConvert >= 70 && socoreConvert <= 79 ) {
                        result = socoreConvert / totalScoreConvert;
                        console.log("C - Your grade percentage is " + " " + result + "%" )
                    }else if(socoreConvert >= 80 && socoreConvert<= 89 ) {
                        result = socoreConvert / totalScoreConvert;
                        console.log("B - Your grade percentage is " + " " + result + "%" )
                    }else {
                                result =  ((socoreConvert / totalScoreConvert) * (totalScoreConvert / 1));
                                console.log("A - Your grade percentage is " + " " + result + "%" )
                            }
    
}
gradeCalc(scoreConvert, totalScoreConvert)