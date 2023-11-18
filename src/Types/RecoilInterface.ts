import { BaseDataCodeStep1Item, BaseDataCodeStep2Item, CommonCodesItemInterface, CommonSimplyTimeFormatInterface } from '@CommonType';

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
    uid: string;
    rootData: {
        code: {
            step1: Array<BaseDataCodeStep1Item>;
            step2: Array<BaseDataCodeStep2Item>;
        };
    };
}

// 레이아웃 스테이트
export interface LayoutStateInterface {
    loading: boolean;
    mainAlert: {
        state: boolean;
        type: string | `default` | `move`;
        action: string;
        message: string;
    };
}

// 회원 리스트 아이템
export interface MessengerUserListItemInterface {
    uid: string;
    type: CommonCodesItemInterface;
    level: CommonCodesItemInterface;
    status: CommonCodesItemInterface;
    email: string;
    nickname: string;
    profile: {
        image: string;
    };
    active: {
        state: `Y` | `N`;
        updated_at: CommonSimplyTimeFormatInterface | null;
    };
    created_at: CommonSimplyTimeFormatInterface;
    updated_at: CommonSimplyTimeFormatInterface;
}

// 사용자 리스트
export interface MessengerUserListInterface {
    loading: boolean;
    users: Array<MessengerUserListItemInterface>;
}
