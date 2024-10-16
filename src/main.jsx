import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom';
import Routes from './Route.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/contact.jsx';
import User from './Components/User/User.jsx';
import Github , {GithubInfo} from './Components/Github/Github.jsx';

// Method 1
// const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Route/>,
//       children: [
//         { 
//           path: "",
//           element: <Home/>
//         },
//         { 
//           path: "about",
//           element: <About/>
//         },
//         { 
//           path: "contact",
//           element: <Contact/>
//         },
//       ]
//     }
// ])

// Method 2
        // 
{/*     <Route path='about' element={<About/>}>
        // about me bhi routing lga sakte hai
          <Route path='our_team' element={<Team/>}/>
        </Route> */}
        // /about/our_team
        
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Routes/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='user/:userid' element={<User/>}/>
        <Route 
          loader={GithubInfo}
          path='github' 
          element={<Github/>}
        />
      </Route>
    )
)
// RouterProvider  --> Wrapper
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
