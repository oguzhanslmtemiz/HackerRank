function migratoryBirds(arr) {
    arr.sort()
    const birds = []
    for (let i = 0; i < arr.length; i++) {
        const bird = birds.find(obj => obj.type == arr[i])
        bird ? bird.count++ : birds.unshift({ type: arr[i], count: 1 })
    }
    console.log(birds)
    const highestFreq = birds.reduce((prev, curr) =>
        prev.count > curr.count ? prev : curr
    )
    return highestFreq.type
    // const highestFreq = Math.max(...birds.map(o => o.count))
    // console.log("highestFreq>", highestFreq)
    // return birds.find(bird => bird.count == highestFreq).type
}
