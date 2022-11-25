import React from 'react';
import './BannerItem.css'

const BannerItem = ({ data }) => {
    const { image, prev, id, next } = data;
    return (
        <div id={`slide${id}`} className="carousel-item relative max-h-96 w-full">
            <div className="couresel-banner-img  max-h-96 w-full">
                <img src={image} alt='' className=" h-full w-full" />
            </div>
            <div
                className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-2">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;