import { TwMacroSizeType } from '@Type/StylesInterface';
import tw, { TwStyle } from 'twin.macro';

export default {
    PySize: (size: TwMacroSizeType): TwStyle =>
        ({
            xs: tw`py-1`,
            sm: tw`py-2`,
            md: tw`py-3`,
            lg: tw`py-4`,
            xl: tw`py-5`,
        })[size],
};
