import tw, { styled } from 'twin.macro';
import { ColorType, TwMacroSizeType } from '@Type/StylesInterface';
import ConstStyle from '@Common/ConstStyle';

export default {
    OraModalStyle: {
        ModalWapper: tw.div`relative z-50`,
        BackGroundBlur: tw.div`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity`,
        FixedWapper: tw.div`fixed inset-0 z-10 w-screen overflow-y-auto`,
        FlexWapper: tw.div`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0`,
        RelativeWapper: tw.div`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg`,
        ContentWapper: tw.div`bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4`,
        Contents: tw.div`sm:flex sm:items-start`,
        ButtonWapper: tw.div`bg-gray-50 px-4 py-3 sm:flex sm:px-6`,
    },
    OramButtonStyle: {
        DefaultButton: styled.button(({ Color, Height }: { Color?: ColorType; Height: TwMacroSizeType }) => {
            const returnTw = [
                tw`mt-3 inline-flex w-full justify-center rounded-md px-2 text-sm font-semibold shadow-sm ring-1 ring-inset sm:mt-0`,
            ];

            returnTw.push(ConstStyle.PySize(Height));

            if (Color === 'red') {
                returnTw.push(tw`bg-red-600 ring-red-300 text-white hover:bg-red-50`);
            } else if (Color === 'blue') {
                returnTw.push(tw`bg-blue-600 ring-blue-300 text-white hover:bg-blue-400`);
            } else if (Color === 'gray') {
                returnTw.push(tw`bg-gray-300 ring-gray-300 text-gray-500 hover:bg-gray-50`);
            } else {
                returnTw.push(tw`bg-white ring-gray-300 text-black hover:bg-gray-50`);
            }

            return returnTw;
        }),
    },
    OraSelectStyle: {
        Wapper: tw.div`w-full`,
        SelectLabel: tw.label`block mb-2 text-xs font-medium text-gray-900`,
        Select: tw.select`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`,
        SelectButtonSection: tw.div`flex flex-nowrap w-full gap-1`,
        FourthDivide: tw.div`flex w-1/4`,
    },
    SvgStyle: {
        Svg4: tw.svg`w-4 h-4`,
        Svg5: tw.svg`w-5 h-5`,
        Svg6: tw.svg`w-6 h-6`,
        GraySvg4: tw.svg`w-4 h-4 text-gray-500`,
        HoverGraySvg6: tw.svg`w-6 h-6 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer`,
    },
    OraHeaderStyle: {
        HeaderSection: tw.div`flex items-center space-x-3 rtl:space-x-reverse cursor-pointer`,
        HeaderContainer: tw.div`flex flex-nowrap md:order-2`,
        HeaderWrapper: tw.div`relative items-center flex flex-nowrap`,
        HiddenHeader: tw.div`hidden md:flex md:absolute inset-y-0 start-0 items-center ps-3 pointer-events-none`,
        SearchIcon: tw.span`sr-only`,
        HeaderSubSection: tw.div`flex flex-nowrap pl-1`,
    },
};
