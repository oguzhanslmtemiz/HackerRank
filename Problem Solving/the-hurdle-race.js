function hurdleRace(k, height) {
    const maxHeight = Math.max(...height)
    return maxHeight - k <= 0 ? 0 : maxHeight - k
}
