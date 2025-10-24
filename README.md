# 🚐 Frete Inteligente

**MVP - Plataforma Full-Stack de Transporte Universitário**

Conectando motoristas, empresas de transporte e estudantes em uma única plataforma moderna e eficiente.

![Java](https://img.shields.io/badge/Java-21-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5.6-green)
![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue)

## 📋 Sobre o Projeto

O **Frete Inteligente** é uma aplicação completa que facilita a conexão entre:
- 🏢 **Empresas de transporte** que oferecem serviços
- 🚗 **Motoristas autônomos** que buscam clientes
- 🎓 **Estudantes** que precisam de transporte para universidades

### ✨ Funcionalidades Principais

- ✅ Sistema completo de autenticação (login/registro)
- ✅ Feed dinâmico de ofertas de transporte
- ✅ Criação e gerenciamento de postagens
- ✅ Perfis de usuário diferenciados (Empresa, Autônomo, Cliente)
- ✅ Interface moderna e responsiva
- ✅ API RESTful completa
- ✅ Integração frontend-backend funcionando

## 🏗️ Arquitetura

### Stack Tecnológico

**Backend:**
- Java 21
- Spring Boot 3.5.6
- MySQL 8.0
- JPA/Hibernate
- Flyway (migrações)
- Maven

**Frontend:**
- Next.js 16.0.0
- React 19.2.0
- TypeScript 5
- Tailwind CSS 4.1.9
- Radix UI Components
- pnpm

## 🚀 Como Executar

### Pré-requisitos

- Java 21
- Maven 3.6+
- MySQL 8.0
- Node.js 18+
- pnpm (ou npm)

### 1️⃣ Backend

```bash
# 1. Certifique-se de que o MySQL está rodando na porta 3307
# O banco será criado automaticamente

# 2. Execute o backend
mvn spring-boot:run

# O backend estará disponível em http://localhost:8080
```

### 2️⃣ Frontend

```bash
# 1. Navegue até a pasta do frontend
cd transport-app

# 2. Instale as dependências
pnpm install

# 3. Crie o arquivo .env.local
echo "NEXT_PUBLIC_API_URL=http://localhost:8080/api" > .env.local

# 4. Execute o servidor de desenvolvimento
pnpm dev

# O frontend estará disponível em http://localhost:3000
```

### 🎉 Primeiro Acesso

1. Acesse `http://localhost:3000`
2. Clique em **"Cadastre-se"**
3. Selecione o tipo de usuário:
   - 🏢 **Empresa de Transporte**
   - 🚗 **Motorista Autônomo**
   - 🎓 **Cliente/Estudante**
4. Preencha os dados e cadastre-se
5. Faça login com o email cadastrado
6. Explore o sistema!

## 📁 Estrutura do Projeto

```
frete-inteligente/
├── src/                          # Backend (Spring Boot)
│   └── main/
│       ├── java/                 # Código Java
│       │   └── frete_inteligente/
│       │       ├── controller/   # Controllers REST
│       │       ├── domain/       # Entidades JPA
│       │       ├── repository/   # Repositórios
│       │       └── config/       # Configurações
│       └── resources/
│           ├── application.yml   # Configuração da aplicação
│           └── db/migration/     # Migrações Flyway
│
├── transport-app/                # Frontend (Next.js)
│   ├── app/                      # Páginas Next.js
│   ├── components/               # Componentes React
│   ├── contexts/                 # Contextos (Auth, etc)
│   ├── services/                 # Serviços de API
│   ├── types/                    # Tipos TypeScript
│   └── lib/                      # Utilitários
│
├── docker-compose.yml            # Docker Compose (MySQL)
├── pom.xml                       # Configuração Maven
└── README.md                     # Este arquivo
```

## 📡 API Endpoints

### Autenticação
- `POST /api/auth/login` - Login de usuário

### Usuários
- `GET /api/usuarios` - Listar usuários
- `POST /api/usuarios` - Criar usuário
- `GET /api/usuarios/{id}` - Buscar usuário
- `PUT /api/usuarios/{id}` - Atualizar usuário
- `DELETE /api/usuarios/{id}` - Deletar usuário

### Postagens
- `GET /api/postagens` - Listar postagens
- `POST /api/postagens` - Criar postagem
- `GET /api/postagens/{id}` - Buscar postagem
- `PUT /api/postagens/{id}` - Atualizar postagem
- `DELETE /api/postagens/{id}` - Deletar postagem

### Viagens
- `GET /api/viagens` - Listar viagens
- `POST /api/viagens` - Criar viagem
- `GET /api/viagens/status/{status}` - Buscar por status

### Check-ins
- `GET /api/checkins` - Listar check-ins
- `POST /api/checkins` - Criar check-in

**📚 Documentação completa:** Veja `DOCUMENTACAO-TECNICA.md`

## 🔧 Configuração

### Backend - application.yml
```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3307/frete_inteligente
    username: root
    password: root
  jpa:
    hibernate:
      ddl-auto: validate
server:
  port: 8080
```

### Frontend - .env.local
```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api
```

## 🐛 Troubleshooting

### Backend não inicia
- ✅ Verifique se o MySQL está rodando na porta 3307
- ✅ Confirme as credenciais no `application.yml`
- ✅ Certifique-se de que o Java 21 está instalado

### Frontend não conecta
- ✅ Verifique se o backend está rodando
- ✅ Confirme o `.env.local` está correto
- ✅ Verifique erros de CORS no console

## 📈 Roadmap

- [ ] Sistema de inscrição em viagens
- [ ] Integração com gateway de pagamento
- [ ] Notificações em tempo real
- [ ] Dashboard administrativo
- [ ] Integração com mapas
- [ ] Sistema de avaliações
- [ ] Chat entre usuários

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é um MVP educacional.

## 👥 Autores

Equipe Frete Inteligente

---

**Versão:** 2.0.0  
**Última Atualização:** Outubro 2025

Para mais detalhes técnicos, consulte a [Documentação Técnica](DOCUMENTACAO-TECNICA.md).
