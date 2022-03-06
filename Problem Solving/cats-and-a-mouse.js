function catAndMouse(x, y, z) {
    const dist2X = Math.abs(z - x), dist2Y = Math.abs(z - y)
    return dist2X < dist2Y ? 'Cat A' : dist2Y < dist2X ? 'Cat B' : 'Mouse C'
}
