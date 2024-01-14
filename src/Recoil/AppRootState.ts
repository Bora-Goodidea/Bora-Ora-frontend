import { atom } from 'recoil';
import { RootStateInterface } from '@RecoilInterface';

export const AtomRootState = atom<RootStateInterface>({
    key: `app/RootState`,
    default: {
        appState: false,
        appCheckStatus: {
            server: false,
            notice: false,
            data: false,
            login: false,
        },
        systemNotice: '',
        loginState: false,
        user: {
            uid: '',
            nickname: '',
            profileImage: '',
        },
        rootData: {
            code: {
                step1: [],
                step2: [],
            },
        },
    },
});
