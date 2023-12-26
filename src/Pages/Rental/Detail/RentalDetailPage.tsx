import { Helmet } from 'react-helmet-async';
import Const from '@Const';
import RentalDetailMain from './RentalDetailMain';

const pageName = `구장 상세`;

const RentalPage = () => {
    return (
        <>
            <Helmet>
                <title>{`${Const.Site.title} | ${pageName}`}</title>
                <meta name="description" content={`${pageName} 페이지`} />
            </Helmet>
            <RentalDetailMain />
        </>
    );
};

export default RentalPage;
