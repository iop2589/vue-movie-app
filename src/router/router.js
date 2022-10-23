import Vue from 'vue';
import Router from 'vue-router';
import MovieList from "../components/MovieList";
import MovieDetail from "../components/MovieDetail";

Vue.use(Router);


const routes = [    
  {
    path:"/",
    redirect:"main"
  },
  {      
    path: '/main',      
    component: MovieList,  
    name: "main"
  },
  {
    path: '/detail/:id',
    component: MovieDetail,
    name: "movieDetail"
  }
]; 

const router = new Router({
  mode: "history",
  routes: routes

});

export default router;