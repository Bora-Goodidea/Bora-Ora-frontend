import { BaseDataCodeStep1Item, BaseDataCodeStep2Item } from '@CommonType';

// Root State
export interface RootStateInterface {
    appState: boolean;
    appCheckStatus: {
        server: boolean;
        notice: boolean;
        data: boolean;
        login: boolean;
    };
    systemNotice: string;
    loginState: boolean;
    user: {
        uid: string;
        nickname: string;
        profileImage: string;
    };
    rootData: {
        code: {
            step1: Array<BaseDataCodeStep1Item>;
            step2: Array<BaseDataCodeStep2Item>;
        };
    };
}
