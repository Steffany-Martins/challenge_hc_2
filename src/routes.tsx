import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home/App';
import Product from './pages/ProductForm/App';
import Client from './pages/UserForm/App';

function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/produtos" component={Product} />
      <Route path="/cadastro/cliente" component={Client} />
    </Switch>
  </BrowserRouter>
  )
}

export default Routes;
