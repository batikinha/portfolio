const output = document.getElementById("output");
const input = document.getElementById("commandInput");

const filesystem = {
  "sobre": `
Estudante de Ciências Contábeis - UNIPAM
Foco: Gestão Tributária | Contabilidade Empresarial | Análise Financeira
Perfil analítico, estratégico e orientado à eficiência empresarial.
  `,
  "formacao": `
Ciências Contábeis - UNIPAM (2026–2030)

Disciplinas estratégicas:
- Contabilidade Empresarial
- Contabilidade de Custos
- Gestão Tributária
- Contabilidade Pública
- Lei de Responsabilidade Fiscal
  `,
  "projetos": `
[Projeto] Simulação Tributária
Comparativo: Simples Nacional x Lucro Presumido

[Projeto] Modelo de Fluxo de Caixa
Estrutura empresarial mensal

[Projeto] DRE Empresarial
Modelo prático de Demonstração de Resultado
  `,
  "habilidades": `
- Excel Avançado
- Análise de Demonstrações Contábeis
- Organização Financeira
- Planejamento Tributário Básico
  `,
  "contato": `
Email: seuemail@email.com
LinkedIn: linkedin.com/in/seulink
  `
};

function print(text, className = "") {
  const line = document.createElement("div");
  line.className = className;
  line.innerText = text;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

function processCommand(command) {
  const args = command.trim().split(" ");
  const main = args[0];

  switch(main) {
    case "help":
      print("Comandos disponíveis:");
      print("ls - listar diretórios");
      print("open [diretorio] - abrir conteúdo");
      print("clear - limpar terminal");
      break;

    case "ls":
      Object.keys(filesystem).forEach(dir => {
        print("📁 " + dir, "folder");
      });
      break;

    case "open":
      const dir = args[1];
      if(filesystem[dir]) {
        print(filesystem[dir]);
      } else {
        print("Diretório não encontrado.", "error");
      }
      break;

    case "clear":
      output.innerHTML = "";
      break;

    default:
      print("Comando não reconhecido. Digite 'help'.", "error");
  }
}

input.addEventListener("keydown", function(e) {
  if(e.key === "Enter") {
    const command = input.value;
    print("maria@contabil:~$ " + command);
    processCommand(command);
    input.value = "";
  }
});
