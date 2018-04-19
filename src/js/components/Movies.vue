<template>
   <div id="movies">
       <h1> Movie Battle</h1>
       <h2>Star Wars VS Marvel Universe</h2>
       <div class="row">
           <div class="small-12 medium-10 medium-offset-1 movie-filters">
               <p class="filter-label"><strong>Filter By:</strong></p>
               <a href="#" class="button active small filters">release date</a>
               <a href="#" class="button small filters">alphabetical</a>
               <a href="#" class="button small filters">Star Wars</a>
               <a href="#" class="button small filters">Marvel</a>
           </div>
       </div>
        <ul class="row">
            <li
                v-for="(movie, index) in movies"
                :class="[{'end': index === (movies.length -1)},'small-12','medium-3', 'columns', 'movie-cell',]"
                :key="index" >
               <p class="mTitle"><strong>{{movie.title}}</strong></p>
               <router-link :to="{name:'Trailers', params:{id:index, movieID:movie.trailerID, movieTitle:movie.title}}">
                  <img :src="movie.poster" alt="" class="">
               </router-link>
               <p class="mRelease"><em>{{movie.released}}</em></p>
               <router-link :to="{name:'Trailers', params:{id:index, movieID:movie.trailerID, movieTitle:movie.title}}" class="button">View Trailer</router-link>

            </li>
        </ul>
   </div>
</template>

<script>
    import axios from 'axios';
    import router from '../router';
    export default {
        name:'Movies',
        data(){
            return{
                movies:[],
            }
        },
        beforeMount(){
            axios.get('//api.myjson.com/bins/iapkn')
            .then(r=>{
                this.movies = r.data;
            })
        },
    }

</script>

<style>
    ul{
        list-style-type:none;
    }
    .movie-filters{
        margin-top:20px;
        margin-bottom:20px;
    }
    .filter-label{
        margin-bottom:0px;
    }
    .filters{
        text-transform: capitalize;
    }
    .movie-filters a{
        background: #21B8B3;
    }
    .movie-filters a.active{
        background: #b7f4ec;
        color: darkslategrey;
    }
    .movie-cell{
        margin-bottom: 30px;
    }
    .movie-cell .button{
        background: #21B8B3;
    }
    .movie-cell p{
        margin-bottom: 5px;
    }
    .movie-cell .mTitle{
        font-size: 0.8em;
    }
    .movie-cell .mRelease{
        font-size: 0.6em;
    }
    .movie-cell img{
        max-height: 200px;
    }
    @media screen and (max-width: 39.9375em) {
        .movie-cell img{
           max-height: 400px;
        }
        .filter-label{
            text-align: left;
            padding-left: 1em;
        }
    }
</style>
