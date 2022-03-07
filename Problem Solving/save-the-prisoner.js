
function saveThePrisoner(n, m, s) {
    return (m + s - 1) % n ? (m + s - 1) % n : n
    // let currPosition = s
    // while (m) {
    //     if (m === 1) { return currPosition }
    //     if (currPosition === n) {
    //         currPosition = 1
    //     } else {
    //         currPosition++
    //     }
    //     m--
    // }
}
