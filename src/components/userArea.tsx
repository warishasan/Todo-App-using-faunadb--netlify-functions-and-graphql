import React, {useEffect, useState, useContext,useRef,useReducer} from "react"
import PageLayout from '../pageLayout/pageLayout'
import Button from 'react-bootstrap/Button'
import * as netlifyIdentity from "netlify-identity-widget"
import {Router, RouteComponentProps,Link} from "@reach/router"
import {identityContext} from '../context/authContext'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import TodoReducer from '../reducer/todoReducer'
import { useQuery,useMutation,gql } from '@apollo/client';

const ADD_TODO = gql`
mutation AddTodo ($value: String!){
    addTodo(value: $value){
    id
}
}
`;


const GET_TODOS = gql`
query GetTodos{
    todos{
        id
        value
        done
    }
}
`;

const UPDATE_TODO_DONE = gql`
mutation UpdateTodo ($id: ID!){
    updateTodoDone(id: $id){
    value
    done
}
}
`;


export default function UserArea (props:RouteComponentProps) {
    const [addTodo] = useMutation(ADD_TODO)
    const [updateTodoDone] = useMutation(UPDATE_TODO_DONE)
    const {loading,error,data,refetch} = useQuery(GET_TODOS)

    const {user} = useContext(identityContext)
    const inputRef = useRef<any>()

    console.log(data)
    return (
    (!!user ?
        <div>
        <h2>{user.user_metadata.full_name}'s Notebook</h2>

        <Form.Group controlId="TaskInput">
    <Form.Control ref = {inputRef} type="text" placeholder="Add a new task" />
  </Form.Group>
  <Button onClick = {async ()=>{ await addTodo({variables: {value:inputRef.current.value }})
  console.log(inputRef.current.value)
        inputRef.current.value = "";
       await refetch();
        
}}>Add Task</Button>


  <ListGroup variant="flush">
{loading? <div>Loading...</div>: null}
{error? <div>{error.message}</div>: null}

{(!loading && !error) && data.todos.map((todo)=>
  <ListGroup.Item key = {todo.id}>
<Form.Group controlId="formBasicCheckbox" onClick = {(e)=>{ updateTodoDone({variables: {id:todo.id }})}}>
<Form.Check type="checkbox"/>
<span>{todo.value}</span>
</Form.Group>




  </ListGroup.Item>
  )}
 
</ListGroup>

        </div>:
        
        <div>
            login
        </div>
 
    )
    )

}
