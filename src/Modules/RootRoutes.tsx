import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import lodash from 'lodash';
import { ConstRouters } from '@Commons';
import { BlankLayout, AdminLayout } from '@Components';
import { /*PageNotFound,*/ TemporaryMainPage } from '@Pages';

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
                <Route>
                    {lodash.map(ConstRouters.Publish, (element, index) => {
                        const PageComponent = element.Component;
                        return (
                            <Route
                                key={`root-routers-publish-${index}`}
                                path={`/publish${element.pathName}`}
                                element={
                                    <React.Suspense>
                                        <PageComponent />
                                    </React.Suspense>
                                }
                            />
                        );
                    })}
                </Route>
                <Route>
                    {lodash.map(ConstRouters.Match, (element, index) => {
                        const PageComponent = element.Component;
                        return (
                            <Route
                                key={`root-routers-page-${index}`}
                                path={`/match${element.pathName}`}
                                element={
                                    <React.Suspense>
                                        <PageComponent />
                                    </React.Suspense>
                                }
                            />
                        );
                    })}
                </Route>
                <Route element={<AdminLayout />}>
                    {lodash.map(ConstRouters.Admin, (element, index) => {
                        const PageComponent = element.Component;
                        return (
                            <Route
                                key={`root-routers-page-${index}`}
                                path={`/admin${element.pathName}`}
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
                <Route path={`/`} element={<TemporaryMainPage />} />
                {/*임시 메인 end*/}
                {/* <Route path="*" element={<PageNotFound />} /> */}
                {/*<Route path="*" element={<LoginMain />} />*/}
            </Routes>
        </BrowserRouter>
    );
};

export default RootRoutes;
