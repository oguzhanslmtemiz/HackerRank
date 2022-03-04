function breakingRecords(scores) {
    let countOfRecord = [0, 0],
        highestScore = scores[0],
        lowestScore = scores[0]
    scores.forEach(score => {
        if (score > highestScore) {
            highestScore = score
            countOfRecord[0]++
        }
        if (score < lowestScore) {
            lowestScore = score
            countOfRecord[1]++
        }
    })
    return countOfRecord
}
