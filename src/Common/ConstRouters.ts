import React from 'react';

export default {
    Common: [
        {
            page: `default-page`,
            name: `기본 페이지`,
            pathName: `/default`,
            Component: React.lazy(() => import('@Page/DefaultPage')),
        },
        {
            page: `not-found`,
            name: `not-found`,
            pathName: `/not-found`,
            Component: React.lazy(() => import('@Page/Common/PageNotFound')),
        },
        {
            page: `under-construction`,
            name: `서버 작업중`,
            pathName: `/under-construction`,
            Component: React.lazy(() => import('@Page/Common/UnderConstructionPage')),
        },
    ],
    Publish: [
        {
            page: `main`,
            name: `퍼블리싱-메인`,
            pathName: `/main`,
            Component: React.lazy(() => import('@Page/Publish/MainPage')),
        },
        {
            page: `login`,
            name: `퍼블리싱-로그인`,
            pathName: `/login`,
            Component: React.lazy(() => import('@Page/Publish/LoginPage')),
        },
        {
            page: `email-register`,
            name: `퍼블리싱-이메일 회원가입`,
            pathName: `/email-register`,
            Component: React.lazy(() => import('@Page/Publish/EmailRegisterPage')),
        },
    ],
};
