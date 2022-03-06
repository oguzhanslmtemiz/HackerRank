function designerPdfViewer(h, word) {
    let maxHeight = 0
    let count = 0
    word.split('').forEach(letter => {
        if (letter) {
            count++
            let i = letter.charCodeAt() - 97
            let height = h[i]
            if (height > maxHeight) maxHeight = height
        }
    })
    return maxHeight * count
}
