import { Helmet } from 'react-helmet-async';
import Const from '@Const';
import RentalMain from './RentalMain';

const pageName = `구장 예약`;

const RentalPage = () => {
    return (
        <>
            <Helmet>
                <title>{`${Const.Site.title} | ${pageName}`}</title>
                <meta name="description" content={`${pageName} 페이지`} />
            </Helmet>
            <RentalMain />
        </>
    );
};

export default RentalPage;
