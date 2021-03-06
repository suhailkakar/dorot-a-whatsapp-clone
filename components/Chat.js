import { Avatar } from "@material-ui/core"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"
import styled from "styled-components"
import { auth, db } from "../firebase"
import getRecipientEmail from "../utils/getRecipientEmail"
import { useRouter } from 'next/router'

function Chat({id, users}) {
  const router = useRouter()
  const [user] = useAuthState(auth)
  const [recipientSnapshot] = useCollection(db.collection('users').where('email', '==', getRecipientEmail(users, user)))

  const enterChat = () => {
    router.push(`/chat/${id}`)
  }
  const recipient = recipientSnapshot?.docs?.[0]?.data()
  const recipientEmail = getRecipientEmail(users, user)


  console.log(recipient?.recipient)

  return (
    <Container onClick={enterChat}>
      {recipient ? (
        <UserAvatar src={recipient?.photoURL} />
      ) : (
        <UserAvatar>{recipientEmail[0].toUpperCase()}</UserAvatar>
      )}
      <p>{recipientEmail}</p>
    </Container>

  )
}

export default Chat

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  word-break: break-all;
  border-bottom: 1px solid #F2F2F2;

  :hover {
    background-color: #EBEBEB;
  }
`
const UserAvatar = styled(Avatar)`
  margin-right: 15px;
`
