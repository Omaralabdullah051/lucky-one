import React from 'react';
import '../Questions-styles/Questions.css';

const Question1 = () => {
    return (
        <div className='questions-container'>
            <h1 className='question'>How React works?</h1>
            <h3>React is a UI based JS library. It is a JS library for building User Interfaces. When we dynamically add or removes data via javaScript,each an every time a new DOM is created for the same page. This repeated creation reduces the performance of the application and makes unnecessary memory wastage. But when React is not directly manipulating on the browser's DOM immediately. When we create React element and renders into React DOM, It creates a virtual DOM in memory and operates on it. After the vitual DOM has been updated, React indentifies what needs to change in the actual browser's DOM. React solved the repeated DOM creation of browser and only changes what needs to be changed. It also gives better developer experiences.</h3>
        </div>
    );
};

export default Question1; 