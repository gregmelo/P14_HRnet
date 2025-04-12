// src/Router.jsx
// import { BrowserRouter as Router, Routes, Route } from "react-router";
// import { useEffect } from "react";
// import { initializeEmployees } from "./data/generateFakeEmployees"; // Import de la fonction pour initialiser les employés
// import Home from "./pages/Home/Home";
// import EmployeesList from "./pages/EmployeesList/EmployeesList";
// import NotFound from "./pages/NotFound/NotFound";

// export default function AppRouter() {
//   useEffect(() => {
//     initializeEmployees(); // Initialise les employés au démarrage
//   }, []); // Exécuté une seule fois au montage

//   const handleSave = (employee) => {
//     const storedEmployees = JSON.parse(localStorage.getItem('employees') || '[]');
//     storedEmployees.push(employee);
//     localStorage.setItem('employees', JSON.stringify(storedEmployees));
//     console.log('Employee saved:', employee);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home onSave={handleSave}/>} />
//         <Route path="/employees-list" element={<EmployeesList />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// }


// src/Router.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // Ajout de Provider
import { store } from './redux/store'; // Import du store
import Home from './pages/Home/Home';
import EmployeesList from "./pages/EmployeesList/EmployeesList";
import NotFound from './pages/NotFound/NotFound';

export default function AppRouter() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees-list" element={<EmployeesList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}