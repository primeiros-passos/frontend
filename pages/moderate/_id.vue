<template>
  <div class="content">
    <Button icon :on-click="() => $router.go(-1)">
      <img src="@/assets/img/left-arrow.png" alt="Voltar" />
    </Button>

    <div class="title">
      <p>Comunidade</p>
      <div class="d-flex">
        <h1>{{ community.name }}</h1>
        <span>página do moderador</span>
      </div>
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

      <ModerateManageContent />
    </div>

    <CommunityAbout
      :name="community.name || ''"
      :description="community.description  || ''"
    />
  </div>
</template>

<script>
export default {
  name: 'ModeratePage',
  data() {
    return {
      community: {},
      content: {
        starter: [],
        medium: [],
        advanced: [],
      },
    }
  },
  created() {
    if (!this.$route.params.id) this.$router.push('/')
    this.getCommunityInformation()
    this.getCommunityContent()
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
  },
}
</script>

<style lang="scss" scoped>
.content {
  padding: 2rem 1.25rem;

  .title {
    margin: 2rem 0;

    span {
      background-color: $primary;
      color: $white;
      font-weight: 400;
      font-size: 1rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
      margin-left: 1rem;
    }
  }

  .main {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;

    .lists {
      width: 48%;
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

@media only screen and (max-width: 850px) {
  .content {
    .main {
      .lists {
        width: 100%;
      }
    }
  }
}
</style>
