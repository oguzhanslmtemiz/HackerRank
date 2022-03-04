function gradingStudents(grades) {
    function nextMultiple5(grade) {
        const remainder = grade % 5
        return grade + 5 - remainder
    }
    function finalGrade(grade) {
        if (grade > 37) {
            const difference = nextMultiple5(grade) - grade
            if (difference < 3) {
                return nextMultiple5(grade)
            }
        }
        return grade
    }
    return grades.map(finalGrade)
}
