function getMoneySpent(keyboards, drives, b) {
    const prices = [-1]
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            const price = keyboards[i] + drives[j]
            if (price <= b) prices.push(price)
        }
    }
    return Math.max(...prices)
}
