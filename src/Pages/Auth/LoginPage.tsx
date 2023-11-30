import { Helmet } from 'react-helmet-async';
import Const from '@Const';
const pageName = `로그인`;

const LoginPage = () => {
    return (
        <>
            <Helmet>
                <title>{`${Const.Site.title} | ${pageName}`}</title>
                <meta name="description" content={`${pageName} 페이지`} />
            </Helmet>
        </>
    );
};

export default LoginPage;
