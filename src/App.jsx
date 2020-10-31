import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

//  font-awesome library
import library from './data/faLibrary';

// containers & components
import Navbar from './containers/Navbar/Navbar';
import LandingPage from './containers/LandingPage/LandingPage';
import ArticlesPage from './containers/ArticlesPage/ArticlesPage';
import InterviewsPage from './containers/InterviewsPage/InterviewsPage';
import PodcastPage from './containers/PodcastPage/PodcastPage';
import Footer from './containers/Footer/Footer';
import SignIn from './components/SignIn/SignIn';
import CreateArticle from './components/CreateArticle/CreateArticle';
import CreateInterview from './components/CreateInterview/CreateInterview';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={LandingPage} />
        <Route path='/articles' component={ArticlesPage} />
        <Route path='/interviews' component={InterviewsPage} />
        <Route path='/podcasts' component={PodcastPage} />
        <Route path='/signin' component={SignIn} />
        <Route path='/createarticle' component={CreateArticle} />
        <Route path='/createinterview' component={CreateInterview} />
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
