import { atom } from 'recoil';
import { RootStateInterface } from '@RecoilInterface';

export const AtomRootState = atom<RootStateInterface>({
    key: `app/RootState`,
    default: {
        appState: false,
        rootData: {
            code: {
                step1: [],
                step2: [],
            },
        },
    },
});
