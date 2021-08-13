import './App.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Header from './components/view/Header';
import Footer from './components/view/Footer';
import Teacher from './components/Teacher';
import Parents from './components/Parents';
import Assignment from './components/Assignment';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Messages from './components/Messages';
import New from './components/New';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Recovery from './components/Recovery';
import {
  addTeacher,
  deleteTeacher,
  addStudent,
  deleteStudent,
  teacher,
  student,
} from './components/redux/features/newSlice';
import { useSelector } from 'react-redux';

function App() {
  const stud = useSelector(student);
  const teach = useSelector(teacher);
  return (
    <div className="app">
      <Router>
        <Sidebar />
        <div className="app-content">
          <Header />

          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/teacher">
              <Teacher name="Teacher" data={teach} delete={deleteTeacher} />
            </Route>
            <Route path="/add-new-Teacher">
              <New name="Teacher" add={addTeacher} length={teach.length} />
            </Route>
            <Route path="/student">
              <Teacher name="Student" data={stud} delete={deleteStudent} />
            </Route>
            <Route path="/add-new-Student">
              <New name="Student" add={addStudent} length={stud.length} />
            </Route>
            <Route path="/parents" component={Parents}></Route>
            <Route path="/assignment" component={Assignment}></Route>
            <Route path="/messages" component={Messages}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/login" component={LogIn}></Route>
            <Route path="/recovery" component={Recovery}></Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
