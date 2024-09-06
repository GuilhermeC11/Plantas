function pesquisar() {
    let section = document.getElementById
    ('resultados-pesquisa');

    let campoPesquisa = document.getElementById
    ('campo-pesquisa').value

    //se o campoPesquisa for uma string sem nada
    if (campoPesquisa == '') {
        section.innerHTML = '<p>Nada foi encontrado</p>'
        return  
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = '';
    let tags = '';

//para cada dado dentro da lista de dados
    for (let dado of dados ){
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            //se o campoPesquisa for uma string sem nada
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}
                </a>
              </h2>
              <p class="descricao-meta">${dado.descricao }...</p>
              <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
    `;
   }

} 
    if (!resultados) {
        resultados = '<p>Nada foi encontrado. Você não colocou um tipo de planta.<p>'
    }

    section.innerHTML = resultados;
}
