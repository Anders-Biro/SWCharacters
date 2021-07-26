import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Characters from './collections/Characters';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const onSearchInput = (event) => {
    setSearchTerm(event);
  }

  return (
    <>
      <Header onSearchInput={onSearchInput}/>
      <div className="content">
        <Characters searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default App;
