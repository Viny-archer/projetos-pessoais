function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("ano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano ) {
        alert("Verifique seus dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'criança-m.jpg')
            } else if (idade >= 12 && idade < 17) {
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade >= 18 && idade < 60) {
                img.setAttribute('src', 'adulto-m.jpg')
            } else{
                img.setAttribute('src', 'idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'criança-f.jpg')
            } else if (idade >= 12 && idade < 17) {
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade >= 18 && idade < 60) {
                img.setAttribute('src', 'adulto-f.jpg')
            } else{
                img.setAttribute('src', 'idosa-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que você é ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}