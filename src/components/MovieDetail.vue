<template>
  <div>
    <div v-if="loading">
        <h1>Loading...</h1>
    </div>
    <div v-else>
        <h1>{{ movie.title }} {{ movie.year }}</h1>
        <img v-bind:src="movie.medium_cover_image">
        <ul>
            <li v-for="gen in movie.genres" v-bind:key="gen">{{ gen }}</li>
        </ul>
        <p>Like Count : {{ movie.like_count }} / rating : {{ movie.rating }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    data: function () {
        return {
            movie: {},
            loading: true
        }
    },
    mounted: function() {
        console.log(this.$route.params.id);
        this.getMovie();
    },
    methods: {
        getMovie: async function () {
            let url = `https://yts.mx/api/v2/movie_details.json?movie_id=${this.$route.params.id}`;
            let response = await axios.get(url);
            this.movie = response.data.data.movie;
            console.log(this.movie);
            this.loading = false;
        }
    }
}
</script>

<style>

</style>