function jumpingOnClouds(c, k) {
    const n = c.length
    let energyLevel = 100
    let isEndGame = -1
    for (let i = 0; i < n; i = (i + k) % n) {
        if (i === 0) isEndGame++
        if (isEndGame > 0) break
        energyLevel = c[i] === 1 ? energyLevel - 3 : energyLevel - 1
    }
    return energyLevel
}
