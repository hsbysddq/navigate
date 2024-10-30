import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number, min, max) =>
    Math.min(Math.max(number, min), max);

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
        <div className="embla w-full mx-auto">
            <div className="embla__viewport overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex -ml-4 touch-pan-y touch-pinch-zoom">
                    {slides.map((index) => (
                        <div
                            key={index}
                            className={`embla__slide flex-shrink-0 w-[60%] pl-8 relative transform transition-opacity`}
                        >
                            {/* Overlay Hijau di Belakang Gambar untuk Slide Samping */}
                            {index !== activeIndex && (
                                <div className="absolute inset-0 bg-green-200 opacity-60 rounded-2xl ml-8"></div>
                            )}
                            {/* Gambar Slide */}
                            <img
                                className="rounded-2xl block w-full h-96 object-cover"
                                src={`https://picsum.photos/600/350?v=${index}`}
                                alt="Slide image"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls grid grid-cols-[auto_1fr] justify-between gap-4 mt-7">
                <div className="embla__buttons grid grid-cols-2 gap-2 items-center">
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

                <div className="embla__dots flex flex-wrap justify-end items-center -mr-[0.65rem]">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={`inline-flex items-center justify-center rounded-full w-6 h-6 ${
                                index === selectedIndex
                                    ? "shadow-inner bg-gray-900"
                                    : "shadow-inner bg-transparent"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmblaCarousel;
