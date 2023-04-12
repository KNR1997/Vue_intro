const app = Vue.createApp({
    //data, functions
    // template: '<h2> This is the template</h2>',

    data() {
        return {
            title: 'Harry Potter',
            author: 'JK Rowlling',
            age: 45
        }
    },
    methods: {
        changeTitle() {
            this.title = 'Lord of the Rings'
        }
    }
});

app.mount('#app')

