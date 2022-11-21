const celId = document.getElementById('Cellphone')
const MsgId = document.getElementById('Message')
const btnGenerate = document.querySelector('button')
const resultBox = document.getElementById('resultBox')
const PosResult = document.querySelector('.PosResult')
const btnBatman = document.querySelector('.btnBatman')

btnGenerate.addEventListener('click', () => {
    var msg = MsgId.value
    var cell = celId.value.replace(/\s/g, '');
    encodedMsg = encodeURI(msg)

    resultBox.innerHTML = `https://api.whatsapp.com/send?phone=55${cell}&text=${encodedMsg}`


    PosResult.style.animation = "shower .5s forwards"


    var generateSpan = document.querySelector('button span')

    navigator.clipboard.writeText(`https://api.whatsapp.com/send?phone=55${cell}&text=${encodedMsg}`).then(() => {
        generateSpan.innerText = 'Copiado!'
    })

})
