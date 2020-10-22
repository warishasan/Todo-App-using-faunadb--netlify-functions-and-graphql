import { useQuery,gql,useMutation } from '@apollo/client';



interface todos {
    value: string,
    done: boolean,
    id?: number
}


function TodoReducer (state: todos[],action: {type:string, payload:todos}) {

    switch(action.type){

        case 'ADDTODO':
            return ([{done:false, value: action.payload.value}, ...state])

        case 'TOGGLETODO':
            const newState = [...state]
            newState[action.payload.id] ={
                done: !state[action.payload.id].done,
                value:state[action.payload.id].value 
            }
            return newState;

    }
    


}

export default TodoReducer