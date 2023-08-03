import React, {useState} from 'react'
import SiblingCounter from '../components/callback/SiblingCounter'
import SiblingDisplay from '../components/callback/SiblingDisplay'

const CallbackContainer = () => {

    const [count, setCount] = useState(10)

    const addCount = () => {
        setCount(count + 1)

    }
    const subtractCount = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>Change the count from the counter!</h1>
            <SiblingCounter handleParentCount={addCount} header="+ Count"/>
            <SiblingCounter handleParentCount={subtractCount} header="- Count"/>
            <SiblingDisplay parentCount={count}/>

<button onClick={addCount}>Add Count</button>
            <p>Parent count: {count} </p>

        </div>
    )
}

export default CallbackContainer