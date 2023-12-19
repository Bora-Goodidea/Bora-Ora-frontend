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
};
