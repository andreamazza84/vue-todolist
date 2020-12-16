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
            "Aprire un pollo",
            "Cucinare il vicino di casa"
        ],
        noTasksMessage: '...Time for relax...',
        noTasks: false,
        doubleTask: false,
        inputHolder: "New task...",
    },
    methods: {
        addTask: function(){            
            if (app.inputTask.length > 4) {
                //Azzero il valore del doppio inserimento
                app.doubleTask = false;
                //Se inseriamo una task la seguente condizione sarà ovviamente falsa.
                app.noTasks = false;
                //Reset dell'placeholder
                app.inputHolder = 'New task...';
                //Quello che inserisco deve essere con la prima lettera maiuscola
                app.inputTask = app.inputTask.charAt(0).toUpperCase() + app.inputTask.slice(1);
                
                //controlla che non venga inserito un elemento già presente nella lista 
                app.inputList.forEach(element => {
                    if (element === app.inputTask) {
                        app.doubleTask = true;
                        app.inputTask = ''; 
                        app.inputHolder = 'Item  already added'                    }               
                });

                //aggiunge l'elemento all'inizio dell'array se non già presente
                if (!app.doubleTask) {
                    app.inputList.unshift(app.inputTask)
                    app.inputTask = ''; 
                }
            }
        },
        removeTask: function(index){
            //Reset dell'placeholder
            app.inputHolder = 'New task...';
            //rimuove un'elemento dall'array, quello in posizione index 
            app.inputList.splice(index, 1);
            //Mi restituisce una variabile true quando non ci sono più task
            if (app.inputList.length === 0) {
                app.noTasks = true;
            }
        },
    },
});
