# SPEC-KIT — Portfolio em Next.js inspirado na imagem

## 1. Objetivo

Criar um portfólio pessoal em **Next.js + React + TypeScript**, inspirado visualmente na imagem de referência.

O site deve ter:

- tema escuro;
- layout moderno e minimalista;
- navegação superior;
- seção inicial com apresentação;
- seção de serviços/skills em cards;
- formulário de contato;
- estrutura modular e fácil de alterar.

O projeto precisa ser organizado para que textos, cores, links e cards possam ser modificados de forma simples, sem precisar mexer em toda a página.

---

## 2. Stack

Usar obrigatoriamente:

- Next.js
- React
- TypeScript

Preferencialmente usar:

- Tailwind CSS
- lucide-react para ícones

Caso o projeto já esteja criado, adaptar a implementação à estrutura atual, sem reescrever tudo desnecessariamente.

---

## 3. Estrutura sugerida

Criar ou adaptar para uma estrutura parecida com esta:

src/
  app/
    layout.tsx
    page.tsx
    globals.css

  components/
    Header.tsx
    Hero.tsx
    SectionIndicator.tsx
    ServicesSection.tsx
    ServiceCard.tsx
    ContactSection.tsx
    Container.tsx

  data/
    portfolio.ts

---

## 4. Identidade visual

Seguir a estética da imagem:

Cores sugeridas:

background: #1f2235
cardBackground: #292d42
primaryText: #ffffff
secondaryText: #8b90a8
accent: #ff4658
borderMuted: #3a3f58

A cor accent deve ser usada em:

- detalhes do logo;
- botões;
- títulos principais de seção;
- ícones;
- underline do menu;
- indicadores laterais.

---

## 5. Organização de conteúdo

Criar um arquivo central para textos e listas:

src/data/portfolio.ts

Exemplo:

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  titleLine1: "Hello, I'm",
  titleLine2: "a Front end Developer",
  description:
    "Fond of creating web application designs and bringing them to life using code and modern development practices.",
  buttonLabel: "Creator journey",
};

export const services = [
  {
    title: "Git Version Control",
    icon: "github",
    description:
      "Manage source code versions, collaborate with teams and maintain a reliable development workflow.",
  },
  {
    title: "App Design",
    icon: "smartphone",
    description:
      "Design clean and functional app interfaces focused on usability and user experience.",
  },
  {
    title: "Back-end Development",
    icon: "database",
    description:
      "Build APIs, services and integrations to support scalable web applications.",
  },
  {
    title: "Web Development",
    icon: "globe",
    description:
      "Create responsive, accessible and modern websites using React and Next.js.",
  },
  {
    title: "Photography",
    icon: "camera",
    description:
      "Work with visual composition and image editing to support digital projects.",
  },
  {
    title: "Freelancing",
    icon: "briefcase",
    description:
      "Deliver independent projects from planning to deployment with clear communication.",
  },
];

Regra importante:

- Não deixar textos principais fixos diretamente nos componentes.
- Textos, menus e cards devem vir do arquivo portfolio.ts.
- Assim será fácil alterar o portfólio depois.

---

## 6. Header

Criar o componente:

src/components/Header.tsx

Requisitos:

- Logo à esquerda.
- Menu à direita.
- Fundo igual ao background principal.
- Menu horizontal no desktop.
- Menu responsivo no mobile.
- Links navegando por âncora.

Logo sugerido:

amogoe

A parte final do logo pode usar a cor accent.

Exemplo visual:

amog + oe em vermelho

Itens do menu:

- Home
- Services
- About
- Skills
- Portfolio
- Contact

Comportamento:

- Ao passar o mouse, o item deve ganhar destaque em vermelho.
- O item Portfolio pode iniciar com underline vermelho, como na imagem.
- Usar scroll suave entre seções.

---

## 7. Hero Section

Criar o componente:

src/components/Hero.tsx

Conteúdo:

Título:

Hello, I'm
a Front end Developer

Descrição:

Fond of creating web application designs and bringing them to life using code and modern development practices.

Botão:

Creator journey

Layout:

- Alinhar conteúdo à esquerda.
- Usar bastante espaçamento vertical.
- Título grande, branco e com boa legibilidade.
- Descrição menor, em cinza.
- Botão vermelho com texto branco.
- Seção deve ocupar boa parte da primeira tela.

Sugestão de classes Tailwind:

min-h-[80vh]
flex
items-center
text-left

Título:

text-5xl
md:text-7xl
font-semibold
leading-tight

Descrição:

text-muted
max-w-md
mt-6

Botão:

bg-accent
text-white
px-10
py-4
mt-8

---

## 8. Indicador lateral

Criar o componente:

src/components/SectionIndicator.tsx

A imagem possui um indicador lateral com:

- linha vertical fina;
- três bolinhas;
- uma bolinha preenchida indicando a seção atual.

Criar componente reutilizável:

type SectionIndicatorProps = {
  activeIndex: number;
  total?: number;
};

Exemplo de uso:

<SectionIndicator activeIndex={0} />

Requisitos visuais:

- Linha vertical discreta;
- círculos com borda vermelha;
- círculo ativo preenchido em vermelho;
- aparecer no lado direito da seção em desktop;
- ocultar em mobile.

Regra:

- Não precisa implementar lógica automática de scroll agora.
- Pode receber activeIndex manualmente por props.

---

## 9. Services / Skill-Set

Criar o componente:

src/components/ServicesSection.tsx

Conteúdo da seção:

Texto pequeno:

Services

Título principal:

Skill-Set

O título Skill-Set deve ser vermelho.

Abaixo do título, colocar uma linha horizontal vermelha curta.

Layout:

- Grid de cards.
- 3 colunas no desktop.
- 2 colunas no tablet.
- 1 coluna no mobile.

Sugestão:

grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8

Cards:

Criar componente:

src/components/ServiceCard.tsx

Cada card deve receber:

type ServiceCardProps = {
  title: string;
  icon: string;
  description: string;
};

Cada card deve ter:

- fundo cardBackground;
- ícone vermelho;
- título branco;
- descrição em cinza claro;
- padding interno;
- altura mínima consistente;
- hover simples com leve destaque.

Sugestão visual:

bg-card
p-8
min-h-[220px]
shadow
hover:-translate-y-1
transition

Ícones:

Usar lucide-react.

Mapear os nomes vindos do portfolio.ts:

github -> Github
smartphone -> Smartphone
database -> Database
globe -> Globe
camera -> Camera
briefcase -> Briefcase

Se vier um ícone desconhecido, usar um ícone padrão.

---

## 10. Contact Section

Criar o componente:

src/components/ContactSection.tsx

Título:

Connect with me

Visual:

- Título vermelho.
- Campo de email.
- Campo de mensagem.
- Botão vermelho alinhado à direita ou centralizado conforme o layout.
- Fundo dos inputs próximo do cardBackground.
- Sem bordas chamativas.

Campos:

- Email
- Message

Botão:

Stay Connected ▶

Comportamento inicial:

- O formulário deve usar estado local.
- Ao enviar, prevenir reload da página.
- Montar um payload com email e message.
- Por enquanto, exibir no console.
- Deixar fácil trocar depois por uma chamada HTTP.

Exemplo esperado:

const handleSubmit = (event: FormEvent) => {
  event.preventDefault();

  const payload = {
    email,
    message,
  };

  console.log(payload);
};

Deixar preparado para futura integração:

await fetch("/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
});

Não implementar backend agora, a menos que seja solicitado depois.

---

## 11. Container

Criar componente:

src/components/Container.tsx

Objetivo:

Centralizar o conteúdo e manter espaçamento padrão.

Exemplo:

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`max-w-5xl mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
}

Usar esse componente nas seções principais.

---

## 12. Página principal

No arquivo:

src/app/page.tsx

Montar a página usando os componentes.

Exemplo:

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main>
      <Header />

      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}

Regra:

- Não colocar todo o HTML direto dentro de page.tsx.
- page.tsx deve apenas organizar as seções.
- A lógica e visual devem ficar nos componentes.

---

## 13. Estilo global

No arquivo:

src/app/globals.css

Adicionar:

html {
  scroll-behavior: smooth;
}

body {
  background: #1f2235;
  color: #ffffff;
}

* {
  box-sizing: border-box;
}

Caso use Tailwind, configurar as cores no tailwind.config.ts:

theme: {
  extend: {
    colors: {
      background: "#1f2235",
      card: "#292d42",
      accent: "#ff4658",
      muted: "#8b90a8",
      borderMuted: "#3a3f58",
    },
  },
}

---

## 14. Responsividade

Desktop:

- Header horizontal.
- Hero com título grande.
- Cards em 3 colunas.
- Indicador lateral visível.

Tablet:

- Cards em 2 colunas.
- Reduzir um pouco o tamanho do título.

Mobile:

- Cards em 1 coluna.
- Header adaptado.
- Título do hero menor.
- Formulário ocupando 100% da largura.
- Indicador lateral oculto.

---

## 15. Acessibilidade

Garantir:

- Links com href válido.
- Botões com texto claro.
- Inputs com label ou aria-label.
- Contraste adequado.
- Navegação por teclado possível.
- Não usar apenas cor para indicar informação importante.

---

## 16. Critérios de aceite

A entrega será considerada concluída quando:

- O projeto rodar com `npm run dev`.
- A página inicial carregar sem erro.
- O layout estiver visualmente próximo da imagem de referência.
- O header aparecer no topo com logo e menu.
- O hero exibir título, descrição e botão.
- A seção Skill-Set exibir 6 cards.
- Os cards forem renderizados a partir do arquivo `portfolio.ts`.
- O formulário de contato tiver email, mensagem e botão.
- O formulário fizer `console.log` do payload ao enviar.
- O layout estiver responsivo.
- Os componentes estiverem separados.
- O arquivo `page.tsx` estiver limpo e apenas organizando as seções.

---

## 17. O que não fazer agora

Não implementar neste primeiro momento:

- autenticação;
- backend de envio de email;
- banco de dados;
- animações complexas;
- painel administrativo;
- integração com CMS;
- deploy;
- tracking;
- lógica automática de seção ativa no scroll.

Esses pontos devem ficar para etapas futuras.

---

## 18. Sugestão de implementação por etapas

Etapa 1:

- Configurar cores globais.
- Criar Header.
- Criar Container.
- Criar arquivo portfolio.ts.

Etapa 2:

- Criar Hero.
- Criar botão principal.
- Ajustar espaçamento inicial.

Etapa 3:

- Criar ServicesSection.
- Criar ServiceCard.
- Renderizar cards via map.

Etapa 4:

- Criar SectionIndicator.
- Aplicar nas seções principais.

Etapa 5:

- Criar ContactSection.
- Implementar estado local.
- Implementar submit com console.log.

Etapa 6:

- Ajustar responsividade.
- Revisar espaçamentos.
- Revisar hover.
- Testar em desktop e mobile.

---

## 19. Observação importante para manutenção

Sempre que for necessário alterar textos, menus ou cards, preferir modificar o arquivo:

src/data/portfolio.ts

Evitar alterar os componentes apenas para trocar conteúdo.

Os componentes devem ser genéricos e reutilizáveis.