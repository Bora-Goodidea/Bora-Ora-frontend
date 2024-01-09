import { Helmet } from 'react-helmet-async';
import Const from '@Const';
import MyPage from '@Page/Auth/Detail/MyProfileMain';
const pageName = `마이 페이지`;

const LoginPage = () => {
    return (
        <>
            <Helmet>
                <title>{`${Const.Site.title} | ${pageName}`}</title>
                <meta name="description" content={`${pageName}`} />
            </Helmet>

            <MyPage />
        </>
    );
};

export default LoginPage;
