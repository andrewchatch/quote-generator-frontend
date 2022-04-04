import React from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import '../css/AddQuote.css';

const url = 'https://quote-generator-2.herokuapp.com';

export default class AddQuote extends React.Component {
    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.checkInput = this.checkInput.bind(this);
    }

    checkInput(quoteInput, authorInput) {

        const checkWords = ['fuck', 'shit', 'cunt', 'pussy', 'dick'];

        for(let i = 0; i < checkWords.length; i++) {
            if(quoteInput.includes(checkWords[i]) || authorInput.includes(checkWords[i])) {
                window.alert('Vulgar language is not allowed.');
                return false;
            }
        }

        return true;

    }

    async handleSubmit(event) {

        const quoteInput = document.getElementById('quote-input');
        const authorInput = document.getElementById('author-input');

        if(!this.checkInput(quoteInput.value, authorInput.value)) {
            return;
        }

        if(quoteInput.value === '' || authorInput.value === '') {
            window.alert('Please enter a quote and author.');
            return;
        }

        const quote = {
            "quote": quoteInput.value,
            "author": authorInput.value
        }

        await axios.post(url + '/quotes', quote)
            .then((res) => {
                console.log(res);
                // window.location.href = 'https://andrewchatch.github.io/quote-generator-frontend/';
            })
            .catch(err => {
                console.log(err);
            });

    }

    handleKeyDown(event) {

        if(event.code && event.code === "Enter") {
            event.preventDefault();

            window.alert('Please click the submit button');
            // console.log('Method works');
            // this.handleSubmit(event);
        }
        else {
            return;
        }

    }

    render() {
        return (
            <div>
                <h1 id="title">Add a Quote:</h1>

                <form id="add-quote-form">
                    <label htmlFor="quote">Quote text here:</label>
                    <textarea id="quote-input" name="quote" required onKeyDown={this.handleKeyDown}></textarea>

                    <label htmlFor="author">Author:</label>
                    <input id="author-input" type="text" name="author" required onKeyDown={this.handleKeyDown}/>

                </form>

                <Link to="/" id="back-button"><button className="btn btn-primary">Back</button></Link>
                <Link id="submit-link-to-home" to="/"><input id="submit-button" type="submit" name="submit-form" className="btn btn-primary" onClick={this.handleSubmit} onSubmit={this.handleKeyDown}/></Link>

            </div>
        );
    }
}