import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      <header>
        <h1>GROUP 03 | CFG Degree</h1>
      </header>
      <body>
        <h2>About Us</h2>
        <div className="box">
              <img src={require('./images/Cassie.PNG')}/>
              <img src={require('./images/Giovanna.png')}/>
              <img src={require('./images/Giovanna.png')}/>
          </div>

        <div className="box">
          <a>Cassie Messerle</a>
          <a>Emily Livingstone</a>
          <a href="https://github.com/gbataglini" target="_blank">Giovanna Bataglini</a>
        </div>

        <div className="box">
          <h4>About:</h4>
          <h4>About:</h4>
          <h4>About:</h4>
        </div>

        <div className="box">
          <p>My name's Cassie, and I'm avid sewer and knitter.  These things bring me so much joy because there are endless possibilities and it's something you can learn along the way!</p>
          <p>---</p>
          <p>I'm originally from Brazil, but moved to lovely Belfast when I had just turned 18. In my downtime you'll find me either watching some Netflix enjoying a nice cup of coffee, planning my next trip or out for drinks with my friends! </p>
        </div>
        <div className="box">
              <img src={require('./images/Giovanna.png')}/>
              <img src={require('./images/Kate.png')}/>
              <img src={require('./images/Lida.PNG')}/>
          </div>
          
        <div className="box">
          <a>Hassan Hussein</a>
          <a>Kate Ilyasyuk</a>
          <a>Lida Mnatsakanian</a>
        </div>

        <div className="box">
          <h4>About:</h4>
          <h4>About:</h4>
          <h4>About:</h4>
        </div>

        <div className="box">
          <p>---</p>
          <p> Absolutely love dancing, travelling and prosecco! Nowadays I dedicate all my time for my family and looking for my dream job. </p>
          <p> Hi! I love basking in the sun, going for long hikes and exploring art galleries. I feel most at home in the mountains somewhere beautiful, but city life has its perks too! Hoping to land my first role in tech this year, preferably somewhere much warmer than England!  </p>
        </div>
      </body>
      <footer>
        <p>Icons generated using <a className='footer-link' href='https://picrew.me/en/image_maker/112842' target="_blank">picrew</a></p>
      </footer>
      </div>
  );
}

export default App;