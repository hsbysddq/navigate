import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

const TWEEN_FACTOR_BASE = 0.84;

// const numberWithinRange = (number, min, max) =>
//     Math.min(Math.max(number, min), max);

const EmblaCarousel = ({ slides, options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [activeIndex, setActiveIndex] = useState(0); // State untuk melacak slide aktif
    const tweenFactor = useRef(0);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const setTweenFactor = useCallback((emblaApi) => {
        tweenFactor.current =
            TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    }, []);

    const updateActiveIndex = useCallback(() => {
        if (emblaApi) setActiveIndex(emblaApi.selectedScrollSnap()); // Update slide aktif
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        setTweenFactor(emblaApi);
        emblaApi.on("select", updateActiveIndex); // Event listener untuk update activeIndex
    }, [emblaApi, updateActiveIndex, setTweenFactor]);

    return (
        <div className="w-full mx-auto relative">
            {" "}
            {/* Tambahkan relative untuk positioning */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-4 touch-pan-y touch-pinch-zoom items-center">
                    {slides.map((index) => (
                        <div
                            key={index}
                            className={`flex-shrink-0 w-[58%] pl-8 relative transform transition-opacity`}
                        >
                            {/* Overlay Hijau di Belakang Gambar untuk Slide Samping */}
                            {index !== activeIndex && (
                                <div className="absolute inset-0 bg-green-200 opacity-60 rounded-2xl ml-8"></div>
                            )}
                            {/* Gambar Slide */}
                            <img
                                className={`rounded-2xl block w-full 
                                ${
                                    index === activeIndex ? "h-96" : "h-80"
                                } object-cover`}
                                src={`https://picsum.photos/600/350?v=${index}`}
                                alt="Slide image"
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* Kontrol tombol prev dan next berada di tengah slide */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center transform -translate-y-1/2 px-4">
                <PrevButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                    className="bg-pink-500 text-white shadow-inner rounded-full w-9 h-9 flex items-center justify-center"
                />
                <NextButton
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                    className="bg-pink-500 text-white shadow-inner rounded-full w-9 h-9 flex items-center justify-center"
                />
            </div>
            <div className="flex flex-wrap justify-center items-center my-4 pb-4 gap-4">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={`inline-flex items-center justify-center rounded-full w-5 h-5 ${
                            index === selectedIndex
                                ? "shadow-inner bg-[#85BD76]"
                                : "shadow-inner bg-slate-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default EmblaCarousel;
