# Simulação de Máquina de Venda Automática (Autômato Finito)

Este projeto é uma simulação interativa de uma máquina de venda automática modelada como um **Autômato Finito com Saída**. O objetivo é demonstrar, de forma visual e funcional, como autômatos podem ser utilizados para representar sistemas reais, como uma vending machine.

## Funcionalidades
- **Inserção de moedas**: Simule a entrada de moedas de 5c, 10c, 25c e 50c.
- **Seleção de produto**: Escolha entre duas categorias de produtos (A e B), cada uma com dois produtos (P e Q).
- **Reembolso**: Permite cancelar a operação e receber o valor inserido de volta.
- **Visualização do autômato**: O diagrama do autômato é desenhado dinamicamente usando D3.js, destacando estados e transições em tempo real.
- **Reset manual**: Reinicie a máquina a qualquer momento.

## Estrutura dos Arquivos
- `index.html`: Página principal, estrutura da interface e integração dos scripts.
- `style.css`: Estilos visuais modernos para a interface e o diagrama do autômato.
- `script.js`: Lógica do autômato, manipulação dos estados, transições e renderização do grafo com D3.js.

## Como funciona a simulação
1. **Estados**: Cada valor de dinheiro inserido corresponde a um estado (ex: 0c, 5c, 10c, ...). Existem estados intermediários para seleção de categoria e estados finais para dispensa do produto.
2. **Transições**: As transições representam ações do usuário (inserir moeda, escolher categoria, selecionar produto, pedir reembolso). Cada transição pode gerar uma saída (dispensar produto, dar troco, reembolsar).
3. **Visualização**: O grafo do autômato é desenhado com D3.js, mostrando os estados, transições e rótulos. O estado atual e as transições ativas são destacados.

## Como rodar o projeto

### Requisitos
- Navegador moderno (Chrome, Firefox, Edge, etc.)
- Extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) instalada no VS Code

### Passos
1. **Abra a pasta do projeto no VS Code**
2. **Clique com o botão direito no arquivo `index.html`** e selecione `Open with Live Server` (ou clique no botão "Go Live" no canto inferior direito do VS Code)
3. O navegador abrirá automaticamente a página da simulação.

### Usando a simulação
- Insira moedas clicando nos botões correspondentes.
- Quando tiver saldo suficiente, selecione uma categoria de produto.
- Escolha o produto desejado (P ou Q).
- Caso queira cancelar, use os botões de reembolso.
- O diagrama do autômato mostrará o fluxo dos estados e transições em tempo real.

## Sobre o modelo
A modelagem segue o artigo "Modelagem de uma Vending Machine utilizando um Autômato Finito com Saída". O autômato foi implementado conforme o diagrama do artigo, com todos os estados, transições e saídas representados.

## Créditos
- Desenvolvido por [Seu Nome]
- Baseado em conceitos de Autômatos Finitos e D3.js

---

**Dúvidas ou sugestões?** Abra uma issue ou entre em contato!
