import tw from 'twin.macro';

export default {
    MatchLayoutStyle: {
        MainContainer: tw.main`flex-1 w-full`,
        HeaderSection: {
            HeaderDivIcon: tw.div`flex cursor-pointer`,
            HeaderDivIcon1: tw.div`flex flex-col items-center py-2`,
            HeaderPIcon: tw.div`text-xs pt-1`,
        },
        DateSection: {
            DateSectionContainer: tw.section`flex w-full justify-center p-5 bg-white sticky top-0`,
            DateSectionWrapper: tw.div`flex flex-col w-full md:max-w-screen-lg`,
            DateSectionDiv: tw.div`flex w-full`,
            DateSliderSection: tw.div`flex w-full pl-1 items-center justify-center`,
            DateSliderDiv: tw.div`flex flex-col w-full justify-center items-center`,
            DateIndexZeroDiv: tw.div`flex flex-col-reverse w-full items-center justify-center rounded-full bg-blue-400 py-2`,
            TextLargeWhite: tw.div`text-lg text-white`,
            TextSmallWhite: tw.div`text-sm text-white`,
            DateWeeZeroDiv: tw.div`flex flex-col-reverse w-full items-center justify-center rounded-full py-2`,
            TextLargeRed: tw.div`text-lg text-red-700`,
            TextSmallRed: tw.div`text-sm text-red-700`,
            TextLargeBlue: tw.div`text-lg text-blue-700`,
            TextSmallBlue: tw.div`text-sm text-blue-700`,
            TextLarge: tw.div`text-lg`,
            TextSmall: tw.div`text-sm`,
        },
        FilteringSection: {
            FilteringContainer: tw.div`flex w-full h-full pt-5`,
            // FilteringWrapper: tw.div`grid grid-row-1 grid-flow-col gap-2`,
            FilteringSectionContainer: tw.div`flex`,
            FilteringSelectedButton: tw.button`bg-white text-sm text-blue-700 py-1 p-3 rounded-full border border-blue-700 inline-flex items-center`,
        },
        MatchListSection: {
            MatchListContainer: tw.section`flex w-full justify-center overflow-auto`,
            MatchListWrapper: tw.div`flex w-full flex-col divide-y scroll-m-0`,
            MatchInfoContainer: tw.div`flex w-full border-b h-20`,
            MatchInfoTime: tw.div`flex flex-none h-full w-32 pl-5 items-center justify-start`,
            P: tw.p``,
            MatchInfoWrapper: tw.div`flex flex-col grow pl-3 justify-center`,
            MatchTitle: tw.p`text-gray-600 text-base font-semibold`,
            MatchSvg: tw.svg`w-3 h-3`,
            MatchSubInfo: tw.p`flex items-center content-center pl-1 text-gray-400 text-xs`,
            MatchButtonContainer: tw.div`flex flex-none justify-end md:w-28`,
            MatchButtonWrapper: tw.div`flex w-full items-center`,
        },
    },
};
