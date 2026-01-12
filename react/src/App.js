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





// App.jsx
import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom"
import { getPalette, getRandomPalette } from './shared/colorPaletteGenerator'
import { HoverColorLetters } from './components/hoverColorLetters/hoverColorLetters'
import { Header } from './components/header/header.component'
import { Login } from './pages/Login/login'
// import { Login } from './components/pages/Login/login'

function App() {
  const navigate = useNavigate() // хук для переходу

  console.log('random', getRandomPalette())
  console.log('from color', getPalette('#1a5e63'))

  return (
    <div className="App">
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/login" element={<Login />} />
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
                    <button 
                      className="btn btnPrimary"
                      onClick={() => navigate('/login')} // перехід на /login
                    >
                      Sign Up
                    </button>
                    <button className="btn btnOutline">
                      Explore trending palettes
                    </button>
                  </div>
                </div>

                <div className="palette">
                  <div className="color c1"></div>
                  <div className="color c2"></div>
                  <div className="color c3"></div>
                  <div className="color c4"></div>
                  <div className="color c5"></div>
                </div>
              </section>
            </>
          }
        />
      </Routes>

      <div className="footerText">
        Make something colorful!
      </div>
    </div>
  )
}

export default App
