import React, { useState } from 'react';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import AdminNav from './AdminNav';
import Slider from 'react-slick';
import lodash from 'lodash';
import TemporaryData from '@Common/TemporaryData';

// TODO: 조건1, 조건2 명칭 의논해서 정리 할것?
const AdminStadiumDetail = () => {
    const [slideCurrent, setSlideCurrent] = useState<number>(1);
    const bannerSlidersettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        afterChange: (current: any) => setSlideCurrent(current + 1),
    };
    return (
        <div className="min-h-screen h-screen flex flex-col dark:bg-gray-700">
            <AdminHeader />

            <div className="flex-1 flex flex-row overflow-y-hidden">
                <main className="flex-1 bg-indigo-50 border-l border-r border-indigo-300 text-xs overflow-y-auto dark:bg-gray-700">
                    {/* Contents Section */}
                    <div className="flex w-full h-full items-baseline justify-center">
                        <div className="flex flex-col w-full max-w-3xl justify-center p-5 shadow-2xl">
                            <div className="flex w-full">
                                <div className="flex">
                                    <span className="text-lg text-gray-900 dark:text-white">구장 정보</span>
                                </div>
                            </div>
                            <div className="flex flex-col w-full items-center justify-center">
                                <div className="flex w-full items-center justify-center px-2">
                                    <div className="flex flex-col w-full p-5 space-y-4">
                                        <div className="flex flex-col gap-6 md:grid-cols-2">
                                            <div className="flex w-full items-center justify-center">
                                                <div className="w-full">
                                                    <Slider {...bannerSlidersettings}>
                                                        {lodash.map(TemporaryData.RentalDetail.slider, (e, index, lists) => {
                                                            return (
                                                                <figure
                                                                    className="relative transition-all duration-300 cursor-pointer"
                                                                    key={`publish-rental-detail-page-banner-slide-item-${index}`}>
                                                                    <div className="">
                                                                        <img className="rounded-2xl h-96 w-full" src={`${e}`} alt="..." />
                                                                    </div>
                                                                    <figcaption className="flex absolute bottom-10 left-1/2 rounded-full w-24 items-center justify-center backdrop-blur-sm bg-white/30 cursor-pointer">
                                                                        <p className="text-white text-lg">{`${slideCurrent} | ${lists.length} +`}</p>
                                                                    </figcaption>
                                                                </figure>
                                                            );
                                                        })}
                                                    </Slider>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    이미지 업로드
                                                </label>
                                                <input
                                                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                                    id="file_input"
                                                    type="file"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid gap-6 md:grid-cols-2">
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">번호</label>
                                                <input
                                                    type="number"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="1111"
                                                />
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    고유값
                                                </label>
                                                <input
                                                    type="text"
                                                    readOnly={true}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="XMKIU"
                                                />
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    구장 명
                                                </label>
                                                <input
                                                    type="text"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="서울 구장"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col space-y-1">
                                            <div className="w-full">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">주소</label>
                                                <input
                                                    type="text"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="서울시 부산구"
                                                />
                                            </div>
                                            <div className="flex flex-nowrap w-full gap-4">
                                                <div className="w-full">
                                                    <input
                                                        type="text"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="상세 주소"
                                                    />
                                                </div>
                                                <div className="w-full">
                                                    <input
                                                        type="text"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="우편번호"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex w-full">
                                            <div className="flex flex-col w-full">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    조건 1
                                                </label>
                                                <div className="grid gap-1 grid-cols-2 md:grid-cols-4">
                                                    <div className="flex w-full items-center mb-4">
                                                        <input
                                                            type="checkbox"
                                                            value=""
                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                        />
                                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                            주차
                                                        </label>
                                                    </div>
                                                    <div className="flex w-full items-center mb-4">
                                                        <input
                                                            type="checkbox"
                                                            value=""
                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                        />
                                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                            샤워 가능
                                                        </label>
                                                    </div>
                                                    <div className="flex w-full items-center mb-4">
                                                        <input
                                                            type="checkbox"
                                                            value=""
                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                        />
                                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                            신발 대여
                                                        </label>
                                                    </div>
                                                    <div className="flex w-full items-center mb-4">
                                                        <input
                                                            type="checkbox"
                                                            value=""
                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                        />
                                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                            조끼대여
                                                        </label>
                                                    </div>
                                                    <div className="flex w-full items-center mb-4">
                                                        <input
                                                            type="checkbox"
                                                            value=""
                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                        />
                                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                            화장실 남녀 구분
                                                        </label>
                                                    </div>
                                                    <div className="flex w-full items-center mb-4">
                                                        <input
                                                            type="checkbox"
                                                            value=""
                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                        />
                                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                            화장실
                                                        </label>
                                                    </div>
                                                    <div className="flex w-full items-center mb-4">
                                                        <input
                                                            type="checkbox"
                                                            value=""
                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                        />
                                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                            공 대여
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex w-full">
                                            <div className="flex flex-col w-full">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    조건 2
                                                </label>
                                                <div className="grid gap-3 mb-6 md:grid-cols-2">
                                                    <div className="flex flex-col">
                                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                            좋아하는 스타일
                                                        </label>
                                                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                            <option value="">선택</option>
                                                            <option value="0001">공격</option>
                                                            <option value="0002">벨런스</option>
                                                            <option value="0003">스타일</option>
                                                        </select>
                                                    </div>
                                                    <div className="flex flex-col w-full">
                                                        <div className="h-1/2"></div>
                                                        <div className="flex flex-nowrap h-1/2 items-center gap-4">
                                                            <div className="flex items-center">
                                                                <input
                                                                    type="checkbox"
                                                                    value=""
                                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                                />
                                                                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                    실외
                                                                </label>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <input
                                                                    type="checkbox"
                                                                    value=""
                                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                                />
                                                                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                    인조잔디
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid gap-6 md:grid-cols-2">
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    사용료
                                                </label>
                                                <input
                                                    type="number"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="1111"
                                                />
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

export default AdminStadiumDetail;
