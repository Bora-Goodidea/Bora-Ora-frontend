import { Helmet } from 'react-helmet-async';
import Const from '@Const';
import MatchMain from './MatchMain';

const pageName = `매치리스트`;

const MatchPage = () => {
    return (
        <>
            <Helmet>
                <title>{`${Const.Site.title} | ${pageName}`}</title>
                <meta name="description" content={`${pageName} 페이지`} />
            </Helmet>
            <MatchMain />
        </>
    );
};

export default MatchPage;
