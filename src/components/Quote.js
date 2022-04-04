import React from 'react';
import axios from 'axios';
import '../css/Quote.css';

export default class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotesList: [],
            currentQuote: props.currentQuote
        }

    }

    componentDidMount() {
        const elem = document.getElementsByClassName('quote-section');

        for(let i = 0; i < elem.length; i++) {
            elem[i].style.display = 'flex';
        }
    }


    render() {
        const quote = this.props.currentQuote;
        return (
            <div className="quote-section">
                {
                    <div className='quote' key={quote.id} id={quote.id}>
                        <p>"{quote.quote}"</p> 
                            
                        <p>- {quote.author}</p>
                            
                    </div>
                }

                
            </div>
        )
    }
}
