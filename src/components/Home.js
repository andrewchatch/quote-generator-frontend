import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Quote from './Quote';
import '../css/Home.css';



export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            quotesList: [],
            currentQuote: {}
        }

        this.generateRandomQuote = this.generateRandomQuote.bind(this);
        this.generateRandomColor = this.generateRandomColor.bind(this);
    }

    componentDidMount() {
        axios.get('/quotes' )
            .then((res) => {
                this.setState({
                    quotesList: res.data
                }, () => {
                    this.generateRandomQuote();
                });
            });

    }

    generateRandomColor() {

        const elems = document.getElementsByClassName('quote-section');

        for(let i = 0; i < elems.length; i++) {
            const redVal = Math.floor(Math.random() * 255);
            const greenVal = Math.floor(Math.random() * 255);
            const blueVal = Math.floor(Math.random() * 255);

            // https://dev.to/isarisariver/how-to-determine-font-color-based-on-a-random-background-color-8ek
            const brightness = redVal * 0.299 + greenVal * 0.587 + blueVal * 0.114;
            

            // console.log(elem);

            if(brightness > 90) {
                elems[0].style.color = 'black';
            }
            else {
                elems[0].style.color = 'white';
            }

            elems[0].style.backgroundColor = `rgb(${redVal}, ${greenVal}, ${blueVal})`;
        }
        
        
    }
    
    generateRandomQuote() {
        const rand = Math.floor(Math.random() * this.state.quotesList.length);

        const quote = this.state.quotesList[rand];

        this.generateRandomColor();

        this.setState({
            currentQuote: quote
        });
    }

    render() {
        return (
            <div>
                <h1 id="title">Quote of the Day:</h1>

                <Quote currentQuote={this.state.currentQuote} />

                <Link to="/add-quote"><button className='btn btn-primary'>Add Quote</button></Link>
                <button id="generate-random-quote-button" onClick={this.generateRandomQuote} className='btn btn-primary'>Generate Random Quote</button>
                <Link to="/quotes"><button className='btn btn-primary'>View All Quotes</button></Link>
       
       
            </div>
        )
    }
}