
(function despamifyAllegro() {
    const sections = getOffersListsSections()
    sections.forEach(section => {
        const list = section.getElementsByTagName('article')
        removeDuplicates(Array.from(list))
    })
})()

function removeDuplicates(offersList) {
    const titles = []
    offersList.forEach(offer => {
        const offerTitle = offer
            .getElementsByTagName('h2')[0]
            .firstChild
            .innerText
        if (titles.some(t => t === offerTitle)) {
            offer.remove()
        } else {
            titles.push(offerTitle)
        }
    })
}

function getOffersListsSections() {
    return Array.from(
        document
            .body
            .getElementsByClassName('opbox-listing')[0]
            .getElementsByTagName('section')
    )
}