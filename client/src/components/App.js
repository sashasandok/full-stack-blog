// react
import React, { Component } from 'react'
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'

// styles
import './App.css'

// components
import PostsList from './PostsList/PostsList'
import AddPost from './AddPost/AddPost'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="app-header">
            <nav className="main-nav">
              <Link to="/">
                <span>Posts</span>
              </Link>
              <Link to="/add-post">
                <span>Add New Post</span>
              </Link>
            </nav>
            <div>Hello Blog</div>
          </header>
          <section className="app-content">
            <Switch>
              <Route exact path="/" component={PostsList} />
              <Route path="/add-post" component={AddPost} />
            </Switch>
          </section>
        </div>
      </Router>
    )
  }
}

export default App
