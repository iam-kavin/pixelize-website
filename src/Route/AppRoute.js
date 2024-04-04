import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import HomePage from '../Pages/Home/HomePage';
import ServicePage from '../Pages/Service/ServicePage';


const AppRoute = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [toggle, setToggle] = useState(true);
    // const [isFetched, setIsFetched] = useState(true);
    const isFetched = true;




    return (
        <>
            <React.Fragment>
                <div className='main_wrap'>
                    <Routes>
                        {/* <Route path="/" element={<UserGetApi isFetched={(fetch) => setIsFetched(fetch)} />} /> */}
                        {/* {isFetched ? */}
                        <>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/home" element={<HomePage />} />
                            <Route path="/service" element={<ServicePage />} />
                            {/* <Route path="/formType" element={<FormType />} /> */}
                            <Route path="*" element={<Navigate to="/" />} />
                        </> :
                        <Route />
                    </Routes>
                </div>
            </React.Fragment >
        </>
    );
};

export default AppRoute;