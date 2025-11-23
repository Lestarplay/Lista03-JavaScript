  let numero = parseInt(prompt("Digite um número: "))

    let contadora = 1

    while (contadora <= 10) {
        res.innerHTML += `<p>${numero} X ${contadora} = ${numero * contadora} </p>`
        contadora++
    }