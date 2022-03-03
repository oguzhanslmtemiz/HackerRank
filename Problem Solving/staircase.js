function staircase(n) {
    for (let i = 0; i < n; i++) {
        let arr = [
            Array(n - 1 - i).fill(" ").join(''),
            Array(1 + i).fill("#").join('')
        ].join('')
        console.log(arr)
    }
}
