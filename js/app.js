// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// text, una stringa che indica il testo del todo
// done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// NON perdetevi a fare troppi abbellimenti con il css all’inizio, ne a gestire layout particolari.
// Abbellirete tutto alla fine.
// Scrivete solo il CSS necessario a completare le milestone


// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.


const { createApp } = Vue

  createApp({
    data() {
      return {
        textDecoration: 'text-overline',
        message: 'VUE TODOLIST',
        actions: [
            {
                text: 'Comparare arance',
                done: false,
            },
            {
                text: 'Comparare cibo cani',
                done: false,
            },
            {
                text: 'Andare dal commercialista',
                done: true,
            },
            {
                text: 'Studiare Vue',
                done: true,
            },
            {
                text: 'Andare a caricare furgone',
                done: false,
            },
            {
                text: 'Fare trasloco dalla nonna',
                done: true,
            },
            {
                text: 'Fare esercizio del pomeriggio',
                done: false,
            },
        ]
      }
    },
    methods:{
        
    }
  }).mount('#app')