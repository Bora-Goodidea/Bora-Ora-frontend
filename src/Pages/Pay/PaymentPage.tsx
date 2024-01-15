import { Helmet } from 'react-helmet-async';
import Const from '@Const';
import PaymentMain from './PaymentMain';

const pageName = `결제`;

const RentalPage = () => {
    return (
        <>
            <Helmet>
                <title>{`${Const.Site.title} | ${pageName}`}</title>
                <meta name="description" content={`${pageName} 페이지`} />
            </Helmet>
            <PaymentMain />
        </>
    );
};

export default RentalPage;
