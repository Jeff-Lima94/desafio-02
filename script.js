
let idade =28

if (idade >= 18 ){
      console.log("Tudo certo")
    } else {
     console.log("unknow error")
    }

    let humano = true
    
    if (idade >= 18 &&  humano === true){
          console.log( "você tem mais de 18 anos e você é humano")}
           else{
           console.log( "você não tem mais de 18 anos ou não é humano")
    }
    
    let mes="maio"

    if(mes == "janeiro" || mes == "dezembro"){
      console.log("Que pena você é capricorniana")

    }
    else{
      console.log("parabéns você não é capricorniana")
    }

    let nome="Jefferson"
    if(nome.substring(0,1)=="R"){
      console.log("seu nome começa com 'R' ")
    }
    else{
      console.log ("seu nome não começa com 'R' ")
    }

    let sobrenome = "Lima"
    if(sobrenome.length > 6 || nome.substring(0,1) === "E"){
      console.log("seu sobrenome tem menos de 6 letras ou seu nome começa com 'E' ")
    }
    else{
      console.log("seu sobrenome não tem menos de 6 letras ou seu nome não começa com 'E' ")
    }