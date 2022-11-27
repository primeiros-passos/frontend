<template>
  <div class="content">
    <Button icon :on-click="() => $router.push('/')">
      <img src="@/assets/img/left-arrow.png" alt="Voltar" />
    </Button>
    <div class="title">
      <p>Comunidade</p>
      <h1>Javascirpt</h1>
    </div>
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
            type: 'video'
          },
          {
            id: '2',
            description: 'Conteúdo 2',
            link: 'https://linkdoconteudo.com',
            value: 0,
            type: 'archive'
          },
          {
            id: '3',
            description: 'Conteúdo 3',
            link: 'https://linkdoconteudo.com',
            value: 100,
            type: 'course'
          }
        ],
        medium: [
          {
            id: '1',
            description: 'Conteúdo 1',
            link: 'https://linkdoconteudo.com',
            value: 0,
            type: 'video'
          },
          {
            id: '2',
            description: 'Conteúdo 2',
            link: 'https://linkdoconteudo.com',
            value: 0,
            type: 'archive'
          },
          {
            id: '3',
            description: 'Conteúdo 3',
            link: 'https://linkdoconteudo.com',
            value: 100,
            type: 'course'
          }
        ],
        advanced: [
          {
            id: '1',
            description: 'Conteúdo 1',
            link: 'https://linkdoconteudo.com',
            value: 0,
            type: 'video'
          },
          {
            id: '2',
            description: 'Conteúdo 2',
            link: 'https://linkdoconteudo.com',
            value: 0,
            type: 'archive'
          },
          {
            id: '3',
            description: 'Conteúdo 3',
            link: 'https://linkdoconteudo.com',
            value: 100,
            type: 'course'
          }
        ]
      }
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

  .lists {
    width: 60%;
  }
}

@media only screen and (max-width: 625px) {
  .content {
    .lists {
      width: 100%;
    }
  }
}
</style>
