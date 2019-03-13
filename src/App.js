import React from 'react';
import GAListener from 'components/GAListener';
import { LayoutRoute, MainLayout } from 'components/Layout';
import SearchPage from 'pages/SearchPage';
import StockPage from 'pages/StockPage';
import componentQueries from 'react-component-queries';
import { Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import './styles/reduction.scss';

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {

  render() {
    return (
      <ConnectedRouter basename={getBasename()} history={this.props.history}>
        <GAListener>
          <Switch>
            <LayoutRoute
              exact
              path="/search"
              layout={MainLayout}
              component={props => (
                <SearchPage {...props} />
              )}
            />
            <LayoutRoute
              exact
              path="/stock/:stockquote"
              layout={MainLayout}
              component={props => (
                <StockPage {...props} />
              )}
            />
            <Redirect to="/search" />
          </Switch>
        </GAListener>
      </ConnectedRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
