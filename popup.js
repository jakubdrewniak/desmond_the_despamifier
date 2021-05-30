var despamifyButton = document.getElementById('despamify');
despamifyButton.addEventListener('click', async () => {
    despamifyButton.style.backgroundColor = 'green'
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColor,
    });
}, false);

function setPageBackgroundColor() {
    chrome.storage.sync.get('autoFiltering', ({autoFiltering}) => {
        if (autoFiltering) {
            document.body.style.backgroundColor = "red";
        }
    })
}
