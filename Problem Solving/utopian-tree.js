function utopianTree(n) {
    let height = 1
    for (let period = 1; period <= n; period++) {
        period % 2 === 0 ? height++ : height *= 2
    }
    return height
}
