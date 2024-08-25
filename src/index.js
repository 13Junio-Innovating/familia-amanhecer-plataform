// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css'; 
// import background from './assests/background.jpg';
// import Header from './components/Header';
// import Sobre from './components/Sobre';
// import VideoCarousel from './components/VideoCarrossel';
// import Login from './components/Login';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div
//       className="bg-fixed bg-cover bg-center min-h-screen"
//       style={{ backgroundImage: `url(${background})` }}
//     >
//       <Header />
//       <main className="pt-16">
//         <Sobre />
//         <VideoCarousel />
//         <Login />
//       </main>
//       <Footer /> 
//     </div>
//   );
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; 
import background from './assests/background.jpg'; 
import Header from './components/Header';
import Sobre from './components/Sobre';
import VideoCarousel from './components/VideoCarrossel'; 
import Login from './pages/Login';
import Footer from './components/Footer';
import Cadastrar from './pages/Cadastrar'; 
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify'; // Importar ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importar estilos do Toastify

function App() {
  return (
    <div
      className="bg-fixed bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Router>
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/cadastrar" element={<Cadastrar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Adicione outras rotas aqui */}
            <Route path="/" element={<><Sobre /><VideoCarousel /></>} />
          </Routes>
        </main>
        <Footer />
      </Router>
      <ToastContainer />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
