import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Const from '@Const';
import EmailRegisterMain from '@Page/Auth/Detail/EmailRegisterMain';

const pageName = `이메일 인증`;

const initializeState = {
    loading: false,
    joinup: {
        email: '',
        password: '',
        passwordConfirm: '',
        name: '',
        birth: {
            year: '',
            month: '',
            day: '',
        },
    },
    checkState: {
        status: false,
        type: null,
        message: '',
    },
};
const EmailAuthPage = () => {
    const enterInputRef = useRef<HTMLInputElement[]>([]);

    const [pageState /*setPageState*/] = useState<{
        loading: boolean;
        joinup: {
            email: string;
            password: string;
            passwordConfirm: string;
            name: string;
            birth: {
                year: string;
                month: string;
                day: string;
            };
        };
        checkState: {
            status: boolean;
            type: null | string | 'email' | 'password' | 'passwordConfirm' | 'name';
            message: string;
        };
    }>(initializeState);

    return (
        <>
            <Helmet>
                <title>{`${Const.Site.title} | ${pageName}`}</title>
                <meta name="description" content={`${pageName} 페이지`} />
            </Helmet>

            <EmailRegisterMain
                Loading={pageState.loading}
                InputValue={pageState.joinup}
                CheckState={pageState.checkState}
                EnterRef={enterInputRef}
            />
        </>
    );
};

export default EmailAuthPage;
