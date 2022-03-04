function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const applePositions = apples.map(pos => pos + a)
    const orangePositions = oranges.map(pos => pos + b)
    let countOfApple = 0
    let countOfOrange = 0
    applePositions.forEach(pos => {
        if (pos >= s && pos <= t) countOfApple++
    })
    orangePositions.forEach(pos => {
        if (pos >= s && pos <= t) countOfOrange++
    })
    console.log(countOfApple)
    console.log(countOfOrange)
}
