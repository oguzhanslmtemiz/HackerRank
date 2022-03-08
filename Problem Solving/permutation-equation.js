function permutationEquation(p) {
    // let result = []
    // for (let i = 0; i < p.length; i++) {
    //     result.push(p.indexOf(p.indexOf(i + 1) + 1) + 1)
    // }
    // return result
    return p.map((element, i, arr) => arr.indexOf(arr.indexOf(i + 1) + 1) + 1)
}
