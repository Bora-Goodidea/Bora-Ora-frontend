import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import lodash from 'lodash';
import { ConstRouters } from '@Commons';
import { BlankLayout } from '@Components';
import { /*PageNotFound,*/ TemporaryMainPage } from '@Pages';
import { LoginMain } from '@Page/Auth/Detail';

const RootRoutes = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route element={<BlankLayout />}>
                    {lodash.map(ConstRouters.Common, (element, index) => {
                        const PageComponent = element.Component;
                        return (
                            <Route
                                key={`root-routers-auth-${index}`}
                                path={`/common${element.pathName}`}
                                element={
                                    <React.Suspense>
                                        <PageComponent />
                                    </React.Suspense>
                                }
                            />
                        );
                    })}
                </Route>
                <Route element={<BlankLayout />}>
                    {lodash.map(ConstRouters.Auth, (element, index) => {
                        const PageComponent = element.Component;
                        return (
                            <Route
                                key={`root-routers-auth-${index}`}
                                path={`/auth${element.pathName}`}
                                element={
                                    <React.Suspense>
                                        <PageComponent />
                                    </React.Suspense>
                                }
                            />
                        );
                    })}
                </Route>
                {/*임시 메인 start*/}
                <Route path={`/temp`} element={<TemporaryMainPage />} />
                {/*임시 메인 end*/}
                {/* <Route path="*" element={<PageNotFound />} /> */}
                <Route path="*" element={<LoginMain />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RootRoutes;
