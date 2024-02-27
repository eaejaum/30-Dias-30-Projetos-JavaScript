const scriptURL = 'https://script.google.com/macros/s/AKfycbyB7rWsBiMdC--tqN_bcmTRqrBO9mTR85EcBj4S_BH7NfLVCpvDsiRYm7k5sbB1HKh5tQ/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})