<template>
  <b-row>
    <b-col>
      <b-row>
        <b-col class="pt-4">
          <h3>{{ title }}</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <ul class="nav flex-column">
            <li class="nav-item" v-for="(link, index) in links" :key="index">
              <a class="nav-link" :href=link.url>{{link.title}}</a>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>
<script>
export default {
  props: {
    title: '',
    links: []
  }
}
</script>