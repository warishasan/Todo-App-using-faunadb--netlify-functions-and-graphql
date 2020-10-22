import React, {useEffect, useState, useContext,useRef,useReducer} from "react"
import PageLayout from '../pageLayout/pageLayout'
import Button from 'react-bootstrap/Button'
import * as netlifyIdentity from "netlify-identity-widget"
import {Router, RouteComponentProps,Link} from "@reach/router"
import {identityContext} from '../context/authContext'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import TodoReducer from '../reducer/todoReducer'


export default function UserArea (props:RouteComponentProps) {
    
    const {user} = useContext(identityContext)
    const inputRef = useRef<any>()
    const [state,dispatch] = useReducer(TodoReducer, [])

    return (
    (!!user ?
        <div>
        <h2>{user.user_metadata.full_name}'s Notebook</h2>

        <Form.Group controlId="TaskInput">
    <Form.Control ref = {inputRef} type="text" placeholder="Add a new task" />
  </Form.Group>
  <Button onClick = {()=>{ dispatch({type:"ADDTODO", payload:{value : inputRef.current.value, done: false}})

        inputRef.current.value = "";
}}>Add Task</Button>


  <ListGroup variant="flush">

{state.map((todo,ind)=>
  <ListGroup.Item key = {ind}>
<Form.Group controlId="formBasicCheckbox" onClick = {(e)=>{dispatch({type:"TOGGLETODO", payload:{value : "", done: false, id: ind}})}}>
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
