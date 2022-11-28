import Discount from './Sections/Discount/Discount';
import Hero from './Sections/Hero/Hero';
import Mirror from './Sections/Mirrors/Mirror';
import Navbar from './Sections/Navbar/Navbar';
import Ambience from './Sections/Ambience/Ambience';
import Steps from './Sections/Steps/Steps';
import './app.css';
import Email from './Sections/Email/Email';
import Footer from './Sections/Footer/Footer';
import Information from './Sections/Information/Information';
import RecentProjects from './Sections/RecentProjects/RecentProjects';
import Honesty
 from './Sections/Honesty/Honesty';
function App() {
  return (
    <div className="App">
      <Discount/>
      <Navbar/>
      <Hero/>
      <Information/>
      <Mirror/>
<RecentProjects/>
      <Ambience/>
      <Steps/>
    <Email/>
    <Honesty/>
    <Footer/>
    </div>
  );
}

export default App;
