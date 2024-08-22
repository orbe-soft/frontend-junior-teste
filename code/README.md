# E-commerce de Bicicletas

Repositório da minha solução na avaliação para vaga de Estágio na OrbeSoft.

## Funcionalidades Implementadas

- **Catálogo de Bicicletas**
  - Exibição de uma lista de bicicletas com imagem, nome, preço e descrição.
  - Paginação para navegação entre páginas de produtos.
  - Filtros por marca para refinar a busca.
  - Ordenação por preço, tanto menor quanto maior.
  - Funcionalidade de busca por nome de bicicleta.

- **Página de Detalhes da Bicicleta**
  - Exibição de informações detalhadas da bicicleta, incluindo imagens, nome, preço e descrição completa.
  - Opção para adicionar a bicicleta ao carrinho.

- **Carrinho de Compras**
  - Adição e remoção de produtos do carrinho.
  - Atualização da quantidade de itens no carrinho.

- **Formulário de Pesquisa**
  - Implementado com `react-hook-form` e `zod` para validação de dados.
  - Validação básica para o campo de pesquisa por nome da bicicleta.

## O que Não Foi Implementado

- **Schema de Validação de Dados das Chamadas de API**: A validação de dados para chamadas de API não foi utilizada devido a um erro que acabei enfrentando, deixei uma observação sobre no arquivo `src/schemas/bikeSchema.ts`.
- **Uso Completo do React Hook Form**: Acabei utilizando o `react-hook-form` apenas no formulário de pesquisa por nome de bicicleta, pois foi o único que consegui implementar à tempo na aplicação.
- **Testes**: Cheguei a configurar o básico para realizar testes, porém tive de focar na entrega da avaliação, então não consegui implementá-los como eu gostaria.

## Documentação

- **Schema de Validação**: O esquema de validação para o formulário de pesquisa pode ser encontrado em `src/schemas/searchSchema.ts`.
- **formatters**: Possui funções de formatação de valores.
- **src/resources**: Apenas guias básicos sobre a API e reactQuery para que eu pudesse consultar em alguma necessidade.