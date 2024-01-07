import { Helmet } from 'react-helmet-async';
import Const from '@Const';
import EmailRegister from '@Page/Auth/Detail/EmailRegisterMain';

const pageName = `이메일 인증`;

const EmailAuthPage = () => {
    return (
        <>
            <Helmet>
                <title>{`${Const.Site.title} | ${pageName}`}</title>
                <meta name="description" content={`${pageName} 페이지`} />
            </Helmet>

            <EmailRegister />
        </>
    );
};

export default EmailAuthPage;
