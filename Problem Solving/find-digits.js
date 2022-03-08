function findDigits(n) {
    let count = 0
    n.toString().split('').forEach(d => n % d === 0 && count++)
    return count
}
