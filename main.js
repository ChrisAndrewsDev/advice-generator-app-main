
const loadButton = document.querySelector('#dice-button');

async function getQuote(){
    const req = await fetch('https://api.adviceslip.com/advice')
    const res = await req.json()
    document.querySelector('#advice-quote').innerText = `“` + res.slip.advice + `”`
    document.querySelector('#adviceID').innerText =  res.slip.id 
}

loadButton.addEventListener('click', getQuote);