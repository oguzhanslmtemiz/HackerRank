function kangaroo(x1, v1, x2, v2) {
    if (v1 <= v2) return "NO"
    const d1 = x1 + v1 //3
    const d2 = x2 + v2 //6
    const db = x2 - x1 //4
    const t = v1 - v2  //1
    const jt = db / t
    if (d1 % d2 === 0 || d2 % d1 === 0 || jt % 1 === 0) {
        return "YES"
    } else {
        return "NO"
    }
}
