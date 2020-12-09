import axios from 'axios';
const barstore = {
    namespaced : true,
    state : {
        todos: []
    },
    mutations: {
        setTodos(state, data) {
            state.todos = data;
        }
    },
    actions: {
        useAxios({commit}) {
            axios.get('https://jsonplaceholder.typicode.com/todos/')
            .then(res=>{
                console.log(res);
                commit('setTodos', res.data);   
            })
            .catch(error => console.log(error));
        }

    },
    getters: {
        getTodos: state => state.todos
    }
}

export default barstore;