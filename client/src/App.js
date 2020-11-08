import './App.css';
import {Switch,Route,BrowserRouter as Router,Redirect} from 'react-router-dom';
import {MainPage} from './Views/MainPage';
import {Post} from './Views/Post';
import {NotFound} from './Views/NotFound';
import {useDispatch} from 'react-redux'
import {getPosts} from './redux/postActions'
import {useEffect} from'react';
function App() {
  
  const dispatch = useDispatch()
    
  useEffect(() => {
      dispatch(getPosts()) 
    }, [dispatch]);
  return (
    <div className="App">
        
        <Router>
          <div className="header">
          <div className="container">
            <h1>PublicBlog</h1>
          </div>
          </div>
          <Switch>
            <Route path='/' component={MainPage} exact></Route>
            <Route path='/post/:id' component={Post}></Route>
            <Route path='/404' component={NotFound} exact></Route>
            <Route path='*'> <Redirect to="/404"></Redirect></Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
