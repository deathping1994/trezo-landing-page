import logo from './logo.svg';
import Header from '../src/components/Homepage/Header'
import Card from '../src/components/Homepage/Card'
import Footer from '../src/components/Homepage/Footer'
import './App.css'

function App() {
  const content=<span>We are working hard to build an investment product around our co-owners&rsquo; wants and desires. Answer a few short questions and get early access to our innovative, <br id={'break'}/>trust-worthy, and legally solid tools to invest in real estate.</span>
  return (
    <div>
      <Header 
        buttontext={'GET EARLY ACCESS'}
      />
      <Card 
        id="down"
        title={'New relationships are fragile. Help us define boundaries.'}
        content={content}
        buttontext={'GET EARLY ACCESS'}
      />
      <Footer />
    </div>
  );
}

export default App;
