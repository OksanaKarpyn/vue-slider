const { createApp } = Vue

  createApp({
    data() {
      return {
        play:null,
        currentactive: 0,
        arrImages: [{
          image: './assets/img/01.webp',
          title: 'Marvel\'s Spiderman Miles Morale',
          text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
      }, {
          image: './assets/img/02.webp',
          title: 'Ratchet & Clank: Rift Apart',
          text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
      }, {
          image: './assets/img/03.webp',
          title: 'Fortnite',
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
      }, {
          image: './assets/img/04.webp',
          title: 'Stray',
          text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
      }, {
          image: './assets/img/05.webp',
          title: "Marvel's Avengers",
          text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
      }]
      
     
      }
    },
      // function created
      created () {
       this.autoplay()
      },
    methods:{
      prev(){
        if(this.currentactive == 0){
          this.currentactive = this.arrImages.length-1
        }else{
          this.currentactive--
        }
      },
      next(){
        
        if(this.currentactive == this.arrImages.length-1){
          this.currentactive = 0
        }else{
          this.currentactive++
        }
      },
      // cambia img al click
      changeImg(indice){
        this.currentactive = indice
      },
      // autoplay
      autoplay(){
        // allego alla var che mi servira dopo per bloccare evento
        this.play = setInterval( ()=>{
          this.next()
        },2000 )
      },
      stoplay(){
        clearInterval(this.play)
      }
    }

  }).mount('#app')