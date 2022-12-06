<template>
  <div class="content">
    <Button icon :on-click="() => $router.push('/')">
      <img src="@/assets/img/left-arrow.png" alt="Voltar" />
    </Button>

    <h1>Dados do usuário</h1>
    <div class="d-flex flex-wrap">
      <div class="input">
        <label>Nome:</label>
        <Input v-model="name" placeholder="Nome do usuário" />
      </div>
      <div class="input">
        <label>E-mail:</label>
        <Input
          v-model="user.email"
          type="email"
          placeholder="E-mail"
          disabled
        />
      </div>
    </div>

    <h2>Mudar senha</h2>
    <div class="d-flex flex-wrap">
      <div class="input">
        <label>Nova senha:</label>
        <Input v-model="newPassword" type="password" placeholder="Nova senha" />
      </div>
      <div class="input">
        <label>Confirme a senha:</label>
        <Input
          v-model="confirmPassword"
          type="password"
          placeholder="Confirme a senha"
        />
      </div>
    </div>

    <div v-if="error" class="error">
      <p>{{ error }}</p>
    </div>

    <div class="btn">
      <Button secondary :on-click="updateProfile">Salvar alterações</Button>
    </div>

    <div class="divisor"></div>

    <h2>Minhas comunidades</h2>
    <div
      v-if="communities.length > 0"
      class="d-flex flex-wrap align-stretch justify-between"
    >
      <CommunityCard
        v-for="community in communities"
        :key="community.title"
        :title="community.name"
        :desc="community.description"
        :color="community.category.color"
        :content-count="community._count.content"
        :route="$router.resolve(`moderate/${community.id}`).href"
      />
      <div v-if="communities.length % 3 !== 0" class="placeholder"></div>
    </div>
    <div v-else class="no-content">
      <h3>Nenhuma comunidade a mostar...</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ProfilePage',
  data() {
    return {
      communities: [],
      name: '',
      newPassword: '',
      confirmPassword: '',
      error: '',
    }
  },
  computed: {
    ...mapGetters(['user']),
  },
  mounted() {
    this.getCommunities()
    setTimeout(() => {
      this.name = this.user.name
    }, 200)
  },
  methods: {
    ...mapMutations(['UPDATE_USER']),
    getCommunities() {
      setTimeout(() => {
        if (process.client) {
          const token = localStorage.getItem('token')
          this.$axios
            .get(`users/${this.user.id}/communities`, {
              headers: { Authorization: token },
            })
            .then((res) => {
              this.communities = res.data
            })
        }
      }, 200)
    },
    updateProfile() {
      this.error = ''
      const data = {}

      if (!this.name) {
        this.error = 'Informe o nome'
      }
      data.name = this.name

      if (this.newPassword) {
        if (this.newPassword !== this.confirmPassword) {
          this.error = 'As senhas não coincidem'
        }
        data.password = this.newPassword
      }

      const token = localStorage.getItem('token')
      this.$axios
        .patch(
          `users/${this.user.id}`,
          data,
          { headers: { Authorization: token } }
        )
        .then((res) => {
          this.UPDATE_USER(res.data)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  padding: 2rem 1.25rem;

  h1 {
    margin: 2rem 0;
  }

  h2 {
    margin: 3rem 0 1rem;
  }

  .error {
    margin-top: 2rem;

    p {
      color: $red;
    }
  }

  .input {
    margin-right: 1rem;

    label {
      margin-left: 1rem;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  .btn {
    margin-top: 3rem;
  }

  .divisor {
    margin-top: 3rem;
    border-bottom: 1px solid $tertiary-hyper-light;
  }

  .no-content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0 5rem;
  }

  .placeholder {
    width: 23.125rem;
  }
}

@media only screen and (max-width: 1200px) {
  .content {
    .placeholder {
      width: 48%;
    }
  }
}

@media only screen and (max-width: 625px) {
  .content {
    .placeholder {
      width: 100%;
    }
  }
}
</style>
