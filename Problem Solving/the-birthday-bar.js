function birthday(s, d, m) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        console.log(">>", s.slice(i, i + m))
        const sum = s.slice(i, i + m).reduce((prev, curr) => prev + curr)
        if (sum === d) count++
    }
    return count
}
