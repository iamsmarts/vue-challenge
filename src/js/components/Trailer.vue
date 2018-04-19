<template>
    <div class="row expanded">
        <div class="small-12 trailer-wrap">
            <p class="b2listings" v-on:click="backtoListing">Back to Listing</p>
            <h2>{{this.movieTitle}}</h2>
            <div class="responsive-embed">
                <iframe width="560" height="315" :src='"https://www.youtube.com/embed/"+ this.movieID' frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>
<script>
    import router from '../router';
    export default {
        name:'Trailers',
        props:["movieID","movieTitle"],
        methods:{
            backtoListing:function(){
                router.go(-1)
            }
        }
    }

</script>
<style>
h2{
    text-align: left;
    font-size: 1.5em;
    font-weight: bold;
    padding-left: 10px;
}
.b2listings{
    font-style: italic;
    font-weight: 100;
    color:#21B8B3;
    text-align: left;
    padding-left: 10px;
}

</style>
