import Vue from "vue";
import Router from "vue-router";
import Hello from "../components/Hello";
import Movies from "../components/Movies";
import Trailers from "../components/Trailer";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Movies",
      component: Movies
    },
    {
      path: "/trailer/:id",
      name: "Trailers",
      component: Trailers,
      props:true
    }
  ]
});
