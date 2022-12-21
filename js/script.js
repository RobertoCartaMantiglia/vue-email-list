// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.


const { createApp } = Vue

createApp({
  data() {
    return {
        activeIndex: 0,
        randomEmail: 'null',
        emails: [

      ],
    }
  },
  methods : {
    getRandomEmail(){        
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (response) =>{
                this.randomEmail = response.data.response;
                console.log(this.randomEmail)
                this.emails.push(response.data.response);
            });
           
    },
   
  },
  created () {
    for(let i=0; i<10; i++){
        this.getRandomEmail();
    }
    
  },
}).mount('#app')


