import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
// import TopBar from '../Pages/TopBar/TopBar';
// import { Box } from '@mui/material';

import Home from "pages/Home";
import NotFound from "pages/NotFound";
import DesktopOne from "pages/DesktopOne";
import HomePage from "pages/HomePage";
import WorkPage from "pages/WorkPage";
import SignUpPage from "pages/SignUpPage";
import ServicePage from "pages/ServicePage";
import ContactUs from 'pages/ContactUs';


const AppRoute = () => {

    return (
        <div>   
            {/* <TopBar /> */}
            <Routes>
                {/* <Route path="/" element={<UserGetApi isFetched={(fetch) => setIsFetched(fetch)} />} /> */}
                {/* {isFetched ? */}
                <>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/homePage" element={<HomePage />} />
                    <Route path="/desktopOne" element={<DesktopOne />}/>
                    <Route path="/servicePage" element={<ServicePage />} />
                    <Route path='/whyUs' element={<ServicePage />} />
                    <Route path='/ourWork' element={<WorkPage />} />
                    <Route path='/whatWeDo' element={<ServicePage />} />
                    <Route path='/error' element={<NotFound />}/>
                    <Route path='/contactUs' element={<ContactUs />}/>
                    <Route path="*" element={<Navigate to="/error" />} />
                </> :
                <Route />
            </Routes>
        </div>
    );
};

export default AppRoute;