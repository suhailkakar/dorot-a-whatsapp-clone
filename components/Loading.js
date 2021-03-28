import styled from "styled-components"
import {Circle} from 'better-react-spinkit'

function Loading() {
  return (
    <Container>
      <div>
        <Loader>
          <Circle color="#5EC655" size={100} />
        </Loader>
      </div>
    </Container>
  )
}

export default Loading

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  text-align: center;
`

const Loader = styled.div`
  width: 100%;
  text-align: center;

  >span {
    display: inline-block;
  }
`

const Logo = styled.img`
  display: block;
  margin: 0 auto;
  width: 200px;
  height: 200px;
`
