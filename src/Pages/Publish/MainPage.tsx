import { useState } from 'react';
import TemporaryData from '@Common/TemporaryData';
import MatMatchList from '@Common/MatchList.json';
import lodash from 'lodash';
import Slider from 'react-slick';
import { styled } from 'twin.macro';

const StyledSlider = styled(Slider)`
    width: 100%;
    position: relative;
    .slick-prev::before,
    .slick-next::before {
        opacity: 0;
        display: none;
    }
    .slick-slide div {
        cursor: pointer;
    }
`;

const PrevButton = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    z-index: 99;
    text-align: left;
    line-height: 30px;
`;

const NextButton = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    right: -50px;
    z-index: 99;
    text-align: right;
    line-height: 30px;
`;

const MainPage = () => {
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

    // https://ryurim.tistory.com/110 참조
    const calendarSlidersettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        prevArrow: (
            <PrevButton>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </PrevButton>
        ),
        nextArrow: (
            <NextButton>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </NextButton>
        ),
    };

    const [slideCurrent, setSlideCurrent] = useState<number>(1);

    const date = new Date();

    // const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const calendarArray = Array.from({ length: lastDay.getDate() }, (v, i) => i);

    const weekString = ['일', '월', '화', '수', '목', '금', '토'];

    return (
        <div className="min-h-screen flex flex-col">
            <header className="flex w-full justify-center">
                <div className="bg-gray-200 w-full md:max-w-screen-lg">
                    <nav className="bg-white">
                        <div className="flex flex-nowrap items-center justify-between py-1">
                            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <span className="self-center text-2xl font-semibold whitespace-nowrap">보라 오라</span>
                            </a>
                            <div className="flex flex-nowrap md:order-2">
                                <div className="relative items-center flex flex-nowrap">
                                    <div className="hidden md:flex md:absolute inset-y-0 start-0 items-center ps-3 pointer-events-none">
                                        <svg
                                            className="w-4 h-4 text-gray-500 "
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 20">
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                            />
                                        </svg>
                                        <span className="sr-only">Search icon</span>
                                    </div>
                                    <input
                                        type="text"
                                        id="search-navbar"
                                        className="p-2 ps-10 hidden md:block md:w-[300px] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="지역, 구장, 팀 이름으로 찾기"
                                    />
                                    <div className="flex flex-nowrap pl-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                                <div className="relative mt-3 md:hidden border">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg
                                            className="w-4 h-4 text-gray-500"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 20">
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        id="search-navbar"
                                        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Search..."
                                    />
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            <main className="flex-1 w-full">
                <section className="flex w-full justify-center">
                    <div className="w-full md:max-w-screen-lg">
                        <div className="flex flex-nowrap items-center h-20 justify-stretch gap-3">
                            <div className="flex flex-nowrap items-center">
                                <div className="flex text-lg font-bold">소셜매치</div>
                            </div>
                            <div className="flex flex-nowrap items-center">
                                <div className="flex text-lg text-gray-500">팀</div>
                                <span className="h-4 text-xs rounded-full bg-blue-700 text-white">new</span>
                            </div>
                            <div className="flex flex-nowrap items-center">
                                <div className="flex text-lg text-gray-500">구장 예약</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex w-full justify-center">
                    <div className="w-full md:max-w-screen-lg">
                        <div className="flex w-full justify-between pt-2">
                            {lodash.map(TemporaryData.Main.ExploreCategory.SocialMatch, (e, index) => {
                                return (
                                    <div
                                        className="flex cursor-pointer"
                                        key={`publish-main-page-explore-category-social-match-item-${index}`}>
                                        <div className="flex flex-col items-center py-2">
                                            <div className="flex">
                                                <img src={`${e.icon}`} alt={`${e.name}`} />
                                            </div>
                                            <p className="text-xs pt-1">{`${e.name}`}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
                <section className="flex w-full justify-center bg-gray-100 p-5 border-b-2">
                    <div className="w-full md:max-w-screen-lg">
                        <Slider {...bannerSlidersettings}>
                            {lodash.map(TemporaryData.Main.BannerSlide, (e, index) => {
                                return (
                                    <figure
                                        className="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                                        key={`publish-main-page-banner-slide-item-${index}`}>
                                        <a href="#">
                                            <img className="rounded-2xl" src={`${e.url}`} alt="..." />
                                        </a>
                                        <figcaption className="flex absolute bottom-8 right-10 rounded-full w-24 items-center justify-center backdrop-blur-sm bg-white/30 cursor-pointer">
                                            <p className="text-white text-lg">{slideCurrent} | 6 +</p>
                                        </figcaption>
                                    </figure>
                                );
                            })}
                        </Slider>
                    </div>
                </section>
                <section className="flex w-full justify-center p-5 bg-white sticky top-0">
                    <div className="flex flex-col w-full md:max-w-screen-lg">
                        <div className="flex w-full">
                            <StyledSlider {...calendarSlidersettings}>
                                {lodash.map(calendarArray, e => {
                                    const dayOfWeek = new Date(
                                        `${date.getFullYear()}-${date.getMonth() + 1}-${String(e + 1).padStart(2, '0')}`
                                    ).getDay();
                                    return (
                                        <div className="flex w-full pl-1 items-center justify-center">
                                            <div className="flex flex-col w-full justify-center items-center">
                                                {(() => {
                                                    if (dayOfWeek === 0) {
                                                        return (
                                                            <>
                                                                <div className="text-lg text-red-700">{e + 1}</div>
                                                                <div className="text-sm text-red-700">{weekString[dayOfWeek]}</div>
                                                            </>
                                                        );
                                                    } else if (dayOfWeek === 6) {
                                                        return (
                                                            <>
                                                                <div className="text-lg text-blue-700">{e + 1}</div>
                                                                <div className="text-sm text-blue-700">{weekString[dayOfWeek]}</div>
                                                            </>
                                                        );
                                                    } else {
                                                        return (
                                                            <>
                                                                <div className="text-lg">{e + 1}</div>
                                                                <div className="text-sm">{weekString[dayOfWeek]}</div>
                                                            </>
                                                        );
                                                    }
                                                })()}
                                            </div>
                                        </div>
                                    );
                                })}
                            </StyledSlider>
                        </div>
                        <div className="flex w-full h-full pt-5">
                            <div className="grid grid-row-1 grid-flow-col gap-2">
                                <div className="flex">
                                    <button className="bg-white text-sm text-gray-400 py-1 p-3 rounded-full border inline-flex items-center">
                                        <span>모든지역</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor"
                                            className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex">
                                    <button className="bg-white text-sm text-gray-400 py-1 p-3 rounded-full border inline-flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor"
                                            className="w-4 h-4">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                            />
                                        </svg>
                                        <span>혜택</span>
                                    </button>
                                </div>
                                <div className="flex">
                                    <button className="bg-white text-sm text-gray-400 py-1 p-3 rounded-full border inline-flex items-center">
                                        <span>마감 가리기</span>
                                    </button>
                                </div>
                                <div className="flex">
                                    <button className="bg-white text-sm text-blue-700 py-1 p-3 rounded-full border border-blue-700 inline-flex items-center">
                                        <span>남자</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor"
                                            className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex">
                                    <button className="bg-white text-sm text-gray-400 py-1 p-3 rounded-full border inline-flex items-center">
                                        <span>레벨</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor"
                                            className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex w-full justify-center h-100 overflow-auto">
                    <div className="w-full md:max-w-screen-lg">
                        <div className="flex w-full flex-col divide-y scroll-m-0">
                            {lodash.map(MatMatchList, e => {
                                return (
                                    <div className="flex w-full border-b h-20">
                                        <div className="flex flex-none h-full w-32 pl-5 items-center justify-start">
                                            <p>{e.label_schedule9.slice(-5)}</p>
                                        </div>
                                        <div className="flex flex-col grow pl-3 justify-center">
                                            <p className="text-gray-600 text-base font-semibold">{e.label_title}</p>
                                            <div className="flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={0.5}
                                                    stroke="orange"
                                                    className="w-3 h-3">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
                                                    />
                                                </svg>
                                                <p className="flex items-center content-center pl-1 text-gray-400 text-xs">
                                                    남녀모두 · 6vs6 · 3파전 · 모든 레벨
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-none justify-end">
                                            <div className="flex items-center">
                                                {(() => {
                                                    if (e.is_finish === true) {
                                                        return (
                                                            <button className="w-20 bg-gray-400 hover:bg-gray-400 text-white text-sm py-1 px-3 rounded">
                                                                마감
                                                            </button>
                                                        );
                                                    }

                                                    if (e.apply_status === `hurry`) {
                                                        return (
                                                            <button className="w-20 bg-red-500 hover:bg-red-700 text-white text-sm py-1 px-3 rounded">
                                                                마감입박!
                                                            </button>
                                                        );
                                                    }

                                                    return (
                                                        <button className="w-20 bg-blue-500 hover:bg-blue-700 text-white text-sm py-1 px-3 rounded">
                                                            신청 가능
                                                        </button>
                                                    );
                                                })()}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="flex-1 w-full">
                <section className="flex w-full justify-center bg-green-500">
                    <div className="w-full md:max-w-screen-lg">
                        <div className="flex flex-nowrap h-52">
                            <div className="flex flex-col w-1/2">
                                <p className="text-lg text-white pt-10">원하는 매치가 없다면</p>
                                <p className="text-sm pt-2">보라하고 싶은 곳을 추천해 주세요</p>
                                <div className="flex items-center pt-5">
                                    <button className="w-20 bg-white text-gray-600 text-sm py-1 px-3 rounded">추천 하기</button>
                                </div>
                            </div>
                            <div className="flex flex-col w-1/2 items-end justify-end">
                                <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/img_thunder.png" className="w-60" alt=""></img>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex w-full justify-center bg-black">
                    <div className="w-full md:max-w-screen-lg">
                        <div className="flex flex-nowrap pt-10">
                            <div className="flex flex-nowrap w-1/2 ustify-start gap-10">
                                <div className="flex flex-col">
                                    <div className="text-white text-sm py-2">매치</div>
                                    <div className="text-gray-500 text-xs py-1">모든 매치</div>
                                    <div className="text-gray-500 text-xs py-1">여자 매치</div>
                                    <div className="text-gray-500 text-xs py-1">남녀모두 매치</div>
                                    <div className="text-gray-500 text-xs py-1">스타터 매치</div>
                                    <div className="text-gray-500 text-xs py-1">티셔츠 매치</div>
                                    <div className="text-gray-500 text-xs py-1">초급 매치</div>
                                    <div className="text-gray-500 text-xs py-1">중금 매치</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-white text-sm py-2">서비스 지역</div>
                                    <div className="text-gray-500 text-xs py-1">서울</div>
                                    <div className="text-gray-500 text-xs py-1">경기</div>
                                    <div className="text-gray-500 text-xs py-1">인천</div>
                                    <div className="text-gray-500 text-xs py-1">강원</div>
                                    <div className="text-gray-500 text-xs py-1">대전</div>
                                    <div className="text-gray-500 text-xs py-1">충남/세종</div>
                                    <div className="text-gray-500 text-xs py-1">충북</div>
                                    <div className="text-gray-500 text-xs py-1">대구</div>
                                    <div className="text-gray-500 text-xs py-1">경북</div>
                                    <div className="text-gray-500 text-xs py-1">부산</div>
                                    <div className="text-gray-500 text-xs py-1">울산</div>
                                    <div className="text-gray-500 text-xs py-1">경남</div>
                                    <div className="text-gray-500 text-xs py-1">광주</div>
                                    <div className="text-gray-500 text-xs py-1">전남</div>
                                    <div className="text-gray-500 text-xs py-1">전북</div>
                                    <div className="text-gray-500 text-xs py-1">제주</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-white text-sm py-2">오라풋볼</div>
                                    <div className="text-gray-500 text-xs py-1">오라풋볼 소개</div>
                                    <div className="text-gray-500 text-xs py-1">공지사항</div>
                                    <div className="text-gray-500 text-xs py-1">자주 묻는 질문</div>
                                    <div className="text-gray-500 text-xs py-1">오라 매거진</div>
                                    <div className="text-gray-500 text-xs py-1">매니저 지원</div>
                                    <div className="text-gray-500 text-xs py-1">구장 제휴</div>
                                    <div className="text-gray-500 text-xs py-1">채용</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-white text-sm py-2">쇼셜 미디어</div>
                                    <div className="text-gray-500 text-xs py-1">인스타 그램</div>
                                    <div className="text-gray-500 text-xs py-1">유투브</div>
                                </div>
                            </div>
                            <div className="flex flex-col w-1/2">
                                <div className="flex flex-col">
                                    <div className="text-white text-sm py-2">localhost.com</div>
                                    <div className="text-gray-500 text-xs py-2">풋살하고 싶을 땐, 오라풋볼</div>
                                    <div className="text-gray-500 text-xs py-2">이용 약관 | 개인정보 처리방침 | 사업자 정보 확인</div>
                                    <div className="text-gray-500 text-xs py-2">
                                        <p>
                                            플랩풋볼 | 서울특별시 마포구 잔다리로31 제우피스빌딩 2층 | 대표 메일 contact@plabfootball.com
                                            |마케팅 제안 marketing@plabfootball.com | 언론, 연구 team@plabfootball.com | 02-704-7983
                                            주식회사 마이플레이컴퍼니 | 사업자번호 650-81-00575 | 대표 강동규 | 통신판매업 신고
                                            2020-서울마포-4411 Copyright PLAB All rights reserved.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    );
};

export default MainPage;
