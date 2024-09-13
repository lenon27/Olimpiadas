function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")
    // console.log(section)

    let campoPesquisa= document.getElementById("campo-pesquisa").value

    // Convertendo para Camel Case
    // campoPesquisa = campoPesquisa.replace(/\b\w/g, (char) => char.toUpperCase());

    // console.log(campoPesquisa)

    // if(campoPesquisa == "" || campoPesquisa == " "){
    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. Você precisa didgitar o nome de um atleta ou esporte</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados ="" // Cria uma variável chamada resultados e inicializa-a como uma string vazia. Essa variável será usada para armazenar o HTML gerado para cada resultado da pesquisa.
    let titulo = ""
    let descricao = ""
    let tags = ""

    for(let dado of dados){
        // for...of: É um loop que itera sobre cada elemento de um objeto iterável (como um array). Nesse caso, ele itera sobre cada elemento do array dados.
        // let dado: Em cada iteração, o valor do elemento atual é atribuído à variável dado.
        // dados: É o array que contém os dados de cada resultado da pesquisa. Cada elemento de dados é um objeto com as propriedades titulo, descricao e link.

        // console.log(dado.titulo.includes(campoPesquisa)) // Vai exibir true para todos os elementos que forem compatíveis com a pesquisa e false para todos os elementos que não forem compatíveis
        
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += //  Adiciona uma nova string ao valor atual da variável resultados. Essa nova string contém o HTML para um item da lista.
            `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Saiba Mais</a>
            </div>
        `
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    section.innerHTML = resultados
}
