import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import AuthComponent from './components/auth.component';
import PostsIndexComponent from './components/posts.component';
import NewPostComponent from './components/new-post.component';
import PostComponent from './components/post.component';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/posts/new" component={NewPostComponent}/>
                    <Route path="/posts/:id" component={PostComponent}/>
                    <Route path="/posts" component={PostsIndexComponent}/>
                    <Route path="/" component={AuthComponent}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
