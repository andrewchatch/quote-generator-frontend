import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Quote from "./Quote";
import '../css/QuotesList.css';

const url = 'https://quote-generator-2.herokuapp.com';

export default class QuotesList extends React.Component {
    constructor() {
        super();
        this.state = {
            quotesList: [],
            currentQuote: {}
        }

    }

    componentDidMount() {

        axios.get(url + '/quotes' )
            .then((res) => {
                this.setState({
                    quotesList: res.data
                });
            })
            .catch((err) => {
                console.log(err);
            });

            
    }
    
    
    render() {

        return (
            <div id="quotes-list">
                <h1 id="title">Quotes List:</h1>
                {
                    this.state.quotesList.map((quote) => {
                        return <Quote key={quote.id} currentQuote={quote}/>
                    })
                }

                <Link to="/"><button className='btn btn-primary'>Home</button></Link>
                <Link to="/add-quote"><button className='btn btn-primary'>Add Quote</button></Link>
                
            </div>
        )
    }
}

