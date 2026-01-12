// import './login.css'

// export const Login = () => {
//   return (
//     <div className="loginPage">
//       <div className="left">
//         <div className="header">
//           <h1>Sign up</h1>
//           <p className="subtitle">
//             Create a free account with your email.
//           </p>
//         </div>

//         <div className="form">
//           <input type="text" placeholder="Full Name" />
//           <input type="email" placeholder="Email" />

//           <div className="passwordWrapper">
//             <input type="password" placeholder="Password" />
//           </div>

//           <button>Create your free account</button>

//           <p className="signin">
//             Already have an account? <a href="#">Sign in</a>
//           </p>
//         </div>

//         <p className="terms">
//           By continuing, you agree to our{' '}
//           <a href="#">Terms of Service</a>. Read our{' '}
//           <a href="#">Privacy Policy</a>.
//         </p>
//       </div>

//       <div className="right"></div>
//     </div>
//   )
// }




import './login.css'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate() // хук для переходу

  return (
    <div className="loginPage">
      <div className="left">
        <div className="header">
          <h1>Sign up</h1>
          <p className="subtitle">
            Create a free account with your email.
          </p>
        </div>

        <div className="form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />

          <div className="passwordWrapper">
            <input type="password" placeholder="Password" />
          </div>

          <button>Create your free account</button>

          <p className="signin">
            Already have an account?{' '}
            <span 
              onClick={() => navigate('/')} 
              style={{ cursor: 'pointer', color: '#2563eb', textDecoration: 'underline' }}
            >
              Sign in
            </span>
          </p>
        </div>

        <p className="terms">
          By continuing, you agree to our{' '}
          <a href="#">Terms of Service</a>. Read our{' '}
          <a href="#">Privacy Policy</a>.
        </p>
      </div>

      <div className="right"></div>
    </div>
  )
}
