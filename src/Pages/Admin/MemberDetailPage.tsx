import Const from '@Const';
import { Helmet } from 'react-helmet-async';
import MemberDetailMain from './Detail/MemberDetailMain';

const pageName = '관리자-회원 상세';

const MemberDetailPage = () => {
    return (
        <>
            <Helmet>
                <title>{`${Const.Site.title} | ${pageName}`}</title>
                <meta name="description" content={`${pageName} 페이지`} />
            </Helmet>
            <MemberDetailMain />
        </>
    );
};

export default MemberDetailPage;
