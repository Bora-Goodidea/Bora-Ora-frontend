import { BaseDataCodeStep1Item, BaseDataCodeStep2Item } from '@CommonType';

// Root State
export interface RootStateInterface {
    appState: boolean;
    rootData: {
        code: {
            step1: Array<BaseDataCodeStep1Item>;
            step2: Array<BaseDataCodeStep2Item>;
        };
    };
}
