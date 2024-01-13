import { Helmet } from 'react-helmet-async';
import Const from '@Const';
import StadiumListMain from './Detail/StadiumListMain';

const pageName = '관리자-구장 리스트';

const StadiumListPage = () => {
    return (
        <>
            <Helmet>
                <title>{`${Const.Site.title} | ${pageName}`}</title>
                <meta name="description" content={`${pageName} 페이지`} />
            </Helmet>
            <StadiumListMain />
        </>
    );
};

export default StadiumListPage;
