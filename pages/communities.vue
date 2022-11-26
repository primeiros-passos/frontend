<template>
  <div class="content">
    <Button icon :on-click="() => $router.push('/')">
      <img src="@/assets/img/left-arrow.png" alt="Voltar" />
    </Button>
    <h1>Comunidades da plataforma</h1>
    <CommunitiesActionRow />
    <div class="d-flex flex-wrap align-stretch justify-between">
      <CommunityCard
        v-for="community in communities"
        :key="community.title"
        :title="community.title"
        :desc="community.desc"
        :color="community.color"
        :content-count="community.contentCount"
        :route="community.route"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommunitiesPage',
  data() {
    return {
      communities: [
        {
          title: 'Javascript',
          desc: 'Aprenda as tecnologias e fundamentos para se tornar um desenvolvedor frontend Aprenda as tecnologias e fundamentos para se tornar um frontend.',
          color: '#D7EEE3',
          contentCount: 123,
          route: '/',
        },
        {
          title: 'React',
          desc: 'Aprenda as tecnologias e fundamentos para se tornar um desenvolvedor frontend Aprenda as tecnologias e fundamentos para se tornar um frontend.',
          color: '#C4F7F3',
          contentCount: 123,
          route: '/',
        },
        {
          title: 'UX Design',
          desc: 'Aprenda as tecnologias e fundamentos para se tornar um desenvolvedor frontend Aprenda as tecnologias e fundamentos para se tornar um frontend.',
          color: '#B37BFB',
          contentCount: 123,
          route: '/',
        },
        {
          title: 'Banco de Dados',
          desc: 'Aprenda as tecnologias e fundamentos para se tornar um desenvolvedor frontend Aprenda as tecnologias e fundamentos para se tornar um frontend.',
          color: '#FFF383',
          contentCount: 123,
          route: '/',
        },
        {
          title: 'C#',
          desc: 'Aprenda as tecnologias e fundamentos para se tornar um desenvolvedor frontend Aprenda as tecnologias e fundamentos para se tornar um frontend.',
          color: '#FFAA98',
          contentCount: 123,
          route: '/',
        },
        {
          title: 'Python',
          desc: 'Aprenda as tecnologias e fundamentos para se tornar um desenvolvedor frontend Aprenda as tecnologias e fundamentos para se tornar um frontend.',
          color: '#A1AAEE',
          contentCount: 123,
          route: '/',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  padding: 2rem 1.25rem;

  h1 {
    margin: 2rem 0;
  }
}
</style>
