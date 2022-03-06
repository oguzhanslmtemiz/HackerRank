function pickingNumbers(a) {
    const arr = Array(a.length)
    let longest = 0
    for (let i = 0; i < a.length; i++) {
        const num = a[i]
        arr[num] ? arr[num]++ : arr[num] = 1
    }
    for (let i = 1; i < arr.length; i++) {
        longest = Math.max(longest, (arr[i] || 0),
            (arr[i - 1] || 0), ((arr[i] + arr[i - 1]) || 0))
    }
    return longest
}
