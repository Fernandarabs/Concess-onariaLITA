let dados = [
    { nome: "Yamaha YZF-R1", descricao: "Uma das motos esportivas mais rápidas, ideal para quem busca desempenho.", link: "https://www.honda.com.br/motos/", img: "yamaha.jpg" },
    { nome: "Kawasaki Ninja ZX-10R", descricao: "Moto poderosa, projetada para velocidade e controle em alta performance.", link: "https://www.honda.com.br/motos/", img: "kawasaki.jpg" },
    { nome: "Honda CBR1000RR-R Fireblade", descricao: "Ícone entre as motos esportivas, conhecida por sua agilidade e tecnologia.", link: "https://www.honda.com.br/motos/", img: "Honda.jpg" },
    { nome: "Ducati Panigale V4", descricao: "Design deslumbrante e tecnologia avançada, perfeita para amantes da velocidade.", link: "https://www.honda.com.br/motos/", img: "Ducati.jpg" },
    { nome: "Suzuki GSX-R1000", descricao: "Uma moto que combina estilo, conforto e performance em pista.", link: "https://www.honda.com.br/motos/", img: "suzuki.jpg" },
    { nome: "BMW S1000RR", descricao: "Tecnologia de ponta e desempenho excepcional, ideal para pilotos exigentes.", link: "https://www.honda.com.br/motos/", img: "bmw.jpg" },
    { nome: "Aprilia RSV4 1100 Factory", descricao: "Performance de nível mundial, feita para quem vive a adrenalina.", link: "https://www.honda.com.br/motos/", img: "apriliw.jpg" },
    { nome: "MV Agusta F4", descricao: "Uma obra-prima de design e desempenho, a escolha dos apaixonados por motos.", link: "https://www.honda.com.br/motos/", img: "mv agusta.jpg" },
    { nome: "KTM RC 390", descricao: "Mota leve e ágil, perfeita para quem busca emoção nas pistas.", link: "https://www.honda.com.br/motos/", img: "kym.jpg" },
    { nome: "Triumph Daytona 765", descricao: "Uma super esportiva que oferece emoção e estilo únicos.", link: "https://www.honda.com.br/motos/", img: "triumph.jpg" }
];

function pesquisar() {
    let section = document.getElementById('resultados-pesquisa');
    let produtos = document.querySelector('.produtos-home'); 
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    
    if (campoPesquisa === "") {
        section.innerHTML = "<p>Nenhum texto digitado!</p>";
        produtos.style.display = "flex"; // Mostra todas as motos
        return;
    }

    let resultado = dados.filter(dado => 
        dado.nome.toLowerCase().includes(campoPesquisa) || 
        dado.descricao.toLowerCase().includes(campoPesquisa)
    );

    if (resultado.length > 0) {
        section.innerHTML = `
            <div class="item-resultado">
                <h2><a href="${resultado[0].link}" target="_blank">${resultado[0].nome}</a></h2>
                <img src="${resultado[0].img}" alt="${resultado[0].nome}">
                <p class="descricao-meta">${resultado[0].descricao}</p>
            </div>
        `;
        produtos.style.display = "none"; // Esconde todas as outras motos
    } else {
        section.innerHTML = "<p>Nenhuma moto encontrada!</p>";
        produtos.style.display = "none"; // Esconde as motos se não houver resultado
    }
}
