import styled from 'styled-components'
import Head from 'next/head'
import {Button} from '@material-ui/core'
import { auth, provider } from '../firebase'

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert)
  }



  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
        <Button onClick={signIn} variant="outlined">Sign in with your Google Account</Button>
    </Container>
  )
}

export default Login

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: #F0F2F5;
`
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 100px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
`
const Text = styled.div`
font-size: 28px;
line-height: 35px;
width: 550px;
margin-left: 7%;
margin-top: -10%;

`
const Logo = styled.img`
  display: block;
  margin-left: 5%;
  margin-top: 10%;
`
