import React, {useEffect} from "react"
import PageLayout from '../pageLayout/pageLayout'
import Button from 'react-bootstrap/Button'
import netlifyIdentity from 'netlify-identity-widget'

export default function Home() {

  useEffect (()=>{

    netlifyIdentity.init({})
  },[])
  return (

    <PageLayout>
      <div>

      <Button onClick = {()=>{netlifyIdentity.open()}} variant="primary">Login</Button>
      </div>
    </PageLayout>
  )
}
