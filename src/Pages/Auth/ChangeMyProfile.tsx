import { Helmet } from 'react-helmet-async';
import Const from '@Const';
import ChangeMyProfileMain from '@Page/Auth/Detail/ChangeMyProfileMain';

const pageName = `마이페이지 수정`;

const ChangeMyProfile = () => {
    return (
        <>
            <Helmet>
                <title>{`${Const.Site.title} | ${pageName}`}</title>
                <meta name="description" content={`${pageName} 페이지`} />
            </Helmet>

            <ChangeMyProfileMain />
        </>
    );
};

export default ChangeMyProfile;
