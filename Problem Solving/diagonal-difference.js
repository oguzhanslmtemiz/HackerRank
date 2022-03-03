function diagonalDifference(arr) {
    const l = arr.length
    let l2r = 0
    let r2l = 0
    for (let i = 0; i < l; i++) {
        l2r += arr[i][i]
        r2l += arr[i][l - i - 1]
    }
    return Math.abs(l2r - r2l)
}
