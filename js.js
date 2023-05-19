function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var nasc = Number(document.getElementById('nasc').value)  
  var res = document.getElementById('text')
  var ig = document.getElementById('imagem')
  var diva = document.getElementById('img')
  if (nasc > ano || nasc < 1930){
    window.alert('[Erro] Digite uma data certa maior que 1930')
  } else {
    var sexo = document.getElementsByName('sexo')
    var genero = ''
    var fase = ''
    var idade = ano - nasc
    diva.style.display = 'block'
    if(sexo[0].checked){

        genero = 'Masculino'
        if(idade > 0 && idade <= 5){
          fase = 'um bebe'
          ig.src = 'pessoas/bebe.jpg'
        }

        if(idade > 5 && idade <= 12){
          fase = 'uma criança'
          ig.src = 'pessoas/criançaM.webp'
        }

        if(idade > 12 && idade < 18){
          fase = 'um adolescente'
          ig.src = 'pessoas/adolescenteM.jpg'
        }

        if(idade >= 18 && idade < 60){
          fase = 'um adulto'
          ig.src = 'pessoas/adultoM.jpg'
        }

        if(idade>=60){
          fase = 'um senhor de idade'
          ig.src = 'pessoas/velhoM.jpg'
        }


    }
    if(sexo[1].checked){
        genero = 'Feminino'
        if(idade > 0 && idade <= 5){
          fase = 'um bebe'
          ig.src = 'pessoas/bebe.jpg'
        }

        if(idade > 5 && idade <= 12){
          fase = 'uma criança'
          ig.src = 'pessoas/criançaF.jpg'
        }

        if(idade > 12 && idade < 18){
          fase = 'uma adolescente'
          ig.src = 'pessoas/adolescenteF.jpg'
        }

        if(idade >= 18 && idade < 60){
          fase = 'uma adulta'
          ig.src = 'pessoas/adultoF.jpg'
        }

        if(idade>=60){
          fase = 'uma senhora de idade'
          ig.src = 'pessoas/velhoF.jpg'
        }
    }
  

  res.innerText = `Detequitamos ${fase} do gênero ${genero} com ${idade} anos.`
  }
}