<template>
  <div class="content">
    <Button icon :on-click="() => $router.go(-1)">
      <img src="@/assets/img/left-arrow.png" alt="Voltar" />
    </Button>

    <div class="title">
      <p>Comunidade</p>
      <h1>{{ community.name }}</h1>
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
      <CommunityRelated
        v-if="relatedCommunities.length > 0"
        :related-communities="relatedCommunities"
      />
    </div>

    <CommunityAbout
      :name="community.name || ''"
      :description="community.description || ''"
    />

    <div class="w-100">
      <div class="send-content">
        <p class="header">Contribua com a comunidade</p>
        <p>
          Ajude a pagina trazendo novos conteúdos para a comunidade, clicando no
          botão “Enviar conteúdo” abaixo. O conteúdo obrigatoriamente deve ser
          sobre a comunidade em questão, podendo se enviar: vídeo aulas, Blogs,
          tutoriais e afins. O conteúdo sera averiguado e posteriomente postado
          na comunidade dentro de um dos cards de acordo com sua dificuldade de
          aprendizado. Nós da plataforma e outros usuários agradecemos por sua
          ajuda!
        </p>
        <Button secondary :on-click="() => (modalOpen = !modalOpen)">
          Enviar conteúdo
        </Button>
        <Modal
          title="Enviar conteúdo"
          :open="modalOpen"
          @closeModal="closeModal"
        >
          <CommunityContentModal @closeModal="closeModal" />
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommunityPage',
  data() {
    return {
      community: {},
      content: {
        starter: [],
        medium: [],
        advanced: [],
      },
      relatedCommunities: [],
      modalOpen: false,
    }
  },
  created() {
    if (!this.$route.params.id) this.$router.push('/')
    this.getCommunityInformation()
    this.getCommunityContent()
    this.getRelatedCommunities()
  },
  methods: {
    getCommunityInformation() {
      this.$axios.get(`/communities/${this.$route.params.id}`).then((res) => {
        this.community = res.data
      })
    },
    getCommunityContent() {
      this.$axios
        .get(`/communities/${this.$route.params.id}/contents`)
        .then((res) => {
          this.content = res.data
        })
    },
    getRelatedCommunities() {
      this.$axios
        .get(`/communities/${this.$route.params.id}/related`)
        .then((res) => {
          this.relatedCommunities = res.data
        })
    },
    closeModal() {
      this.modalOpen = false
    },
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
  }

  .send-content {
    padding: 2rem 1.5rem;
    background-color: $primary;
    border-radius: 1.25rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 1.5rem;

    .header {
      font-size: 2rem;
      font-weight: 700;
      font-family: 'Sora', sans-serif;
      margin-bottom: 1rem;
    }

    p {
      color: $white;
    }

    button {
      margin-top: 1rem;
    }
  }
}

@media only screen and (max-width: 700px) {
  .content {
    .main {
      .lists {
        width: 100%;
      }
    }
  }
}
</style>
