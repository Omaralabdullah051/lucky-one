import React from 'react';
import '../Questions-styles/Questions.css';

const Question3 = () => {
    return (
        <div className='questions-container'>
            <h1 className='question'>How useState Hook Works?</h1>
            <h3>At first in React, Only Class component was the statefull component in React. And we need to use Class component to manage states and other React features. It was possible for React lifecycle methods which is only used in Class component. So,function component was considered as presentational component before hook introduction. Now function component is also a statefull component when we implement hook on it. Hook allows function component to have access to state and other React features(side effects,context,ect). useState is a state hook which allows us to track state in a function component. We can initialize our state simply by calling useState hook. useState accepts initial state and return two values in an array. One is the current state and the other is a state updater function. This state updater function update the state in function component without having lifecycle methods.  </h3>
        </div>
    );
};

export default Question3;