import React, {useState} from 'react'
import MessageForm from '../components/messageboard/MessageForm'
import MessageDisplay from '../components/messageboard/MessageDisplay'

const MessageBoard = () => {

    const [currentMsg, setCurrentMsg] = useState('')
    const [msgList, setMsgList] = useState([])

    const receiveNewMsg = (newMessage) => {
        setCurrentMsg(newMessage)
        setMsgList([...msgList, newMessage])
    }

    return (
        <div>
            <MessageForm onNewMessage={receiveNewMsg}/>
            <MessageDisplay message={currentMsg} messageList={msgList}/>
        </div>
    )
}

export default MessageBoard