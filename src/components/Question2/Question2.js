import React from 'react';
import '../Questions-styles/Questions.css';

const Question2 = () => {
    return (
        <div className='questions-container'>
            <h1 className='question'>What's the difference between state and props?</h1>
            <h3>State and props both are used by React. State is a plain JS object. It represents an information about the component's current situation; While Props are use to share data between React Components. State is mutable; while Props are immutable. State could be changed and changes can be asynchronous; While Props are read only. State holds the information about the components; while Props allows us to share the data from one component to another component as an argument. State cannot be accessed by child component. On the other hand,Props can be accessed by child components. When we want to get the access of state from parent to child components, we must need to pass state via props from parent to child components.</h3>
        </div>
    );
};

export default Question2; 