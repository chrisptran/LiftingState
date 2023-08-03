import React from 'react'

const SiblingCounter = (props) => {
    return (
        <div>
            <button onClick={props.handleParentCount}>{props.header}</button>
        </div>
    )
}

export default SiblingCounter