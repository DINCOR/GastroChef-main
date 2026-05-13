import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import Header from './Common/Header/Header.jsx'
import Bottom from './Common/Bottom/Bottom.jsx'

import MainPage1 from './MainPage/Mainpage1/MainPage1.jsx'
import MainPage2 from './MainPage/Mainpage2/MainPage2.jsx'
import Blog from './Blog/Blog.jsx'
import AboutUs from './AboutUs/AboutUs.jsx'

import ProgramNutrit from './ProgramNutrit/ProgramNutrit.jsx'

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './index.css'


createRoot(document.getElementById('root')).render(
<StrictMode>
    <BrowserRouter>
      <Header />
        <Routes>
            <Route path='/' index element = {<MainPage1/>}/>
            <Route path='MainPage1' element={<MainPage1/>}/>
            <Route path='AboutUs' element={<AboutUs/>}/>
            <Route path='ProgramNutrit' element={<ProgramNutrit/>}/>
    

            <Route path='Blog' element={<Blog/>}/>

        </Routes>  
      <Bottom />
    </BrowserRouter>
</StrictMode>,
)
