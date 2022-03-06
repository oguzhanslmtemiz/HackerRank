function climbingLeaderboard(ranked, player) {
    ranked = [... new Set(ranked)]
    const result = []
    let i = ranked.length - 1
    player.forEach(playerScore => {
        while (i >= 0) {
            if (playerScore >= ranked[i]) {
                i--
            } else {
                let tempRank = i + 2
                result.push(tempRank)
                break
            }
        }
        if (i < 0) {
            result.push(1)
        }
    })
    return result
}
