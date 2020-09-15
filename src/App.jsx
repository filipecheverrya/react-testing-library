import React from 'react';

import { Footer } from './components/organisms/Footer';
import { SignInForm } from './components/organisms/SignInForm';

import './App.css';

function App() {
  return (
    <main className="main-container">
      <section>
        <div className="title-box">
          <h1>Post whatever you want anytime you want for FREE</h1>
        </div>
        <div className="form-box">
          <SignInForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
