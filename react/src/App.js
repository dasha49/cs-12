// import logo from './logo.svg';
// import './App.css';
// import { getPalette, getRandomPalette } from './shared/colorPaletteGenerator'
// import { HoverColorLetters } from './components/hoverColorLetters/hoverColorLetters';
// import { Header } from './components/header/header.component';


// function App() {
//   console.log('r', getRandomPalette())
//   console.log(getPalette('#1a5e63'))
//   return (
//     <div className="App">
//       {/* <header>
//         <div>colors</div>
//         <div>
//           <div>tools</div>
//           <div>go pro</div>
//         </div>
//       </header> */}
//       <Header />
//       <HoverColorLetters
//         text="Aliquip non consectetur consectetur do duis pariatur duis laborum."
//         defaultColor="black"
//         colors={['#6369d1', '#60e1e0', '#d8d2e1', '#b88e8d', '#34435e']}
//       />
//       <Header />
//       <HoverColorLetters
//         text="Dolor pariatur mollit aute commodo occaecat magna est sint sint."
//         defaultColor="green"
//         colors={['#2660a4', '#edf7f6', '#f19953', '#c47335', '#56351e']}
//       />
//       <Header />
//       <Header />
//       <Header />
//       <Header />
//       <Header />
//       <HoverColorLetters
//         text="Pariatur culpa ipsum consectetur pariatur amet reprehenderit."
//         defaultColor="red"
//         colors={['#001514', '#fbfffe', '#6b0504', '#a3320b', '#e6af2e']}
//       />
//     </div>
//   );
// }

// export default App;



import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import { getPalette, getRandomPalette } from './shared/colorPaletteGenerator';
import { HoverColorLetters } from './components/hoverColorLetters/hoverColorLetters';
import { Header } from './components/header/header.component';

// Імпортуємо сторінки з папки pagess (згідно твоєї структури)
import Mein from './pagess/Mein/mein';
import Generator from './pagess/Generator/generator';
import Login from './pagess/Login/login';
import Registration from './pagess/Registration/registration';
import SpecialColor from './pagess/specialColor/specialcolor';

function App() {
  console.log('r', getRandomPalette());
  console.log(getPalette('#1a5e63'));
  return (
    <div className="App">
      {/* залишаю твою верстку зверху */}
      <Header />
      <HoverColorLetters
        text="Aliquip non consectetur consectetur do duis pariatur duis laborum."
        defaultColor="black"
        colors={['#6369d1', '#60e1e0', '#d8d2e1', '#b88e8d', '#34435e']}
      />
      <Header />
      <HoverColorLetters
        text="Dolor pariatur mollit aute commodo occaecat magna est sint sint."
        defaultColor="green"
        colors={['#2660a4', '#edf7f6', '#f19953', '#c47335', '#56351e']}
      />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <HoverColorLetters
        text="Pariatur culpa ipsum consectetur pariatur amet reprehenderit."
        defaultColor="red"
        colors={['#001514', '#fbfffe', '#6b0504', '#a3320b', '#e6af2e']}
      />

      {/* Нижче додаю маршрути — вони рендеряться під поточним вмістом App */}
      <main style={{ marginTop: 24 }}>
        <Routes>
          <Route path="/" element={<Mein />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/colors/:colorHex" element={<SpecialColor />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;









