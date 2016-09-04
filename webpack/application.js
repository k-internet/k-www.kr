import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { defaultReducer } from './reducers';
import { Welcome, Page } from './pages';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App';

let store = createStore(defaultReducer);

render(
	<Provider store={store}>
		<Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome}/>
        <Route path="/articles/:permalink/lists/:listPermalink" component={Page}/>  
        <Route path="/lists/:listPermalink" component={Page}/>  
        <Route path="/:locale/articles/:permalink/lists/:listPermalink" component={Page}/>  
        <Route path="/:locale/articles/:permalink" component={Page}/>      
        <Route path="/:locale/lists/:listPermalink" component={Page}/>
        <Route path="/:locale" component={Welcome} />
      </Route>
    </Router>
 	</Provider>,
	document.getElementById('root')
);

