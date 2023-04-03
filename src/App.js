import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import {createBrowserRouter, Outlet} from 'react-router-dom'
import YourResume from './components/YourResume';
import {Provider} from 'react-redux'
import store from './utils/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <Outlet/>
    </div> 
    </Provider>
  );
}

export default App;

export const appRouter = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[{
    path:'/',
    element:<Form/>,
  },
  {
    path:'/your-resume',
    element:<YourResume/>
  }]
}])