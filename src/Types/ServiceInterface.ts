import { BaseDataCodeStep1Item, BaseDataCodeStep2Item } from '@CommonType';

export interface BaseDataResultInterface {
    code: {
        step1: Array<BaseDataCodeStep1Item>;
        step2: Array<BaseDataCodeStep2Item>;
    };
}
