names = [
    "Barra de chocolate (tradicional, 100g)",
    "Barra de chocolate (branco, 100g)",
    "Barra de chocolate (amargo, 100g)",
    "Barra de chocolate (trufada, 100g)",
    "Barra de chocolate (ao leite, 100g)",
    "Trufa de chocolate (tradicional, 30g)",
    "Trufa de chocolate (branco, 30g)",
    "Trufa de chocolate (avelã, 30g)",
    "Trufa de chocolate (personalizada, 30g)",
    "Trufa de chocolate (ao leite, 30g)",
]
prices = [
    "15,99",
    "15,99",
    "15,99",
    "18,99",
    "18,99",
    "5,00",
    "5,00",
    "5,00",
    "8,00",
    "8,00",
]

desc = [
    "<b>Para aqueles que gostam do simples, e do gostoso!</b> Experimente nossa barra de chocolate tradicional, com o sabor inesquecível do chocolate que todo mundo ama. <br><br><br>",
    "<b>Para os amantes de chocolate branco:</b> experimente nossa barra de chocolate branco! Com o seu clássico e marcante sabor mais suave e doce~ <br><br><br>",
    "<b>Para aqueles que não gostam da experiência padrão:</b> experimente nossa barra de chocolate amargo! Com açúcares reduzidos, se tornando uma combinação perfeita com um cafézinho! <br><br>",
    "<b>Para aqueles que querem um sabor a mais:</b> experimente nossa barra de chocolate trufada! Com um recheio de chocolate levemente amargo, tornando-se uma explosão de sabor instantânea! <br><br>",
    "<b>Para aqueles que gostam de cremosidade:</b> experimente a nossa barra de chocolate ao leite, que derrete na boca, além de ser levemente mais macia comparada aos outros chocolates do nosso catálogo. <br><br>",
    "<b>Experimente nossa trufa de chocolate tradicional!</b> Uma opção mais econômica, portatil, e igualmente gostosa à nossas barras, com mais chocolate!",
    "<b>Experimente nossa trufa de chocolate branco!</b> Para aqueles que querem sentir o sabor suave e leve do chocolate branco em qualquer lugar.",
    "<b>Experimente nossa trufa de chocolate recheada com avelã!</b> Combinados os sabores do chocolate tradicional, com o creme de avelã que todo mundo gosta! Uma opção doce e leve, ainda econômica, e igualmente gostosa!",
    "<b>Pensando em uma combinação extravagante?</b> Experimente nossa trufa de chocolate personalizada! No momento da compra, você pode escolher como rechear a sua trufa com 15+ sabores!",
    "<b>Experimente nossa trufa de chocolate ao leite!</b> Para aqueles que querem elevar o nível de cremosidade, vem recheada de chocolate ao leite, e claro, derrete na boca~"
]

function getId(productIndex){
    // Isso cria a QueryString
    window.location.href = "product.html?productId=" + encodeURIComponent(productIndex)
}

// Só funciona na página do Produto!!!
window.onload = function(){
    // Isso lê a QueryString
    const params = new URLSearchParams(window.location.search)

    // Isso pega um produto em específico
    const currentId = params.get('productId')
    console.log(currentId)

    productName = document.getElementById("productName")
    productName.innerText = names[currentId]

    productPrice = document.getElementById("productPrice")
    productPrice.innerHTML = 'R$' + prices[currentId] + '<span id="s-title" style="font-size: 9pt;">p/und</span>'

    productDesc = document.getElementById("productDesc")
    productDesc.innerHTML = desc[currentId]

    productImg = document.getElementById("product-img")
    productImg.src = `assets/chocolate-imgs/${currentId}.png`
}