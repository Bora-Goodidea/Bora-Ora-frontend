import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import AdminNav from './AdminNav';

const AdminMemberDetailPage = () => {
    return (
        <div className="min-h-screen h-screen flex flex-col dark:bg-gray-700">
            <AdminHeader />

            <div className="flex-1 flex flex-row h-screen overflow-y-hidden">
                <main className="flex-1 h-screen bg-indigo-50 border-l border-r border-indigo-300 text-xs overflow-y-auto dark:bg-gray-700">
                    {/* Contents Section */}
                    <div className="flex w-full h-full items-baseline justify-center">
                        <div className="flex flex-col w-full max-w-3xl justify-center p-5 shadow-2xl">
                            <div className="flex w-full">
                                <div className="flex">
                                    <span className="text-lg text-gray-900 dark:text-white">회원 정보</span>
                                </div>
                            </div>
                            <div className="flex flex-col w-full items-center justify-center">
                                <div className="flex w-full items-center justify-center px-2">
                                    <div className="flex flex-col w-full p-5">
                                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    이메일
                                                </label>
                                                <input
                                                    type="email"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="John"
                                                />
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    비밀번호
                                                </label>
                                                <input
                                                    type="password"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="*************"
                                                />
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이름</label>
                                                <input
                                                    type="text"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Flowbite"
                                                />
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">성별</label>
                                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    <option value="">선택</option>
                                                    <option value="0001">남성</option>
                                                    <option value="0002">여성</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">생년월일</label>
                                            <div className="flex gap-6 mb-6 md:grid-cols-1">
                                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    <option value="">선택</option>
                                                    <option value="0001">1990</option>
                                                    <option value="0002">1991</option>
                                                </select>
                                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    <option value="">선택</option>
                                                    <option value="0001">01</option>
                                                    <option value="0002">02</option>
                                                </select>
                                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    <option value="">선택</option>
                                                    <option value="0001">01</option>
                                                    <option value="0002">02</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="flex flex-nowrap w-full gap-8">
                                            <div className="flex w-1/2">
                                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    취소
                                                </button>
                                            </div>
                                            <div className="flex w-1/2">
                                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    저장
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default AdminMemberDetailPage;
