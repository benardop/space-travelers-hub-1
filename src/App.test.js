import { Provider } from 'react-redux';
import store from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from './App';

const MockApp = () => (
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
);

test('renders correctly', () => {
  const tree = renderer
    .create(<MockApp />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
