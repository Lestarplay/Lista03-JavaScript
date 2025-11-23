let contadora = 1
    let soma = 0
    let media = 0

    while (contadora <= 5) {
        const numero = Number(prompt(`Digite o ${contadora}º número: `))
        soma += numero
        contadora++
    }
    media = soma / (contadora - 1)
    res.innerHTML = `A média dos números digitados por 5 é ${media}`
