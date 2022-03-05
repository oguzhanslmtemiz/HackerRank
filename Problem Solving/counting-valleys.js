function countingValleys(steps, path) {
    let countOfValley = 0, level = 0
    for (let i = 0; i < steps; i++) {
        path[i] === 'U' ? level++ : level--
        if (path[i] === 'U' && level === 0) countOfValley++
    }
    return countOfValley
}
