import React, { useState } from 'react';
import TemporaryData from '@Common/TemporaryData';
import Header from './Header';
import Footer from './Footer';
import Slider from 'react-slick';
import lodash from 'lodash';

/**
https://d31wz4d3hgve8q.cloudfront.net/media/ydp_thef_half.jpeg
https://d31wz4d3hgve8q.cloudfront.net/media/ydp_thef_goal.jpeg
https://d31wz4d3hgve8q.cloudfront.net/media/ydp_thef_half.jpeg
 */
const MatchDetailPage = () => {
    const [slideCurrent, setSlideCurrent] = useState<number>(1);
    const slidersettings = {
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
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 w-full">
                <section className="flex w-full justify-center">
                    <div className="w-full md:max-w-screen-lg">
                        {/* Contents Start */}
                        <div className="flex flex-col w-full">
                            <div className="w-full">
                                <div className="w-full md:max-w-screen-lg">
                                    <Slider {...slidersettings}>
                                        {lodash.map(TemporaryData.Detail.slideList, (e, index) => {
                                            return (
                                                <figure
                                                    className="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                                                    key={`publish-main-page-banner-slide-item-${index}`}>
                                                    <div className="">
                                                        <img className="object-fill h-96 w-full" src={`${e}`} alt="..." />
                                                    </div>
                                                    <figcaption className="flex absolute bottom-8 left-1/2 rounded-full w-24 items-center justify-center backdrop-blur-sm bg-white/30 cursor-pointer">
                                                        <p className="text-white text-lg">{slideCurrent} | 3 +</p>
                                                    </figcaption>
                                                </figure>
                                            );
                                        })}
                                    </Slider>
                                </div>
                            </div>
                            <div className="flex w-full h-screen">
                                <div className="flex w-2/3"></div>
                                <div className="flex w-1/3 sticky top-0 border">
                                    <div className="flex w-full sticky top-0 border">asdas</div>
                                </div>
                            </div>
                        </div>
                        {/* Contents End */}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default MatchDetailPage;
