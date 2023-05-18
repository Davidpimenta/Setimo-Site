function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var nasc = Number(document.getElementById('nasc').value)  
  var res = document.getElementById('text')
  if (nasc > ano || nasc < 1930){
    window.alert('[Erro] Digite uma data certa maior que 1930')
  } else {
    var sexo = document.getElementsByName('sexo')
    var genero = ' '
    if(sexo[0].checked){
        genero = 'Masculino'
    }
    if(sexo[1].checked){
        genero = 'Feminino'
    }
  }

  res.innerText = `${genero}`

}