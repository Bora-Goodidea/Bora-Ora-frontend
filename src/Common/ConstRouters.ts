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
        {
            page: `auth-login`,
            name: `로그아웃`,
            pathName: `/logout`,
            Component: React.lazy(() => import('@Page/Auth/LogoutPage')),
        },
        {
            page: `auth-register`,
            name: `회원가입`,
            pathName: `/register`,
            Component: React.lazy(() => import('@Page/Auth/RegisterPage')),
        },
        {
            page: `auth-password-reset`,
            name: `패스워드 리셋`,
            pathName: `/password-reset`,
            Component: React.lazy(() => import('@Page/Auth/PasswordResetPage')),
        },
        {
            page: `auth-password-change`,
            name: `패스워드 변경`,
            pathName: `/:ResetCode/password-change`,
            Component: React.lazy(() => import('@Page/Auth/PasswordChangePage')),
        },
        {
            page: `auth-email-auth`,
            name: `이메일 인증`,
            pathName: `/:AuthCode/email-auth`,
            Component: React.lazy(() => import('@Page/Auth/EmailAuthPage')),
        },
    ],
};
