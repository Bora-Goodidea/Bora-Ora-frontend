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
        ModalTitle: tw.div`w-full text-sm pl-5`,
        ModalFlexTitle: tw.div`flex flex-col w-full pt-3`,
        ModalContentSection: tw.div`w-full pt-3`,
        ModalContent: tw.div`w-full pl-10 border-b cursor-pointer`,
        ModalItemList: tw.div`flex pl-10 py-3 border-b`,
        ModalItem: tw.p`text-xs py-3`,
        ModalListSection: tw.div`flex flex-nowrap w-full`,
        ModalListTitle: tw.div`w-full text-xs pl-5`,
        SliderSection: tw.div`flex pt-5`,
        SliderContainer: tw.div`flex flex-col pt-5`,
        SliderIconSection: tw.div`flex justify-center h-10`,
        SliderIcon: tw.img`w-8 h-6`,
        SliderIconName: tw.div`flex justify-center text-xs`,
        TeamSection: tw.div`flex flex-nowrap w-full gap-10 pl-10`,
        TeamIconSection: tw.div`flex justify-center`,
        ModalItemSection: tw.div`w-full pt-10`,
        ResvSection: tw.div`flex pl-2`,
        ModalDivideBar: tw.div`w-full text-sm pl-5 border-b`,
        ModalSubSection: tw.div`flex flex-nowrap w-full text-sm pl-5`,
        ModalSubText: tw.div`pl-2`,
        ModalSubContainer: tw.div`w-full pt-1`,
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
        Wrapper: tw.div`w-full`,
        SelectLabel: tw.label`block mb-2 text-xs font-medium text-gray-900`,
        Select: tw.select`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`,
        SelectButtonSection: tw.div`flex flex-nowrap w-full gap-1`,
        FourthDivide: tw.div`flex w-1/4`,
    },
    SvgStyle: {
        Svg3: tw.svg`w-3 h-3`,
        Svg4: tw.svg`w-4 h-4`,
        Svg5: tw.svg`w-5 h-5`,
        Svg6: tw.svg`w-6 h-6`,
        GraySvg4: tw.svg`w-4 h-4 text-gray-500`,
        HoverGraySvg6: tw.svg`w-6 h-6 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer`,
    },
    TextStyle: {
        TextLarge: tw.div`text-lg`,
        TextLargeRed: tw.div`text-lg text-red-700`,
        TextLargeBlue: tw.div`text-lg text-blue-700`,
        TextLargeWhite: tw.div`text-lg text-white`,
        TextSmall: tw.div`text-sm`,
        TextSmallRed: tw.div`text-sm text-red-700`,
        TextSmallBlue: tw.div`text-sm text-blue-700`,
        TextSmallWhite: tw.div`text-sm text-white`,
    },
    OraHeaderStyle: {
        HeaderSection: tw.div`flex items-center space-x-3 rtl:space-x-reverse cursor-pointer`,
        HeaderContainer: tw.div`flex flex-nowrap md:order-2`,
        HeaderWrapper: tw.div`relative items-center flex flex-nowrap`,
        HiddenHeader: tw.div`hidden md:flex md:absolute inset-y-0 start-0 items-center ps-3 pointer-events-none`,
        SearchIcon: tw.span`sr-only`,
        HeaderSubSection: tw.div`flex flex-nowrap pl-1`,
        BackgroundSection: tw.div`bg-gray-200 w-full md:max-w-screen-lg`,
        BackgroundWrapper: tw.div`flex flex-nowrap items-center justify-between py-1`,
        HeaderText: tw.span`self-center text-2xl font-semibold whitespace-nowrap`,
        NavSection: tw.nav`bg-white`,
        HeaderInput: tw.input`p-2 ps-10 hidden md:block md:w-[300px] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500`,
        DropdownSection: tw.div`absolute rounded shadow bg-white overflow-hidden peer-checked:flex flex-col w-full mt-1 border border-gray-200 p-5 z-50`,
        DropdownContainer: tw.div`flex flex-col gap-4 h-[50vh] overflow-scroll`,
        DropdownWrapper: tw.div`flex flex-nowrap gap-3`,
        TextSmPx4: tw.div`text-sm px-4`,
        DropdownAreaSection: tw.div`flex flex-nowrap gap-2 px-4`,
        AreaItem: tw.div`border rounded-full px-2 text-sm text-gray-500`,
        SearchText: tw.div`flex flex-col gap-3`,
        NewGround: tw.div`flex flex-col gap-2 px-4`,
        GroundItem: tw.div`text-sm text-gray-500 border-b-2 py-3`,
    },
    OraFooterStyle: {
        FooterSection: tw.section`flex w-full justify-center bg-green-500`,
        FooterContainer: tw.div`flex flex-nowrap h-52`,
        FooterWhiteText: tw.p`text-lg text-white pt-10`,
        FooterSmText: tw.p`text-sm pt-2`,
        FooterBtnSection: tw.div`flex items-center pt-5`,
        FooterWhiteBtn: tw.button`w-20 bg-white text-gray-600 text-sm py-1 px-3 rounded`,
        FooterImgSection: tw.div`flex flex-col w-1/2 items-end justify-end`,
        FooterImg: tw.img`w-60`,
        BlackBackground: tw.section`flex w-full justify-center bg-black`,
        FooterWrapper: tw.div`flex flex-nowrap py-10`,
        FooterItemSection: tw.div`flex flex-nowrap w-1/2 justify-start gap-10`,
        FooterTitle: tw.div`text-white text-sm py-2`,
        FooterItem: tw.div`text-gray-500 text-xs py-1`,
        FooterRightSection: tw.div`flex flex-col w-1/2`,
        FooterRightContainer: tw.div`text-gray-500 text-xs py-2`,
    },
    Sweetalert: {
        Title: tw.p`text-2xl`,
        Content: tw.p`text-sm whitespace-pre-line text-left`,
    },
};
