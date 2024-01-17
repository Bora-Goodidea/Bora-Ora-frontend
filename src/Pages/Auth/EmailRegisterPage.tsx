import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Const from '@Const';
import EmailRegisterMain from '@Page/Auth/Detail/EmailRegisterMain';

const pageName = `이메일 인증`;

const initializeState = {
    loading: false,
    genderSelect: [],
    birthdaySelect: {
        year: [],
        month: [],
        day: [],
    },
    joinup: {
        email: '',
        password: '',
        passwordConfirm: '',
        name: '',
        gender: '',
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

    const [pageState, setPageState] = useState<{
        loading: boolean;
        genderSelect: Array<{ label: string; value: string }>;
        birthdaySelect: {
            year: number[];
            month: number[];
            day: number[];
        };
        joinup: {
            email: string;
            password: string;
            passwordConfirm: string;
            name: string;
            gender: string;
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

    const joinupHandler = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target;
        setPageState(prev => ({
            ...prev,
            joinup: {
                ...prev.joinup,
                [name]: value,
            },
        }));
    };

    return (
        <>
            <Helmet>
                <title>{`${Const.Site.title} | ${pageName}`}</title>
                <meta name="description" content={`${pageName} 페이지`} />
            </Helmet>

            <EmailRegisterMain
                Loading={pageState.loading}
                GenderSelect={pageState.genderSelect}
                BirthdaySelect={pageState.birthdaySelect}
                InputValue={pageState.joinup}
                CheckState={pageState.checkState}
                EnterRef={enterInputRef}
                JoinupHandler={e => joinupHandler(e)}
            />
        </>
    );
};

export default EmailAuthPage;
