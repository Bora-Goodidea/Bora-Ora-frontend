import tw from 'twin.macro';

export default {
    DefalutLayoutStyle: {
        DefalutMainContainer: tw.div`min-h-screen flex flex-col`,
        SectionContainer: tw.section`flex w-full justify-center`,
        SectionWrapper: tw.div`w-full md:max-w-screen-lg`,
        SectionDiv: tw.div`flex w-full flex-col space-y-5`,
        PrepareButton: tw.button`bg-white text-sm text-blue-600 py-1 p-3 rounded-full border border-blue-600 inline-flex items-center`,
        ItemCenter: tw.div`flex flex-col w-full items-center justify-center`,
        TextXs: tw.span`text-xs`,
    },
    HeaderLayoutStyle: {
        HeaderTabSection: tw.div`flex flex-nowrap items-center h-20 justify-stretch gap-3`,
        HeaderTab: tw.div`flex flex-nowrap items-center`,
        HeaderTitle: tw.div`flex text-lg font-bold`,
        HeaderClickTitle: tw.div`flex text-lg text-gray-500`,
        HeaderIconContainer: tw.div`flex w-full justify-between pt-2`,
        HeaderDivIcon2: tw.div`flex`,
    },
    MainLayoutStyle: {
        MainSectionContainer: tw.section`flex w-full justify-center bg-gray-100 p-5 border-b-2`,
        MainContainer: tw.main`flex-1 w-full space-y-4`,
        MainSlideFigure: tw.figure`relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0`,
        MainEmptyDiv: tw.div``,
        MainImg: tw.img`rounded-2xl`,
        MainFigcaption: tw.figcaption`flex absolute bottom-8 right-10 rounded-full w-24 items-center justify-center backdrop-blur-sm bg-white/30 cursor-pointer`,
        MainP: tw.p`text-white text-lg`,
        ReserContainer: tw.section`flex w-full justify-center sticky top-0 z-20`,
        ReserWrapper: tw.div`flex flex-nowrap w-full justify-end gap-2 border-b py-3 bg-white`,
        ReserSection: tw.div`flex flex-nowrap items-center justify-center gap-2`,
        BtnBlue: tw.div`flex h-2/3 w-5 bg-blue-500 rounded-sm`,
        TextGray: tw.span`text-xs text-gray-400`,
        BtnGray: tw.div`flex h-2/3 w-5 bg-gray-500 rounded-sm`,
        InfoSection: tw.div`flex flex-nowrap w-full items-center justify-between`,
        InfoWrapper: tw.div`flex flex-col`,
        SubTitle: tw.div`flex items-center`,
        // InfoTitle: tw.span`text-md font-bold`,
        SubInfo: tw.div`flex w-full items-center gap-1`,
        TextSmBlack: tw.span`text-sm text-black`,
        TextSmGray: tw.span`text-sm text-gray-400`,
        SubContent: tw.div`flex w-full items-center`,
        ItemSection: tw.div`flex flex-nowrap w-full items-center`,
        ItemContainer: tw.div`flex flex-col w-full`,
    },
    FilteringLayoutStyle: {
        FilteringButton: tw.button`bg-white text-sm text-gray-400 py-1 p-3 rounded-full border inline-flex items-center`,
        FilteringSvg4: tw.svg`w-4 h-4`,
        FilteringSvg5: tw.svg`w-5 h-5`,
        FilteringSvg6: tw.svg`w-6 h-6`,
        Span: tw.span``,
    },
    ModalLayout: {
        ModalChildren: {
            ModalSection: tw.div`w-full`,
            ModalTitle: tw.div`w-full text-sm pl-5`,
            ModalFlexTitle: tw.div`flex flex-col w-full pt-3`,
            ModalContentSection: tw.div`w-full pt-3`,
            ModalContent: tw.div`w-full pl-10 border-b cursor-pointer`,
            ModalItemList: tw.div`flex pl-10 py-3 border-b`,
            ModalItem: tw.p`text-xs py-3`,
        },
    },
};
