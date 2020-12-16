// Funzionalitá:
// La nostra todo list avrá alcune tasks di default predefinite
// L'utente puó inserire nuove tasks
// Cliccando sulla "X" l'utente puó cancellare una task
// Se non ci sono piu task nella lista, 
// mostrate un messaggio tipo "Nulla da fare"
// Quando l'utente inserisce una task ha due modi per
// salvarla: o preme il pulsante add o preme il taso Enter
// della tastiera.
// Attenzione: l'utente non deve inserire tasks vuote
// ma almeno un tot di caratteri.

let app = new Vue({
    el: '.container',
    data: {
        inputTask: '',
        inputList: [
            "Comprare le zucche",
            "Pulire il calderone",
            "Aprire un pollo"
        ],
        noTasksMessage: 'Nulla da fare',
        noTasks: false,
    },
    methods: {
        addTask: function(){
            if (app.inputTask.length > 4) {
                app.inputList.unshift(app.inputTask)
                app.inputTask = '';
            }
            //Se inseriamo una task la seguente condizione sarà ovviamente falsa.
            app.noTasks = false;
        },
        removeTask: function(index){
            app.inputList.splice(index, 1);
            //Mi restituisce una variabile true quando non ci sono più task
            if (app.inputList.length === 0) {
                app.noTasks = true;
            }
        }
    }
});

