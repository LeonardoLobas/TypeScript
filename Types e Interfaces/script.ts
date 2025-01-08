interface Product {
    nome: string;
    preco: number;
    descricao: string;
    garantia: number;
    seguroAcidentes: boolean;
    empresaFabricante: Empresa;
    empresaMontadora: Empresa;
}

interface Empresa {
    fundacao: number;
    nome: string;
    pais: string;
}

async function fetchProduct() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const product = await response.json();
    showProduct(product);
}

fetchProduct();

function showProduct(data: Product) {
    document.body.innerHTML = `    <div>
      <h2>${data.nome}</h2>
      <p>R$ ${data.preco}</p>
      <div>
        <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
      </div>
      <div>
        <h3>Montadora: ${data.empresaMontadora.nome}</h3>
      </div>
    </div>`;
}
