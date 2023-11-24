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
            pathName: `/messenger`,
            Component: React.lazy(() => import('@Page/Common/PageNotFound')),
        },
        {
            page: `under-construction`,
            name: `서버 작업중`,
            pathName: `/under-construction`,
            Component: React.lazy(() => import('@Page/Common/UnderConstructionPage')),
        },
    ],
    Auth: [
        {
            page: `auth-login`,
            name: `로그인`,
            pathName: `/login`,
            Component: React.lazy(() => import('@Page/Auth/LoginPage')),
        },
    ],
    Publish: [
        {
            page: `main`,
            name: `퍼블리싱-메인`,
            pathName: `/main`,
            Component: React.lazy(() => import('@Page/Publish/MainPage')),
        },
    ],
};
