import React, {useEffect, useState, useContext} from "react"
import PageLayout from '../pageLayout/pageLayout'
import Button from 'react-bootstrap/Button'
import * as netlifyIdentity from "netlify-identity-widget"
import {Router, RouteComponentProps,Link} from "@reach/router"
import {identityContext} from '../context/authContext'
import UserArea from '../components/userArea'



export default function Dashboard() {


  return (

    <PageLayout>
      <Router>
          <UserArea path ="/dashboard"/>
      </Router>
    </PageLayout>
  )
}
