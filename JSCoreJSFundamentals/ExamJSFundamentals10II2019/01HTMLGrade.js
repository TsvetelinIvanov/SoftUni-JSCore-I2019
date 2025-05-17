function calculateGrade(examPoints, homeworkPoints, totalHomework) {
    let totalExamPoits = (examPoints * 100 /400) * 0.9 ;
    let totalHomeworkPoits = (homeworkPoints * 100 / totalHomework) * 0.1;
    let totalPoints = totalExamPoits + totalHomeworkPoits;

    let grade = 3 + 2 * (totalPoints - 100 / 5) / (100 / 2);
    if (examPoints === 400) {
        grade = 6;
    }

    if(grade < 3) {
        grade = 2;
    }
    else if (grade >= 6) {
        grade = 6;
    }

    let gradeString = grade.toFixed(2);
    //console.log(grade)    
    //console.log(gradeString)    
    return gradeString;
}

calculateGrade(300, 10, 10)
calculateGrade(200, 5, 5)
calculateGrade(290, 5, 5)
