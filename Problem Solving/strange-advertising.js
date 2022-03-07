function viralAdvertising(n) {
    let shared = 5, liked = 2, cumulative = liked
    for (let day = 2; day <= n; day++) {
        shared = Math.floor(shared / 2) * 3
        liked = Math.floor(shared / 2)
        cumulative += liked
    }
    return cumulative
}
