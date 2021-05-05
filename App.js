// library imports
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

// user imports
import AppContainer from './src/navigator';
import rootReducer from './src/redux/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      token: 'abc123',
    };
  }

  componentDidMount = () => {
    this.signInChecker();
  };

  signInChecker = async () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
    // simulated 2 seconds for retrieving access token / make API call / any other stuff on start up
  };

  render() {
    const { loading, token } = this.state;
    return (
      <Provider store={store}>
        <AppContainer loading={loading} token={token} />
      </Provider>
    );
  }
}
export default App;
