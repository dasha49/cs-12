// import './App.css'
// import { getPalette, getRandomPalette } from './shared/colorPaletteGenerator'
// import { HoverColorLetters } from './components/hoverColorLetters/hoverColorLetters'
// import { Header } from './components/header/header.component'

// function App() {
//   console.log('random', getRandomPalette())
//   console.log('from color', getPalette('#1a5e63'))

//   return (
//     <div className="App">

//       <Header />

//       {/* HERO */}
//       <section className="hero">
//         <h1>
//            <HoverColorLetters
//         text="The super fast color palettes generator!"
//         defaultColor="black"
//         colors={['#ed2525ff', '#fb3d66ff', '#a33de8ff', '#3e38e7ff', '#2ab3e5ff','#1cc341ff', '#e1e440ff', '#ea7d29ff' ]}
//       />
//         </h1>
//       </section>

      
      

//     </div>
//   )
// }

// export default App











// // App.jsx (оновлено: додано маршрут /generator і зроблено palette клікабельним)
// import './App.css'
// import { Routes, Route, Link } from "react-router-dom"
// import { getPalette, getRandomPalette } from './shared/colorPaletteGenerator'
// import { HoverColorLetters } from './components/hoverColorLetters/hoverColorLetters'
// import { Header } from './components/header/header.component'
// import { Login } from './pages/Login/login'
// import { Generator } from './pages/Generator/generator' // імпорт сторінки генератора

// function App() {
//   console.log('random', getRandomPalette())
//   console.log('from color', getPalette('#1a5e63'))

//   return (
//     <div className="App">
//       <Header />

//       {/* Routes */}
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/generator" element={<Generator />} />
//         <Route
//           path="/"
//           element={
//             <>
//               {/* HERO */}
//               <section className="hero">
//                 <div className="heroText">
//                   <h1>
//                     <HoverColorLetters
//                       text="The super fast color palettes generator!"
//                       defaultColor="black"
//                       colors={[
//                         '#ed2525ff',
//                         '#fb3d66ff',
//                         '#a33de8ff',
//                         '#3e38e7ff',
//                         '#2ab3e5ff',
//                         '#1cc341ff',
//                         '#e1e440ff',
//                         '#ea7d29ff'
//                       ]}
//                     />
//                   </h1>

//                   <p>
//                     Create the perfect palette or get inspired by
//                     <br />
//                     thousands of beautiful color schemes.
//                   </p>

//                   <div className="heroButtons">
//                     <Link to="/login" className="btn btnPrimary">
//                       Sign Up
//                     </Link>

//                     <button className="btn btnOutline">
//                       Explore trending palettes
//                     </button>
//                   </div>
//                 </div>

//                 {/* PALETTE — при кліці відкриватиме сторінку генератора */}
//                 <Link to="/generator" className="palette" aria-label="Open generator">
//                   <div className="color c1"></div>
//                   <div className="color c2"></div>
//                   <div className="color c3"></div>
//                   <div className="color c4"></div>
//                   <div className="color c5"></div>
//                 </Link>
//               </section>
//             </>
//           }
//         />
//       </Routes>

//       <div className="footerText">
//         Make something colorful!
//       </div>
//     </div>
//   )
// }

// export default App











// App.jsx — мінімальна зміна: автоперегенерація головної палітри та перехід у /generator при кліку.
// ДИЗАЙН НЕ ЗМІНЮЄТЬСЯ — використовуються ті самі класи .palette .color .c1..c5
import React, { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import { getPalette, getRandomPalette } from './shared/colorPaletteGenerator'
import { HoverColorLetters } from './components/hoverColorLetters/hoverColorLetters'
import { Header } from './components/header/header.component'
import { Login } from './pages/Login/login'
import { Generator } from './pages/Generator/generator' // сторінка генератора

function App() {
  const PALETTE_SIZE = 5
  const [mainPalette, setMainPalette] = useState(() => {
    // ініціалізуємо тією ж довжиною що і верстка (5)
    return getRandomPalette(PALETTE_SIZE)
  })

  // Автоперегенерація кожні 2 секунди
  useEffect(() => {
    const id = setInterval(() => {
      setMainPalette(getRandomPalette(PALETTE_SIZE))
    }, 2000)

    return () => clearInterval(id)
  }, [])

  console.log('random', getRandomPalette())
  console.log('from color', getPalette('#1a5e63'))

  return (
    <div className="App">
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/generator" element={<Generator />} />
        <Route
          path="/"
          element={
            <>
              {/* HERO */}
              <section className="hero">
                <div className="heroText">
                  <h1>
                    <HoverColorLetters
                      text="The super fast color palettes generator!"
                      defaultColor="black"
                      colors={[
                        '#ed2525ff',
                        '#fb3d66ff',
                        '#a33de8ff',
                        '#3e38e7ff',
                        '#2ab3e5ff',
                        '#1cc341ff',
                        '#e1e440ff',
                        '#ea7d29ff'
                      ]}
                    />
                  </h1>

                  <p>
                    Create the perfect palette or get inspired by
                    <br />
                    thousands of beautiful color schemes.
                  </p>

                  <div className="heroButtons">
                    <Link to="/login" className="btn btnPrimary">
                      Sign Up
                    </Link>

                    <button className="btn btnOutline">
                      Explore trending palettes
                    </button>
                  </div>
                </div>

                {/* PALETTE — збережено існуючу розмітку/класи, але кольори оновлюються кожні 2s.
                    Обгорнуто Link, тож при натисканні відкривається /generator */}
                <Link to="/generator" className="palete" aria-label="Open generator">
                  {/* Рендеруємо рівно 5 блоків з класами c1..c5, щоб дизайн лишився як був */}
                  <div className="color c1" style={{ backgroundColor: mainPalette[0] || '#ffffffff' }} />
                  <div className="color c2" style={{ backgroundColor: mainPalette[1] || '#ffffff' }} />
                  <div className="color c3" style={{ backgroundColor: mainPalette[2] || '#ffffff' }} />
                  <div className="color c4" style={{ backgroundColor: mainPalette[3] || '#ffffff' }} />
                  <div className="color c5" style={{ backgroundColor: mainPalette[4] || '#ffffff' }} />
                </Link>
              </section>
            </>
          }
        />
      </Routes>

    </div>
  )
}

export default App