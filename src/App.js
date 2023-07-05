import './App.css';
import Layout from './components/Layout';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Game from './components/Game';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Game' element={<Game />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
