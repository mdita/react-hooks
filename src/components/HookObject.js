import React, { useState } from 'react';

function HookObject() {
    const initialObject = {
        firstName: 'First Name',
        lastName: 'Last Name'
    };
    const [object, setObject] = useState(initialObject);
    const changeFirstName = () => {
        setObject(prevOjbect => {
            return {
                firstName: 'Test NAME',
                lastName: prevOjbect.lastName
            }
        });
    }
    return (
        <div>
            <p>Name: { object.firstName } { object.lastName }</p>
            <button onClick={changeFirstName}>Change First Name</button>
        </div>
    )
}

export default HookObject;