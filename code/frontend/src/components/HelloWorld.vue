<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/erapnofondo.png')" class="my-3" contain height="200"></v-img>
        <v-btn
          v-scroll="onScroll"
          v-show="fab"
          fab
          dark
          fixed
          bottom
          right
          color="#636363"
          @click="toTop"
        >
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </v-flex>

      <v-flex mb-4>
        <!--<h1 class="display-2 font-weight-bold mb-3">ERAP</h1>-->
        <v-btn @click="can" color="#636363" dark>Mostrar canciones</v-btn>
        <v-btn @click="alb" color="#636363" dark>Mostrar álbumes</v-btn>
        <v-btn @click="art" color="#636363" dark>Mostrar artistas</v-btn>
        <v-btn @click="tulbi" color="#636363" dark>Recomendación</v-btn>
      </v-flex>

      <v-card class="mx-auto" v-if="tultul">
        <v-card-title>¿Cómo te sientes?</v-card-title>
        <v-card-text>
          <v-row justify="space-around">
            <v-radio-group v-model="row" row>
              <v-radio label="Enfadado" value="Enfado"></v-radio>
              <v-radio label="Reivindicativo" value="Reivindicacion"></v-radio>
              <v-radio label="Melancólico" value="Melancolia"></v-radio>
              <v-radio label="Pesimista" value="Pesimismo"></v-radio>
              <v-radio label="Optimista" value="Optimismo"></v-radio>
              <v-radio label="Relajado" value="Chill"></v-radio>
              <v-radio label="Juguetón" value="Vacile"></v-radio>
            </v-radio-group>
          </v-row>
          <v-btn @click="real" color="#636363" dark>Recomendación aleatoria</v-btn>
          <v-btn @click="reco" color="#636363" dark>Añadir a la lista</v-btn>
          <v-btn @click="limpiar" color="#636363" dark>Limpiar</v-btn>
        </v-card-text>
      </v-card>

      <v-content v-if="this.buti1">
        <v-container grid-list-md text-xs-center fluid pa-12>
          <v-text-field label="Canción" v-model="search" v-on:keyup.enter="buscar()" single-line></v-text-field>
          <v-layout row wrap fill-height fill-width justify-center>
            <v-flex v-for="(item, index) in array" v-bind:key="index">
              <v-card
                elevation="18"
                style="background: #3A1C71;
    background: -webkit-linear-gradient(to bottom right, #636363, #808080, #939393);
    background: linear-gradient(to bottom right,  #636363, #808080, #939393);"
                dark
              >
                <v-card-title>{{item.name}}</v-card-title>
                <v-card-subtitle>
                  Mood: {{item.mood}}
                  <br />
                  Año: {{item.released}}
                  <br />
                  Duración: {{item.duration}}
                  <br />
                  Número de pista: {{item.trackNumber}}
                  <br />
                  Album: {{item.album}}
                  <br />
                  Grupo: {{item.group}}
                </v-card-subtitle>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>

      <v-content v-if="this.buti5">
        <v-container grid-list-md text-xs-center fluid pa-12>
          <v-layout row wrap fill-height fill-width justify-center>
            <v-flex v-for="(item, index) in array" v-bind:key="index">
              <v-card
                elevation="18"
                style="background: #3A1C71;
    background: -webkit-linear-gradient(to bottom right, #636363, #808080, #939393);
    background: linear-gradient(to bottom right,  #636363, #808080, #939393);"
                dark
                min-width="200"
              >
                <v-card-title>{{item.name}}</v-card-title>
                <v-card-subtitle>
                  Mood: {{item.mood}}
                  <br />
                  Año: {{item.released}}
                  <br />
                  Duración: {{item.duration}}
                  <br />
                  Número de pista: {{item.trackNumber}}
                  <br />
                  Album: {{item.album}}
                  <br />
                  Grupo: {{item.group}}
                </v-card-subtitle>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>

      <v-content v-if="this.buti4">
        <v-container grid-list-md text-xs-center fluid pa-12>
          <v-layout row wrap fill-height fill-width justify-center>
            <v-flex v-for="(item, index) in yarra" v-bind:key="index">
              <v-card
                elevation="18"
                style="background: #3A1C71;
    background: -webkit-linear-gradient(to bottom right, #636363, #808080, #939393);
    background: linear-gradient(to bottom right,  #636363, #808080, #939393);"
                dark
                min-width="200"
              >
                <v-card-title>{{item.name}}</v-card-title>
                <v-card-subtitle>
                  Mood: {{item.mood}}
                  <br />
                  Grupo: {{item.group}}
                  <br />
                  Duración: {{item.duration}}
                  <br />
                  Número de pista: {{item.trackNumber}}
                  <br />
                  Album: {{item.album}}
                  <br />
                  Año: {{item.released}}
                </v-card-subtitle>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>

      <v-content v-if="this.buti2">
        <v-container grid-list-md text-xs-center fluid pa-12>
          <v-layout row wrap fill-height fill-width justify-center>
            <v-flex v-for="(item, index) in array" v-bind:key="index">
              <v-card
                elevation="18"
                style="background: #3A1C71;
    background: -webkit-linear-gradient(to bottom right, #636363, #808080, #939393);
    background: linear-gradient(to bottom right,  #636363, #808080, #939393);"
                dark
              >
                <v-card-title>{{item.name}}</v-card-title>
                <v-card-subtitle>
                  Subgénero: {{item.subgenre}}
                  <br />
                  Lugar de nacimiento: {{item.from}}
                </v-card-subtitle>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>

      <v-content v-if="this.buti3">
        <v-container grid-list-md text-xs-center fluid pa-12>
          <v-layout row wrap fill-height fill-width justify-center>
            <v-flex v-for="(item, index) in array" v-bind:key="index">
              <v-card
                elevation="18"
                style="background: #3A1C71;
    background: -webkit-linear-gradient(to bottom right, #636363, #808080, #939393);
    background: linear-gradient(to bottom right,  #636363, #808080, #939393);"
                dark
              >
                <v-card-title>{{item.name}}</v-card-title>
                <v-card-subtitle>
                  Grupo: {{item.group}}
                  <br />
                  Año: {{item.released}}
                </v-card-subtitle>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-layout>
    <v-footer
      color="#636363"
      app
      dark
    >
      <span  class="justify-center">Rodrigo Alarma Álvarez</span>
      <v-spacer></v-spacer>
      <v-btn
        href="https://twitter.com/RodrigoAlarma"
        target="_blank"
        text
      >
      <v-icon>mdi-twitter</v-icon>
      </v-btn>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    i: false,
    array: [],
    yarra: [],
    pras: "0",
    row: "Melancolia",
    buti1: false,
    buti2: false,
    buti3: false,
    buti4: false,
    buti5: false,
    tultul: false,
    fab: false,
    search: "",
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/layout/pre-defined"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  }),
  methods: {
    tulbi() {
      this.tultul = true;
      this.buti1 = false;
      this.buti2 = false;
      this.buti3 = false;
      this.buti4 = false;
      this.buti5 = false;
    },
    buscar(){
      this.array = [];
      var data = { name: this.search };
      this.$http.post("http://localhost:3000/bscr", data).then(response => {
        if (response.body.length != 0)
        this.array = response.body;
        else{
          var error = [{
            name: "No se encontró ninguna coincidencia"
          }];

          this.array = error;
        }
      });
    },
    limpiar() {
      this.array = [];
      this.yarra = [];
      this.tultul = true;
      this.buti1 = false;
      this.buti2 = false;
      this.buti3 = false;
      this.buti4 = false;
      this.buti5 = false;
    },
    reco() {
      this.buti1 = false;
      this.buti2 = false;
      this.buti3 = false;
      this.buti4 = true;
      this.buti5 = false;
      //var last = "";
      var mood = this.row;
      //if (this.yarra.length != 0){
      //  last = this.yarra[this.yarra.length - 1].group;
      //}
      this.$vuetify.goTo(window.innerHeight);
      var data = { mood: mood };
      this.$http.post("http://localhost:3000/reco", data).then(response => {
        this.yarra.push(response.body[0]);
        //alert(response.body);
      });
    },
    real() {
      //this.tultul = false;
      this.buti1 = false;
      this.buti2 = false;
      this.buti3 = false;
      this.buti4 = false;
      this.buti5 = true;
      this.$http.get("http://localhost:3000/real").then(response => {
        this.array = response.body;
        //alert(response.body);
      });
    },
    can() {
      this.tultul = false;
      this.buti1 = true;
      this.buti2 = false;
      this.buti3 = false;
      this.buti4 = false;
      this.buti5 = false;
      this.$http.get("http://localhost:3000/can").then(response => {
        this.array = response.body;
        //alert(response.body);
      });
    },
    alb() {
      this.tultul = false;
      this.buti1 = false;
      this.buti2 = false;
      this.buti3 = true;
      this.buti4 = false;
      this.buti5 = false;
      this.$http.get("http://localhost:3000/alb").then(response => {
        this.array = response.body;
        //alert(response.body);
      });
    },
    art() {
      this.tultul = false;
      this.buti1 = false;
      this.buti2 = true;
      this.buti3 = false;
      this.buti4 = false;
      this.buti5 = false;
      this.$http.get("http://localhost:3000/art").then(response => {
        this.array = response.body;
        //alert(response.body);
      });
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>
