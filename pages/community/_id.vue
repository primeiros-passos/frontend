<template>
  <div class="content">
    <Button icon :on-click="() => $router.push('/')">
      <img src="@/assets/img/left-arrow.png" alt="Voltar" />
    </Button>
    <div class="title">
      <p>Comunidade</p>
      <h1>Javascript</h1>
    </div>
    <div class="main">
      <div class="lists">
        <ContentList
          title="Iniciante"
          description="
          Seção perfeita para quem está começando na área que sabe possuem
          pouco ou nenhum conhecimento sobre o assunto.
        "
          level="starter"
          :contents="content.starter"
        />
        <ContentList
          title="Intermediário"
          description="
          Seção para quem já está familiarizado com o assunto, entende a
          maioria dos termos técnicos e já sabe gerar coisas interessantes
          com o assunto abordado.
        "
          level="medium"
          :contents="content.medium"
        />
        <ContentList
          title="Avançado"
          description="
          Seção para quem já conhecimento avançado na área e já trabalhou com
          o assunto abordado, perfeito para se manter atualizado e aperfeiçoar
          as habilidades.
        "
          level="advanced"
          :contents="content.advanced"
        />
      </div>
      <div class="related">
        <p>Comunidades relacionadas</p>
        <a
          v-for="community in relatedCommunities"
          :key="community.id"
          :href="community.link"
          :style="{ backgroundColor: community.color }"
        >
          {{ community.name }}
        </a>
      </div>
    </div>
    <div class="w-100">
      <div class="about">
        <p class="header">Sobre Javascript</p>
        <p>
          JavaScript é uma linguagem de programação que permite a você
          implementar itens complexos em páginas web — toda vez que uma página
          da web faz mais do que simplesmente mostrar a você informação estática
          — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas
          interativos ou gráficos 2D/3D animados, etc. — você pode apostar que o
          JavaScript provavelmente está envolvido. É a terceira camada do bolo
          das tecnologias padrões da web, duas das quais (HTML e CSS) nós
          falamos com muito mais detalhes em outras partes da Área de
          Aprendizado.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommunityPage',
  data() {
    return {
      content: {
        starter: [
          {
            id: '1',
            description: 'Conteúdo 1',
            link: 'https://linkdoconteudo.com',
            value: 0,
            type: 'video',
          },
          {
            id: '2',
            description: 'Conteúdo 2',
            link: 'https://linkdoconteudo.com',
            value: 0,
            type: 'archive',
          },
          {
            id: '3',
            description: 'Conteúdo 3',
            link: 'https://linkdoconteudo.com',
            value: 100,
            type: 'course',
          },
        ],
        medium: [
          {
            id: '1',
            description: 'Conteúdo 1',
            link: 'https://linkdoconteudo.com',
            value: 0,
            type: 'video',
          },
          {
            id: '2',
            description: 'Conteúdo 2',
            link: 'https://linkdoconteudo.com',
            value: 0,
            type: 'archive',
          },
          {
            id: '3',
            description: 'Conteúdo 3',
            link: 'https://linkdoconteudo.com',
            value: 100,
            type: 'course',
          },
        ],
        advanced: [
          {
            id: '1',
            description: 'Conteúdo 1',
            link: 'https://linkdoconteudo.com',
            value: 0,
            type: 'video',
          },
          {
            id: '2',
            description: 'Conteúdo 2',
            link: 'https://linkdoconteudo.com',
            value: 0,
            type: 'archive',
          },
          {
            id: '3',
            description: 'Conteúdo 3',
            link: 'https://linkdoconteudo.com',
            value: 100,
            type: 'course',
          },
        ],
      },
      relatedCommunities: [
        {
          id: '1',
          name: 'React Native',
          color: '#D7EEE3',
          link: 'https://link.com',
        },
        {
          id: '2',
          name: 'React',
          color: '#C4F6F3',
          link: 'https://link.com',
        },
        {
          id: '3',
          name: 'Java',
          color: '#FFAA98',
          link: 'https://link.com',
        },
        {
          id: '4',
          name: 'UX Design',
          color: '#B37BFB',
          link: 'https://link.com',
        },
        {
          id: '5',
          name: 'C#',
          color: '#FEF7BD',
          link: 'https://link.com',
        },
        {
          id: '6',
          name: 'C++',
          color: '#A1AAEE',
          link: 'https://link.com',
        },
        {
          id: '7',
          name: 'BD',
          color: '#FB7B7B',
          link: 'https://link.com',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  padding: 2rem 1.25rem;

  .title {
    margin: 2rem 0;
  }

  .main {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;

    .lists {
      width: 60%;
    }

    .related {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      background-color: $tertiary-hyper-light;
      border-radius: 0.625rem;
      padding: 1.5rem 0.625rem;
      margin: 2.813rem 0;
      width: 35%;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      p {
        color: $primary;
        font-size: 1.5rem;
        text-align: center;
        margin-bottom: 2rem;
      }

      a {
        font-weight: bold;
        font-size: 0.875rem;
        text-decoration: none;
        text-align: center;
        padding: 0.625rem 0;
        width: 100%;
        border-radius: 0.625rem;
        margin-bottom: 1rem;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  .about {
    padding: 2rem 1.5rem;
    background-color: $white;
    border-radius: 1.25rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .header {
      font-size: 2rem;
      font-weight: 700;
      font-family: 'Sora', sans-serif;
      margin-bottom: 1rem;
    }
  }
}

@media only screen and (max-width: 700px) {
  .content {
    .main {
      .lists {
        width: 100%;
      }

      .related {
        width: 100%;
        margin-top: 0;
      }
    }
  }
}
</style>
