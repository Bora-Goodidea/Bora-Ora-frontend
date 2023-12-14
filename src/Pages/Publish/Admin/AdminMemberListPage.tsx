import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import AdminNav from './AdminNav';
import lodash from 'lodash';

const AdminMemberListPage = () => {
    return (
        <div className="min-h-screen h-screen flex flex-col dark:bg-gray-700">
            <AdminHeader />

            <div className="flex-1 flex flex-row overflow-y-hidden">
                <main className="flex-1 bg-indigo-50 border-l border-r border-indigo-300 text-xs overflow-y-auto dark:bg-gray-700">
                    {/* Contents Section */}
                    <div className="relative flex-col">
                        <div className="flex flex-nowrap w-full h-8 justify-center text-xs text-gray-700 bg-gray-500 dark:bg-gray-700 dark:text-gray-100 sticky top-0 z-50">
                            <div className="flex w-1/12 items-center justify-center border-l border-r border-b dark:bg-gray-500 dark:border-gray-600">
                                <div className="flex items-center">
                                    <input
                                        id="checkbox-all-search"
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-500 dark:border-gray-600"
                                    />
                                    <label htmlFor="checkbox-all-search" className="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </div>
                            <div className="flex w-1/12 items-center justify-center border-r border-b dark:bg-gray-500 dark:border-gray-600">
                                이름
                            </div>
                            <div className="flex w-1/12 items-center justify-center border-r border-b dark:bg-gray-500 dark:border-gray-600">
                                이메일
                            </div>
                            <div className="flex w-1/12 items-center justify-center border-r border-b dark:bg-gray-500 dark:border-gray-600">
                                레벨
                            </div>
                            <div className="flex w-1/12 items-center justify-center border-r border-b dark:bg-gray-500 dark:border-gray-600">
                                생년월일
                            </div>
                            <div className="flex w-1/12 items-center justify-center border-r border-b dark:bg-gray-500 dark:border-gray-600">
                                성별
                            </div>
                            <div className="flex w-1/12 items-center justify-center border-r border-b dark:bg-gray-500 dark:border-gray-600">
                                가입경로
                            </div>
                            <div className="flex w-1/12 items-center justify-center border-r border-b dark:bg-gray-500 dark:border-gray-600">
                                상태
                            </div>
                            <div className="flex w-1/12 items-center justify-center border-r border-b dark:bg-gray-500 dark:border-gray-600">
                                등록일
                            </div>
                            <div className="flex w-1/12 items-center justify-center border-r border-b dark:bg-gray-500 dark:border-gray-600">
                                관리
                            </div>
                        </div>
                        <div className="flex flex-col justify-center text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            {lodash.map(
                                Array.from({ length: 30 }, (v, i) => i),
                                () => {
                                    return (
                                        <div className="flex flex-nowrap w-full h-8 justify-center text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 cursor-pointer">
                                            <div className="flex w-1/12 items-center justify-center border-l border-r border-b">
                                                <div className="flex items-center">
                                                    <input
                                                        id="checkbox-all-search"
                                                        type="checkbox"
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                    <label htmlFor="checkbox-all-search" className="sr-only">
                                                        checkbox
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="flex w-1/12 items-center justify-center border-r border-b">서보문</div>
                                            <div className="flex w-1/12 items-center justify-center border-r border-b">test@test.com</div>
                                            <div className="flex w-1/12 items-center justify-center border-r border-b">관리자</div>
                                            <div className="flex w-1/12 items-center justify-center border-r border-b">78.10.22</div>
                                            <div className="flex w-1/12 items-center justify-center border-r border-b">남성</div>
                                            <div className="flex w-1/12 items-center justify-center border-r border-b">카카오</div>
                                            <div className="flex w-1/12 items-center justify-center border-r border-b">인증완료</div>
                                            <div className="flex w-1/12 items-center justify-center border-r border-b">2023.12.01</div>
                                            <div className="flex w-1/12 items-center justify-center border-r border-b">
                                                <div className="flex gap-1">
                                                    <button className="bg-blue-500 text-white font-bold py-1 px-3 rounded hover:bg-blue-700 dark:bg-gray-300 dark:border-gray-600 dark:hover:bg-blue-700">
                                                        보기
                                                    </button>
                                                    <button className="bg-blue-500 text-white font-bold py-1 px-3 rounded hover:bg-blue-700 dark:bg-red-300 dark:border-gray-600 dark:hover:bg-red-700">
                                                        블럭처리
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                    {/* Contents Section */}
                </main>

                <AdminNav />
            </div>

            <AdminFooter />
        </div>
    );
};

export default AdminMemberListPage;
