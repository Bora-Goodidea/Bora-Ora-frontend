import Const from '@Const';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import StadiumDetailMain from './Detail/StadiumDetailMain';

const pageName = '관리자-구장 상세';

const StadiumDetailPage = () => {
    return (
        <>
            <Helmet>
                <title>{`${Const.Site.title} | ${pageName}`}</title>
                <meta name="description" content={`${pageName} 페이지`} />
            </Helmet>
            <StadiumDetailMain />
        </>
    );
};

export default StadiumDetailPage;
