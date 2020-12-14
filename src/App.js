import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import RecommendedVideos from './RecommendedVideos';
import {BrowserRouter as Router ,Route ,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path ='/search/:searchTerm'>
            <div className="App">
              <div className="app_page">
                  <Sidebar />
                  <SearchPage />
              </div>
            </div>
        </Route>
        <Route path='/'>
            <div className="App">
              <div className="app_page">
                  <Sidebar />
                  <RecommendedVideos />
              </div>
            </div>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
