function miniMaxSum(arr) {
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    const sum = arr.reduce((prev, curr) => prev + curr, 0)
    console.log(sum - max, sum - min)
}
