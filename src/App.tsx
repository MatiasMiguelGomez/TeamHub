import { Provider } from 'react-redux';
import './App.css';

import { Home } from './pages';
import { LayoutContainer } from './styled-components';
import store from './redux/store';
import { NavBar, Footer } from './components';

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
      <Footer></Footer>
    </Provider>
  );
}

export default App;
