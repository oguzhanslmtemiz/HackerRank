function divisibleSumPairs(n, k, ar) {
    let count = 0
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const sum = ar[i] + ar[j]
            console.log(ar[i], "+", ar[j], "=", sum, "count:", count)
            if (sum === k || sum % k === 0) {
                count++
            }
        }
    }
    return count
}
