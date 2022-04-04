import '../css/App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import QuotesList from './QuotesList';
import AddQuote from './AddQuote';
import React from 'react';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
  
            <Route path="/quotes" element={<QuotesList />} />
  
            <Route path="/add-quote" element={<AddQuote />} />
          </Routes>

        </Router>
  
      </div>
    )
  }
  
}

export default App;
