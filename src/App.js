import './App.css';
import Layout from './components/Layout';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
