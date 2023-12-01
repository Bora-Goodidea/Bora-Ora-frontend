import Slider from 'react-slick';
import lodash from 'lodash';
import TemporaryData from '@Common/TemporaryData';
import React, { useState } from 'react';
import { OraButton, OraModal } from '@Elements';

const initializeState = {
    modal: {
        register: false,
    },
};

const Login = () => {
    const [pageState, setPageState] = useState<{
        modal: {
            register: boolean;
        };
    }>(initializeState);

    const slidersettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <div className="min-h-screen flex flex-col">
            <header className="flex w-full justify-center"></header>

            <main className="flex-1 w-full">
                <section className="flex w-full justify-center">
                    <div className="flex flex-nowrap h-screen w-full">
                        <div className="hidden md:block md:w-[460px]">
                            <div className="w-full h-screen border">
                                <Slider {...slidersettings}>
                                    {lodash.map(TemporaryData.Login.LoginLeftImage, (e, index) => {
                                        return (
                                            <figure
                                                className="relative h-screen transition-all duration-300 cursor-pointer filter"
                                                key={`publish-login-page-left-image-item-${index}`}>
                                                <img
                                                    className="h-screen w-screen object-cover"
                                                    src={`${e.image}`}
                                                    alt="image description"
                                                />
                                                <figcaption className="absolute px-4 text-lg text-white bottom-6 flex flex-col items-center w-full ">
                                                    <p className="text-xl">{e.title}</p>
                                                    <p className="text-sm">{e.name}</p>
                                                </figcaption>
                                            </figure>
                                        );
                                    })}
                                </Slider>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                            풋살 하고 싶을땐
                                        </h1>
                                        <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-700 md:text-2xl">
                                            오라 풋볼
                                        </h1>
                                        <div className="space-y-4 md:space-y-6">
                                            <div>
                                                <input
                                                    type="email"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                    placeholder="아이디 또는 이메일"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="password"
                                                    placeholder="비밀번호"
                                                    autoComplete="on"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-start">
                                                    <div className="flex items-center h-5">
                                                        <input
                                                            type="checkbox"
                                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                                        />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                        <label htmlFor="remember" className="text-gray-500">
                                                            아이디 저장
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                                로그인
                                            </button>
                                            <div className="flex flex-nowrap w-full gap-3 items-center justify-center">
                                                <p className="cursor-pointer text-sm">아이디/비밀번호 찾기</p>
                                                <p
                                                    className="cursor-pointer text-sm"
                                                    onClick={() => {
                                                        setPageState(prevState => ({
                                                            ...prevState,
                                                            modal: {
                                                                ...prevState.modal,
                                                                register: true,
                                                            },
                                                        }));
                                                    }}>
                                                    회원가입
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:max-w-md pt-1 md:pt-40">
                                    <button
                                        type="submit"
                                        className="w-full text-white bg-amber-300 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="black"
                                            className="w-5 h-5 fill-black">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                                            />
                                        </svg>
                                        <span>카카오 로그인</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {pageState.modal.register && (
                <OraModal
                    Children={
                        <div className="w-full">
                            <div className="flex flex-col space-y-4 w-full">
                                <div className="flex w-full items-center justify-center">
                                    <div className="flex">
                                        <p className="text-xl font-extrabold">오라</p>
                                    </div>
                                </div>
                                <div className="flex w-full items-center justify-center">
                                    <div className="flex">
                                        <p className="text-xl">회원 가입하고 매치에 참여하세요</p>
                                    </div>
                                </div>
                                <div className="flex w-full items-center justify-center">
                                    <div className="flex w-full">
                                        <button
                                            type="submit"
                                            className="w-full text-white bg-amber-300 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center gap-2">
                                            <span>카카오 계정으로 가입</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex w-full items-center justify-center">
                                    <div className="flex w-full">
                                        <button
                                            type="submit"
                                            className="w-full text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center gap-2">
                                            <span>이메일로 가입할래요</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    Buttons={
                        <OraButton
                            ButtonName={`취소`}
                            HandleClick={() =>
                                setPageState(prevState => ({
                                    ...prevState,
                                    modal: {
                                        ...prevState.modal,
                                        register: false,
                                    },
                                }))
                            }
                        />
                    }
                />
            )}
        </div>
    );
};

export default Login;
