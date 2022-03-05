function pageCount(n, p) {
    const isOdd = n % 2 !== 0
    // const numberOfPagesInBetween = n - p
    if ((n - p === 0) || (n - p === 1 && isOdd)) {
        return 0
    } else if (isOdd) {
        return Math.min(Math.ceil((p - 1) / 2), Math.ceil((n - p - 1) / 2))
    }
    return Math.min(Math.ceil((p - 1) / 2), Math.ceil((n - p) / 2))
}
