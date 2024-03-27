// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// text, una stringa che indica il testo del todo
// done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// NON perdetevi a fare troppi abbellimenti con il css all’inizio, ne a gestire layout particolari.
// Abbellirete tutto alla fine.
// Scrivete solo il CSS necessario a completare le milestone


// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.


// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”:
// cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”:
// cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, 
// che quindi viene aggiunto alla lista dei todo esistenti.



const { createApp } = Vue

createApp({
    data() {
        return {
            actionAdd: {
                text: '',
                done: false,
            },
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
    methods: {
        remove(i) {
            console.log(i)
            this.actions.splice(i, 1)
        },

        addTodo() {
            const newTodo = {
                text: this.actionAdd.text,
                done: false,
            };
            this.actions.push(newTodo);
            this.actionAdd.text = '';

            //  if(this.actionAdd.text !== ''){
            //     this.actionAdd.text = '';
            //  }

        },

    }
}).mount('#app')