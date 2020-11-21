import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const toastInfo = () => toast.info('Clue Mediator - The way to write your code');
  const toastSuccess = () => toast.success('Clue Mediator - The way to write your code');
  const toastWarn = () => toast.warn('Clue Mediator - The way to write your code');
  const toastError = () => toast.error('Clue Mediator - The way to write your code');
  const toastDark = () => toast.dark('Clue Mediator - The way to write your code');

  return (
    <div className="App">
      <h3>Toast Notification in React - <a href="https://www.cluemediator.com/" target="_blank">Clue Mediator</a></h3>
      <button className="btn" onClick={toastInfo}>Notify - Info</button>
      <button className="btn" onClick={toastSuccess}>Notify - Success</button>
      <button className="btn" onClick={toastWarn}>Notify - Warn</button>
      <button className="btn" onClick={toastError}>Notify - Error</button>
      <button className="btn" onClick={toastDark}>Notify - Dark</button>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </div>
  );
}

export default App;
