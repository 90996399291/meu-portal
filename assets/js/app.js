async function carregarProduto(idProduto, linkAfiliado) {
  try {
    const resposta = await fetch(`https://api.mercadolibre.com/items/${idProduto}`);
    const produto = await resposta.json();

    return `
      <div class="card">
        <img src="${produto.pictures[0].url}" alt="${produto.title}" class="card-img"/>
        <h3>${produto.title}</h3>
        <p class="card-price">R$ ${produto.price.toLocaleString('pt-BR')}</p>
        <a href="${linkAfiliado}" target="_blank" class="btn-comprar">Comprar Agora</a>
      </div>
    `;
  } catch (error) {
    return `
      <div class="card erro">
        <h3>Erro 😢</h3>
        <p>Não foi possível carregar.</p>
        <a href="${linkAfiliado}" target="_blank" class="btn-comprar">Ver no Mercado Livre</a>
      </div>
    `;
  }
}

async function carregarProdutos(lista) {
  const container = document.getElementById("produtos");
  let html = "";
  for (const item of lista) {
    html += await carregarProduto(item.id, item.link);
  }
  container.innerHTML = html;
}
