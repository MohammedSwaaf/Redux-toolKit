import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";

import './App.css';
import Home from './components/home';
import User from './components/user';
import ErrorPage from './components/errorPage';
function App() {
  // const location = useLocation()
  // useEffect(()=>{
  //   console.log(location);
  // },[location.search])
  return (
    <>
      {/* <BrowserRouter>
        <Switch></Switch>
      </BrowserRouter> */}
      {/* <Home /> */}
      <Router>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/user"> User </Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<User />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
