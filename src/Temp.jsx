import React from 'react';
import { Route,Routes,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';
import HomeLayout from './assets/pages/Home/HomeLayout';
import Home from './assets/pages/Home/Home';
import About from './assets/pages/About/AboutMe';
import AboutLayout from './assets/pages/About/AboutLayout'
import Certificates from './assets/pages/Certificates/Certificates';
import CertificatesLayout from './assets/pages/Certificates/CertificatesLayout';
import Blogs from './assets/pages/Blogs/Blogs'
import BlogsLayout from './assets/pages/Blogs/BlogsLayout'
import Contact from './assets/pages/Contact/Contact'
import ContactLayout from './assets/pages/Contact/ContactLayout'
import UpcomingProjects from './assets/pages/Home/UpcomingProjects';
import SkillLayout from './assets/pages/Skills/SkillLsyaout';
import Skill from './assets/pages/Skills/Skills';
function Temp() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<HomeLayout/>}>
        <Route index element={<Home/>}/>
        {/* nested routes for about */}
        <Route path='about' element={<AboutLayout/>}>
          <Route index element={<About/>}/>
        </Route>
        {/* nested routes for certificates */}
        <Route path='certificates' element={<CertificatesLayout/>}>
          <Route index element={<Certificates/>}/>
        </Route>
        {/* nestes routes for contact */}
        <Route path='contact' element={<ContactLayout/>}>
          <Route index element={<Contact/>}/>
        </Route>
         {/* nestes routes for Blogs */}
         <Route path='blogs' element={<BlogsLayout/>}>
          <Route index element={<Blogs/>}/>

         </Route>
          <Route path='skills' element={<SkillLayout/>}>
          <Route index element={<Skill/>}/>

         </Route>



      </Route>
    )
  )


  return ( 
    <RouterProvider router={router}/>
    // <UpcomingProjects/>
   );
}

export default Temp;