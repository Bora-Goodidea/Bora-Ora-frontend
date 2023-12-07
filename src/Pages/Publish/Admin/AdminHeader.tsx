const AdminHeader = () => {
    return (
        <header className="bg-indigo-50 border-b border-indigo-300 p-2 dark:bg-gray-700">
            <div className="flex flex-wrap items-center justify-between px-4">
                <div className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">보라오라 관리</span>
                </div>
                <div className="hidden w-full md:block md:w-auto">
                    <ul className="font-medium flex flex-col border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <div className="block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                로그아웃
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
