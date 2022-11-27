<template>
  <div class="content">
    <h1>Principais comunidades</h1>
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
  name: 'HomePageCommunities',
  data() {
    return {
      communities: [
        {
          title: 'Javascript',
          desc: 'Aprenda as tecnologias e fundamentos para se tornar um desenvolvedor frontend Aprenda as tecnologias e fundamentos para se tornar um frontend.',
          color: '#D7EEE3',
          contentCount: 123,
          route: 'community',
        },
        {
          title: 'React',
          desc: 'Aprenda as tecnologias e fundamentos para se tornar um desenvolvedor frontend Aprenda as tecnologias e fundamentos para se tornar um frontend.',
          color: '#C4F7F3',
          contentCount: 123,
          route: 'community',
        },
        {
          title: 'UX Design',
          desc: 'Aprenda as tecnologias e fundamentos para se tornar um desenvolvedor frontend Aprenda as tecnologias e fundamentos para se tornar um frontend.',
          color: '#B37BFB',
          contentCount: 123,
          route: 'community',
        },
        {
          title: 'Banco de Dados',
          desc: 'Aprenda as tecnologias e fundamentos para se tornar um desenvolvedor frontend Aprenda as tecnologias e fundamentos para se tornar um frontend.',
          color: '#FFF383',
          contentCount: 123,
          route: 'community',
        },
        {
          title: 'C#',
          desc: 'Aprenda as tecnologias e fundamentos para se tornar um desenvolvedor frontend Aprenda as tecnologias e fundamentos para se tornar um frontend.',
          color: '#FFAA98',
          contentCount: 123,
          route: 'community',
        },
        {
          title: 'Python',
          desc: 'Aprenda as tecnologias e fundamentos para se tornar um desenvolvedor frontend Aprenda as tecnologias e fundamentos para se tornar um frontend.',
          color: '#A1AAEE',
          contentCount: 123,
          route: 'community',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  h1 {
    margin-bottom: 2.5rem;
  }
}
</style>
