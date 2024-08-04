### README

# Clarke Energia

## 1. Contexto da Aplicação e Objetivo

Aqui temos uma aplicação SPA que permite aos usuários, com base no consumo mensal de energia, terem recomendações de fornecedores. O objetivo é ajudar os usuários a escolher o melhor fornecedor de acordo com suas necessidades e consumo, atendendo assim, aos propósitos do Mercado Livre de energia. 

### Exemplo Simples:

**Entrada:** Consumo mensal de 15000 kWh  
**Saída:** Lista de fornecedores com custo por kWh, limite mínimo de kWh, total de clientes e avaliação média.

## 2. Arquitetura do Projeto

O projeto é estruturado com uma arquitetura frontend-backend separada:

- **Frontend:** Construído com React v. 18.2.0, oferece uma interface de usuário interativa para entrada de dados e exibição de resultados.
- **Backend:** Desenvolvido com Python 3.12.3, FastAPI e GraphQL, responsável por processar os dados de consumo e retornar as recomendações de fornecedores.

### Principais Funcionalidades e Responsabilidades:

- **React:** Criação da interface de usuário, gerenciamento de estado e interação com o backend via Apollo Client.
- **Python & FastAPI:** Implementação da lógica de negócio e GraphQL para a exposição da API.
- **GraphQL:** Para consultas flexíveis e eficientes dos dados dos fornecedores sem a necessidade de uso de ferramentas locais para isso.
- **PostgreSQL:** Banco de dados para armazenar informações dos fornecedores.

### Boas Práticas de Programação e Princípios aplicados no projeto:

- **SOLID:** Para garantir código modular e reutilizável.
- **DRY (Don't Repeat Yourself):** Para evitar duplicação de código.
- **Clean Code:** Para código legível e fácil de manter.

## 3. Tecnologias Utilizadas

- Frontend: React, Apollo Client
- Backend: Python, FastAPI, GraphQL, PostgreSQL
- Deploy: Vercel

## 4. Fluxo da Aplicação

### Diagrama de Fluxo

<div align="center">
 <img src="https://github.com/user-attachments/assets/3bd5ed92-f45e-4ea6-92bc-17bced4c4c3d" whidth = "700px"> 
</div>

### Descrição do Fluxo:

1. **Entrada do Usuário:** O usuário insere seu consumo mensal de energia.
2. **Envio de Dados:** Os dados são enviados para o backend via uma requisição GraphQL.
3. **Processamento:** O backend consulta o banco de dados e processa as informações.
4. **Resposta:** O backend retorna uma lista de fornecedores que atendem ao consumo informado.
5. **Exibição:** A lista de fornecedores é exibida ao usuário.

## 5. Imagem da Tela Inicial

<div align="center">
 <img src="https://github.com/user-attachments/assets/e0b95129-3547-4dc8-a0a9-89ed2b0ee686" whidth = "700px"> 
</div>

## 6. Imagem de Load

<div align="center">
 <img src="https://github.com/user-attachments/assets/60c126f1-1218-42ae-97dc-55658e259401" whidth = "700px"> 
</div>

### Importância do Loading

Para aplicações SPA baseadas em consultas, muitas vezes a dados extensos, um loading no lado do cliente melhora a experiência do usuário ao fornecer feedback visual durante o processamento das informações, evitando a percepção de lentidão ou falhas na aplicação.

## 7. Imagem do Resultado Final

<div align="center">
 <img src="https://github.com/user-attachments/assets/ff075c42-0f8b-4578-8400-f24d2fcd3edb" whidth = "700px"> 
</div>

## 8. Dependências e Como Rodar Localmente

### Dependências:

- Node.js
- npm ou yarn
- Python
- PostgreSQL

### Rodando Localmente:

1. **Clone o repositório:**

```sh
git clone https://github.com/seu-usuario/clarke-energia.git
```

2. **Instale as dependências do frontend:**

```sh
cd frontend
npm install
```

3. **Inicie o frontend:**

```sh
npm start
```

4. **Instale as dependências do backend:**

```sh
cd ../backend
pip install -r requirements.txt
```

5. **Configure o banco de dados PostgreSQL e ajuste as variáveis de ambiente no backend.**

6. **Inicie o backend:**

```sh
uvicorn app.main:app --reload
```

## 9. Deploy na Vercel

Este projeto está disponível na Vercel e pode ser testado através do seguinte link: [Clarke Energia na Vercel](https://clarke-energia.vercel.app)

## 10. Escalabilidade

### Possibilidades de Escalabilidade

#### Cacheamento

**Minha Justificativa:**
Acredito que o cacheamento no backend pode reduzir significativamente o tempo de resposta e a carga no banco de dados. Como o cacheamento armazena dados frequentemente solicitados em uma camada de armazenamento temporário, permitiria um acesso mais rápido. 

**Benefícios:**
- **Redução da Latência:** Respostas mais rápidas para o usuário final.
- **Desempenho:** Menor carga no banco de dados, o que resultaria em um desempenho mais eficiente.
- **Escalabilidade:** Capacidade de atender a mais solicitações simultâneas sem degradação de desempenho.

**Implementação:**
- Entendo que algumas ferramentas fariam sentido, como Redis ou Memcached, para armazenar os dados frequentemente acessados.
- Configurar políticas de expiração de cache para manter os dados atualizados.

#### Microservices

**Minha Justificativa:**
Dividir a aplicação em microservices pode melhorar o gerenciamento e a escalabilidade individual de cada serviço. Em vez de uma aplicação monolítica, cada funcionalidade seria um serviço independente que pode ser escalado, desenvolvido e implantado separadamente.

**Benefícios:**
- **Desempenho Isolado:** Escalar apenas os serviços que precisam de mais recursos.
- **Desenvolvimento Independente:** Equipes podendo trabalhar em diferentes serviços de forma independente.
- **Resiliência:** Falhas em um serviço não necessariamente afetariam os outros.

**Implementação:**
- Seria necessário identificar componentes da aplicação que podem ser isolados como microservices (e.g., autenticação, processamento de pedidos, etc.).
- Utilizar frameworks e ferramentas como Spring Boot (para Java), Flask (para Python) caso quisesse permanecer no ciclo do Python mesmo, ou outros que suportam arquitetura de microservices.
- Configurar comunicação entre microservices utilizando APIs RESTful ou mensageria (e.g., Kafka, RabbitMQ).

#### Load Balancing

**Minha Justificativa:**
Utilizar balanceamento de carga para distribuir o tráfego entre múltiplas instâncias do backend para melhorar a capacidade de resposta e a disponibilidade do sistema. Load balancers distribuem as solicitações de entrada para várias instâncias de servidores backend.

**Benefícios:**
- **Alta Disponibilidade:** Reduz o risco de downtime ao redistribuir o tráfego em caso de falha de uma instância.
- **Escalabilidade:** Permitiria adicionar ou remover instâncias de servidores conforme necessário.
- **Desempenho:** Melhor utilização dos recursos do servidor, resultando em tempos de resposta mais rápidos.

**Implementação:**
- Utilizar load balancers, como AWS Elastic Load Balancer (ELB), NGINX, ou HAProxy.
- Configurar regras de balanceamento de carga para distribuir o tráfego baseado em diversos critérios (round-robin, least connections, etc).

#### Serverless Functions

**Minha Justificativa:**
Migrar algumas funcionalidades para funções serverless pode melhorar a escalabilidade e reduzir custos. Serverless functions executaria o código em resposta a eventos e escalariam automaticamente, o que é eficiente para operações event-driven.

**Benefícios:**
- **Escalabilidade Automática:** As funções escalam automaticamente com a carga.
- **Custos Reduzidos:** Pagamento apenas pelo tempo de execução das funções.
- **Desenvolvimento Simplificado:** Foco apenas no código de negócio, sem preocupação com a infraestrutura subjacente.

**Implementação:**
- Utilizar plataformas serverless, como AWS Lambda, Google Cloud Functions, ou Azure Functions.
- Identificar funcionalidades específicas que podem ser movidas para um ambiente serverless (processamento de dados, notificações, etc.).
- Configurar triggers e eventos que disparam a execução das funções serverless.


