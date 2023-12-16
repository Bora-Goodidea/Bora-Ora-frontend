import tw from 'twin.macro';

export default {
    AdminLayoutStyle: {
        AdminLayout: tw.div`min-h-screen h-screen flex flex-col dark:bg-gray-700`,
    },
    AdminNavStyle: {},
    AdminFooterStyle: {},
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
    ContentSectionAdminMemberListStyle: {},
};
