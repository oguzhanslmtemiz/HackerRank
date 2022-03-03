function plusMinus(arr) {
    const l = arr.length
    const p = [], n = [], z = []
    arr.forEach(item => {
        item > 0 ? p.push(item) : item < 0 ? n.push(item) : z.push(item)
    })
    console.log((p.length / l).toFixed(6))
    console.log((n.length / l).toFixed(6))
    console.log((z.length / l).toFixed(6))
}
