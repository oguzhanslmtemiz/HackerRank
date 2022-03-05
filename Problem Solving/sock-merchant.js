function sockMerchant(n, ar) {
    const socks = []
    ar.forEach(color => {
        const sock = socks.find(obj => obj.color === color && obj.count < 2)
        sock ? sock.count++ : socks.push({ color: color, count: 1 })
    })
    console.log(socks)
    return socks.filter(sock => sock.count === 2).length
}
