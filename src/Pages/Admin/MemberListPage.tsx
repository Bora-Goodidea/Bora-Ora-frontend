import { Helmet } from 'react-helmet-async';
import Const from '@Const';
import MemberListMain from './Detail/MemberListMain';

const pageName = '관리자-회원 리스트';

const MemberListPage = () => {
    return (
        <>
            <Helmet>
                <title>{`${Const.Site.title} | ${pageName}`}</title>
                <meta name="description" content={`${pageName} 페이지`} />
            </Helmet>
            <MemberListMain />
        </>
    );
};

export default MemberListPage;
