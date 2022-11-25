import React from 'react';
import b1 from '../../../assets/banner-img/banner1.jpg';
import b2 from '../../../assets/banner-img/banner2.jpg';
import b3 from '../../../assets/banner-img/banner3.jpg';
import b4 from '../../../assets/banner-img/banner4.jpg';
import BannerItem from '../BannerItem/BannerItem';

const Banner = () => {
    const bannerData = [
        {
            image: b1,
            prev: 4,
            id: 1,
            next: 2
        },
        {
            image: b2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: b3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: b4,
            prev: 3,
            id: 4,
            next: 1
        },
    ];
    return (
        <div className="carousel w-full max-h-96">
            {
                bannerData.map(data => <BannerItem
                    key={data.id}
                    data={data}
                ></BannerItem>)
            }
        </div>
    );
};

export default Banner;