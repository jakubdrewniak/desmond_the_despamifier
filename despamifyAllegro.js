
(function despamifyAllegro() {
    const offers = getOffersList()
    removeDuplicates(offers)
    window.scrollTo({ top: 0 });
})()

function removeDuplicates(offersList) {
    const titles = []
    offersList.forEach(offer => {
        const offerTitle = offer
            .getElementsByTagName('h2')[0]
            .firstChild
            .innerText
        if (titles.some(t => t === offerTitle)) {
            hideElement(offer)
        } else {
            titles.push(offerTitle)
        }
    })
}

function getOffersList() {
    return Array.from(document.querySelectorAll('[data-item=true]'))
}

function hideElement(element) {
    element.style.cssText =
        `
    background-color: red !important;
    height: 2px !important;
    overflow: hidden !important;
    margin: 2px 0 0 0 !important;
    box-sizing: border-box !important;
    border: none !important;
    `
}
