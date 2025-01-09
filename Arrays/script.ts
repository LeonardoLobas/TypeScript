interface infoCursos {
    nome: string;
    horas: number;
    aulas: number;
    gratuito: boolean;
    tags: string[];
    idAulas: number[];
    nivel: "iniciante" | "avancado";
}

async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const data = await response.json();
    console.log(data);
    mostrarCursos(data);
}

function mostrarCursos(dados: infoCursos[]) {
    dados.forEach((dado) => {
        let color;
        if (dado.nivel === "iniciante") {
            color = "blue";
        } else if (dado.nivel === "avancado") {
            color = "red";
        }
        document.body.innerHTML += `
      <div>
        <h2 style="color: ${color};">${dado.nome}</h2>
        <p>Horas: ${dado.horas}</p>
        <p>Aulas: ${dado.aulas}</p>
        <p>Tipo: ${dado.gratuito ? "Gratuito" : "Pago"}</p>
        <p>Tags: ${dado.tags.join(", ")}</p>
        <p>Aulas: ${dado.idAulas.join(" | ")}</p>
      </div>
    `;
    });
}

fetchCursos();
