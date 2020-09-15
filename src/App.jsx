import React, { useRef } from 'react';
import * as Yup from 'yup';

import { Footer } from './components/organisms/Footer';
import { SignInForm } from './components/organisms/SignInForm';

import './App.css';

function App() {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(4).required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      console.log(data);
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <main className="main-container">
      <section>
        <div className="title-box">
          <h1>Post whatever you want anytime you want for FREE</h1>
        </div>
        <div className="form-box">
          <SignInForm onSubmit={handleSubmit} onRef={formRef} />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
