function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    var hora  = data.getHours()
    

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12) {
        img.src = 'fotomanha.jpg' 
        document.body.style.background = '#dc8402'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.jpg'
        document.body.style.background = '#a33b04'
    } else {
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#053538'
    }
}