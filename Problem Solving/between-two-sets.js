function getTotalX(a, b) {
    function gcd(x, y) {
        return x ? gcd(y % x, x) : y
    }
    function lcm(x, y) {
        return x * y / gcd(x, y)
    }
    const lcmOfA = a.reduce(lcm)
    const gcdOfB = b.reduce(gcd)
    let count = 0;
    for (let i = lcmOfA, j = 1; i <= gcdOfB; i = lcmOfA * j) {
        if (gcdOfB % i === 0) {
            count++
        }
        j++
    }
    return count
}
