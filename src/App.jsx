import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//  font-awesome library
import library from './data/faLibrary';

// containers & components
import Navbar from './components/layout/Navbar/Navbar';
import LandingPage from './components/dashboard/LandingPage/LandingPage';
import ArticlesPage from './components/articles/ArticlesPage/ArticlesPage';
import InterviewsPage from './components/interviews/InterviewsPage/InterviewsPage';
import PodcastPage from './components/podcasts/PodcastPage/PodcastPage';
import Footer from './components/layout/Footer/Footer';
import SignIn from './components/auth/SignIn/SignIn';
import Article from './components/articles/Article/Article';
import CreateArticle from './components/articles/CreateArticle/CreateArticle';
import CreateInterview from './components/interviews/CreateInterview/CreateInterview';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/articles' component={ArticlesPage} />
        <Route path='/articles/:id' component={Article} />
        <Route path='/interviews' component={InterviewsPage} />
        <Route path='/podcasts' component={PodcastPage} />
        <Route path='/signin' component={SignIn} />
        <Route path='/createarticle' component={CreateArticle} />
        <Route path='/createinterview' component={CreateInterview} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
