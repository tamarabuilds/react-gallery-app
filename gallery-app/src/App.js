import { useState } from 'react';
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';

// import logo from './logo.svg';
// import './App.css';

function App() {
  const [query, setQuery] = useState('search above and i will change');
  

  const handleQueryChange = searchText => {
    setQuery(searchText)
  };

  return (
    <div className="container">
      <SearchForm 
        changeQuery={handleQueryChange}
      />
      {/* For testing only */}
      <h1>{query}</h1>
      <nav className='main-nav'>
          <Nav />
      </nav>
    </div>
  );
}

export default App;
