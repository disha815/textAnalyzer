import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types';
import Textbox from './components/Textbox';

// let name = "Tauqeer Ahmad";
// let lang = {
//   web: 'javascript',  
//   mobile: 'kotlin'
// }
function App() {
  return (
    <>
      <Navbar title="textAnalyzer" home="&#128151; "></Navbar>
      {/* <Navbar></Navbar> */}
      <div className="container">
        <Textbox heading="Enter the text to analyse" />
      </div>
      {/* container class is the class of Bootstrap to proper padding and margin */}
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}
Navbar.defaultProps = {
  title: "React Works",

}
Textbox.propTypes = {
  heading: PropTypes.string.isRequired, 
}
Textbox.defaultProps = {
  title : "Please enter the text to analyse",
}
export default App;
