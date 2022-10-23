<template>
  <div>
    <div v-if="loading">
        <h1>Loading...</h1>
    </div>
    <div v-else>
      <ul>
          <div v-for="movie in movies" v-bind:key="movie.id">
            <img v-bind:src="movie.medium_cover_image">
            <h1 v-bind:id="movie.id" @click="movieDetail">
                {{movie.title}}
            </h1>
            <p>{{movie.summary}}</p>
          </div>
      </ul>
    </div>
   
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default {
    data: function () {
        return {
            movies: [],
            loading: true
        }
    },
    mounted: function() {
        this.getMovies();
    },
    methods: {
        getMovies: async function () {
            try {
                let url = "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year";
                let response = await axios.get(url);
                console.log(response);
                this.movies = response.data.data.movies;
                console.log(this.movies);
                this.loading = false;
            }
            catch(error) {
                console.log(error);
            }
        },
        movieDetail: function (event) {
            this.$router.push(
                {
                    name:"movieDetail",
                    params: {
                        id: event.target.id
                    }
                }
            );
        }
    }
}
</script>

<style>

</style>