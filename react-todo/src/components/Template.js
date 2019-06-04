import React from 'react';
import './Template.css';


const Template = ({form , children}) =>{
    return(
        <main className = "todo-list-template">
            <div className ="title">
                To do List
            </div>
            <section className = "form-wrapper">
                {form}
            </section>
            <section className = "todo-wrapper">
                {children}
            </section>
        </main>
    )
}

export default Template;