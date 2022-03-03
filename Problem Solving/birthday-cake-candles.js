function birthdayCakeCandles(candles) {
    const max = Math.max(...candles)
    let count = 0
    candles.reduce((prev, curr) => {
        if (curr === max) count++
    }, candles[0])
    return count
}
