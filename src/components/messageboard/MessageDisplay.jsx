import React from 'react'

const MessageDisplay = (props) => {
    return (
        <div>
            <h1>Current Message</h1>
            <pre>CurrentMessge {props.message}</pre>
            {
                props.messageList.map((eachMsg, i) => {
                    return (
                        <pre key={i} style={{color: eachMsg}}>{eachMsg}</pre>
                    )
                })
            }
        </div>
    )
}

export default MessageDisplay