import tw from 'twin.macro';

export default {
    AdminLayoutStyle: {
        AdminLayoutContainer: tw.div`min-h-screen h-screen flex flex-col dark:bg-gray-700`,
    },
    AdminNavStyle: {
        NavContainer: tw.nav`order-first w-52 bg-indigo-50 p-2 dark:bg-gray-700 overflow-y-auto`,
        MenuListWrapper: tw.ul`space-y-2 font-medium`,
        MenuItemWrapper: tw.li``,
        MenuItemContainer: tw.div`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer`,
        MenuItemDashboardIconWrapper: tw.svg`w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`,
        MenuItemDashboardTitle: tw.span`ms-3`,
        MenuItemNormalIconWrapper: tw.svg`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`,
        MenuItemNormalTitle: tw.span`flex-1 ms-3 whitespace-nowrap`,
    },
    AdminFooterStyle: {
        FooterContainer: tw.footer`bg-indigo-50 border-t border-indigo-300 p-2 dark:bg-gray-700`,
        FooterWrapper: tw.div`w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between`,
        FooterCopy: tw.span`text-sm text-gray-500 sm:text-center dark:text-gray-400`,
    },
    AdminHeaderStyle: {
        Container: tw.header`bg-indigo-50 border-b border-indigo-300 p-2 dark:bg-gray-700`,
        Wrapper: tw.div`flex flex-wrap items-center justify-between px-4`,
        TitleWrapper: tw.div`flex items-center`,
        Title: tw.span`self-center text-2xl font-semibold whitespace-nowrap dark:text-white`,
        ButtonWrapper: tw.div`hidden w-full md:block md:w-auto`,
        ButtonListWrapper: tw.ul`font-medium flex flex-col border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`,
        ButtonItemWrapper: tw.li``,
        ButtonContent: tw.div`block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`,
    },
    ContentWrapperStyle: {
        ContentContainer: tw.div`flex-1 flex flex-row overflow-y-hidden`,
        MainContainer: tw.main`flex-1 bg-indigo-50 border-l border-r border-indigo-300 text-xs overflow-y-auto dark:bg-gray-700`,
    },
    ContentSectionMemberListStyle: {
        ContentContainer: tw.div`relative flex-col`,
        ContentHeadContainer: tw.div`flex flex-nowrap w-full h-8 justify-center text-xs text-gray-700 bg-gray-500 dark:bg-gray-700 dark:text-gray-100 sticky top-0 z-50`,
        ContentHeadInputWrapper: tw.div`flex w-1/12 items-center justify-center border-l border-r border-b dark:bg-gray-500 dark:border-gray-600`,
        ContentHeadInputContainer: tw.div`flex items-center`,
        ContentHeadCheckbox: tw.input`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-500 dark:border-gray-600`,
        ContentHeadCheckboxLabel: tw.label`sr-only`,
        ContentHeadTitle: tw.div`flex w-1/12 items-center justify-center border-r border-b dark:bg-gray-500 dark:border-gray-600`,
        ContentBodyWrapper: tw.div`flex flex-col justify-center text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400`,
        ContentBodyContainer: tw.div`flex flex-nowrap w-full h-8 justify-center text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 cursor-pointer`,
        ContentBodyInputWrapper: tw.div`flex w-1/12 items-center justify-center border-l border-r border-b`,
        ContentBodyInputContainer: tw.div`flex items-center`,
        ContentBodyCheckbox: tw.input`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`,
        ContentBodyText: tw.div`flex w-1/12 items-center justify-center border-r border-b`,
        ContentBodyButtons: tw.div`flex gap-1`,
        ContentBodyButtonBlue: tw.button`bg-blue-500 text-white font-bold py-1 px-3 rounded hover:bg-blue-700 dark:bg-gray-300 dark:border-gray-600 dark:hover:bg-blue-700`,
        ContentBodyButtonRed: tw.button`bg-blue-500 text-white font-bold py-1 px-3 rounded hover:bg-blue-700 dark:bg-red-300 dark:border-gray-600 dark:hover:bg-red-700`,
    },
    ContentSectionMemberDetailStyle: {
        ContentWrapper: tw.div`flex w-full h-full items-baseline justify-center`,
        ContentContainer: tw.div`flex flex-col w-full max-w-3xl justify-center p-5 shadow-2xl`,
        DetailTitleWrapper: tw.div`flex w-full`,
        DetailTitleContainer: tw.div`flex`,
        DetailTitle: tw.span`text-lg text-gray-900 dark:text-white`,
        DetailBodyWrapper: tw.div`flex flex-col w-full items-center justify-center`,
        DetailBodyContentWrapper: tw.div`flex w-full items-center justify-center px-2`,
        DetailBodyContentContainer: tw.div`flex flex-col w-full p-5`,
        DetailBodyProfileWrapper: tw.div`flex flex-col gap-6 mb-6 md:grid-cols-2`,
        DetailBodyProfileContainer: tw.div`flex w-full items-center justify-center`,
        DetailBodyProfile: tw.img`h-auto max-w-lg rounded-lg`,
        DetailBodyProfileEditContainer: tw.div``,
        DetailBodyProfileEditLabel: tw.label`block mb-2 text-sm font-medium text-gray-900 dark:text-white`,
        DetailBodyProfileEditFile: tw.input`block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400`,
        DetailBodyInfoContainer: tw.div`grid gap-6 mb-6 md:grid-cols-2`,
        DetailBodyInfoContainer1Col: tw.div`mb-6`,
        DetailBodyInfoItemContainer: tw.div``,
        DetailBodyInfoItemTitle: tw.label`block mb-2 text-sm font-medium text-gray-900 dark:text-white`,
        DetailBodyInfoItemEdit: tw.input`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`,
        DetailBodyInfoItemSelect: tw.select`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`,
        DetailButtonsContainer: tw.div`flex flex-nowrap w-full gap-8`,
        DetailButtonsWrapper: tw.div`flex w-1/2`,
        DetailButton: tw.button`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`,
    },
    ContentSectionStadiumListStyle: {
        ContentContainer: tw.div`relative flex-col`,
        ContentHeadContainer: tw.div`flex flex-nowrap w-full h-8 justify-center text-xs text-gray-700 bg-gray-500 dark:bg-gray-700 dark:text-gray-100 sticky top-0 z-50`,
        ContentHeadInputWrapper: tw.div`flex w-10 items-center justify-center border-l border-r border-b dark:bg-gray-500 dark:border-gray-600`,
        ContentHeadInputContainer: tw.div`flex items-center`,
        ContentHeadCheckbox: tw.input`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-500 dark:border-gray-600`,
        ContentHeadCheckboxLabel: tw.label`sr-only`,
        ContentHeadTitleW1: tw.div`flex w-1/12 items-center justify-center border-r border-b dark:bg-gray-500 dark:border-gray-600`,
        ContentHeadTitleW2: tw.div`flex w-2/12 items-center justify-center border-r border-b dark:bg-gray-500 dark:border-gray-600`,
        ContentHeadTitleW3: tw.div`flex w-3/12 items-center justify-center border-r border-b dark:bg-gray-500 dark:border-gray-600`,
        ContentHeadTitleW10: tw.div`flex w-10 items-center justify-center border-r border-b dark:bg-gray-500 dark:border-gray-600`,
        ContentBodyWrapper: tw.div`flex flex-col justify-center text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400`,
        ContentBodyContainer: tw.div`flex flex-nowrap w-full h-8 justify-center text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 cursor-pointer`,
        ContentBodyInputWrapper: tw.div`flex w-10 items-center justify-center border-l border-r border-b`,
        ContentBodyInputContainer: tw.div`flex items-center`,
        ContentBodyCheckbox: tw.input`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`,
        ContentBodyCheckboxLabel: tw.label`sr-only`,
        ContentBodyTextW1: tw.div`flex w-1/12 items-center justify-center border-r border-b`,
        ContentBodyTextW2: tw.div`flex w-2/12 items-center justify-center border-r border-b`,
        ContentBodyTextW3: tw.div`flex w-3/12 items-center justify-center border-r border-b`,
        ContentBodyTextW10: tw.div`flex w-10 items-center justify-center border-r border-b`,
        ContentBodyButtons: tw.div`flex gap-2`,
        ContentBodyButtonBlue: tw.button`bg-blue-500 text-white font-medium py-1 px-3 rounded hover:bg-blue-700 dark:bg-blue-300 dark:border-gray-600 dark:hover:bg-blue-700`,
        ContentBodyButtonRed: tw.button`bg-blue-500 text-white font-medium py-1 px-3 rounded hover:bg-blue-700 dark:bg-blue-300 dark:border-gray-600 dark:hover:bg-red-700`,
    },
    ContentSectionStadiumDetailStyle: {
        ContentWrapper: tw.div`flex w-full h-full items-baseline justify-center`,
        ContentContainer: tw.div`flex flex-col w-full max-w-3xl justify-center p-5 shadow-2xl`,
        DetailTitleWrapper: tw.div`flex w-full`,
        DetailTitleContainer: tw.div`flex`,
        DetailTitle: tw.span`text-lg text-gray-900 dark:text-white`,
        DetailBodyWrapper: tw.div`flex flex-col w-full items-center justify-center`,
        DetailBodyContentWrapper: tw.div`flex w-full items-center justify-center px-2`,
        DetailBodyContentContainer: tw.div`flex flex-col w-full p-5 space-y-4`,
        DetailBodyStadiumContainer: tw.div`flex flex-col gap-6 mb-6 md:grid-cols-2`,
        DetailBodyStadiumProfileWrapper: tw.div`flex w-full items-center justify-center`,
        DetailBodyStadiumProfileSliderWrapper: tw.div`w-full`,
        DetailBodyStadiumProfileSliderFigure: tw.figure`relative transition-all duration-300 cursor-pointer`,
        DetailBodyStadiumProfileSliderFigureImgWrapper: tw.div``,
        DetailBodyStadiumProfileSliderFigureImg: tw.img`rounded-2xl h-96 w-full`,
        DetailBodyStadiumProfileSliderFigureCaption: tw.figcaption`flex absolute bottom-10 left-1/2 rounded-full w-24 items-center justify-center backdrop-blur-sm bg-white/30 cursor-pointer`,
        DetailBodyStadiumProfileSliderFigureCaptionText: tw.p`text-white text-lg`,
        DetailBodyStadiumEditContainer: tw.div``,
        DetailBodyStadiumEditLabel: tw.label`block mb-2 text-sm font-medium text-gray-900 dark:text-white`,
        DetailBodyStadiumEditFile: tw.input`block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400`,
        DetailBodyInfoContainer: tw.div`grid gap-6 md:grid-cols-2`,
        DetailBodyInfoItemContainer: tw.div``,
        DetailBodyInfoItemTitle: tw.label`block mb-2 text-sm font-medium text-gray-900 dark:text-white`,
        DetailBodyInfoItemEdit: tw.input`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`,
        DetailBodyInfoAddressContainer: tw.div`flex flex-col space-y-1`,
        DetailBodyInfoAddressStreetItemContainer: tw.div`w-full`,
        DetailBodyInfoAddressStreetLabel: tw.label`block mb-2 text-sm font-medium text-gray-900 dark:text-white`,
        DetailBodyInfoAddressStreetEdit: tw.input`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`,
        DetailBodyInfoAddressStreetDetailContainer: tw.div`flex flex-nowrap w-full gap-4`,
        DetailBodyInfoConditionWrapper: tw.div`flex w-full`,
        DetailBodyInfoConditionContainer: tw.div`flex flex-col w-full`,
        DetailBodyInfoConditionTitle: tw.label`block mb-2 text-sm font-medium text-gray-900 dark:text-white`,
        DetailBodyInfoConditionItemsContainer: tw.div`grid gap-1 grid-cols-2 md:grid-cols-4`,
        DetailBodyInfoConditionItemContainer: tw.div`flex w-full items-center mb-4`,
        DetailBodyInfoConditionItemCheckbox: tw.input`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`,
        DetailBodyInfoConditionItemCheckboxLabel: tw.label`ms-2 text-sm font-medium text-gray-900 dark:text-gray-300`,
        DetailBodyInfoCondition2Container: tw.div`grid gap-3 mb-6 md:grid-cols-2`,
        DetailBodyInfoConditionItemSelectContainer: tw.div`flex flex-col`,
        DetailBodyInfoConditionItemSelectTitle: tw.label`block mb-2 text-sm font-medium text-gray-900 dark:text-white`,
        DetailBodyInfoConditionItemSelect: tw.select`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`,
        DetailBodyInfoConditionItemSelectOption: tw.option``,
        DetailBodyInfoConditionItemSelectAdditionContainer: tw.div`flex flex-col w-full`,
        DetailBodyInfoConditionItemSelectAdditionBlank: tw.div`h-1/2`,
        DetailBodyInfoConditionItemSelectAdditionItemContainer: tw.div`flex flex-nowrap h-1/2 items-center gap-4`,
        DetailBodyInfoConditionItemSelectAdditionItemCenter: tw.div`flex items-center`,
        DetailButtonsContainer: tw.div`flex flex-nowrap w-full gap-8`,
        DetailButtonsWrapper: tw.div`flex w-1/2`,
        DetailButton: tw.button`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`,
    },
};
