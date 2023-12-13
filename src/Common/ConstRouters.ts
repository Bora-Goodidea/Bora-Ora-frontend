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
            page: `default-layout`,
            name: `퍼블리싱-기본-레이아웃`,
            pathName: `/default-layout`,
            Component: React.lazy(() => import('@Page/Publish/DefaultLayout')),
        },
        {
            page: `main`,
            name: `퍼블리싱-메인`,
            pathName: `/main`,
            Component: React.lazy(() => import('@Page/Publish/MainPage')),
        },
        {
            page: `rental`,
            name: `퍼블리싱-구장 예약`,
            pathName: `/rental`,
            Component: React.lazy(() => import('@Page/Publish/RentalPage')),
        },
        {
            page: `rental-detail`,
            name: `퍼블리싱-구장 예약 상세`,
            pathName: `/rental-detail`,
            Component: React.lazy(() => import('@Page/Publish/RentalDetailPage')),
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
        {
            page: `register-complete`,
            name: `퍼블리싱-회원가입 완료`,
            pathName: `/register-complete`,
            Component: React.lazy(() => import('@Page/Publish/RegisterComplete')),
        },
        {
            page: `my-page`,
            name: `퍼블리싱-마이 페이지`,
            pathName: `/my-page`,
            Component: React.lazy(() => import('@Page/Publish/MyPagePage')),
        },
        {
            page: `change-my-profile`,
            name: `퍼블리싱-마이 페이지`,
            pathName: `/change-my-profile`,
            Component: React.lazy(() => import('@Page/Publish/ChangeProfilePage')),
        },
        {
            page: `match-detail`,
            name: `퍼블리싱-상세 페이지`,
            pathName: `/match-detail`,
            Component: React.lazy(() => import('@Page/Publish/MatchDetailPage')),
        },
        {
            page: `admin-layout`,
            name: `퍼블리싱-어드민-레이아웃`,
            pathName: `/admin-layout`,
            Component: React.lazy(() => import('@Page/Publish/Admin/AdminLayoutPage')),
        },
        {
            page: `admin-layout`,
            name: `퍼블리싱-어드민-회원 리스트`,
            pathName: `/admin-member-list`,
            Component: React.lazy(() => import('@Page/Publish/Admin/AdminMemberListPage')),
        },
    ],
    Match: [
        {
            page: `match`,
            name: `메인`,
            pathName: `/list`,
            Component: React.lazy(() => import('@Page/Match/MatchPage')),
        },
    ],
};
