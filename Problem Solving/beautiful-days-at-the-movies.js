function beautifulDays(i, j, k) {
    let result = 0
    const isBeautifulDay = (day) => {
        const reversedDay = parseInt(day.toString().split('').reverse().join(''))
        return Math.abs(day - reversedDay) % k === 0 ? true : false
    }
    for (; i <= j; i++) {
        if (isBeautifulDay(i)) result++
    }
    return result
}
