function circularArrayRotation(a, k, queries) {
    const length = Math.max(a.length, queries.length)
    let result = []
    for (let i = 1; i <= k; i++) {
        a.unshift(a.pop())
    }
    for (let i = 0; i < length; i++) {
        result.push(a[queries[i]])
    }
    return result
}
