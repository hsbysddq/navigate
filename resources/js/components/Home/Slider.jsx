import EmblaCarousel from "./EmblaCarousel";

export default function Slider() {
    const OPTIONS = { loop: true };
    const SLIDE_COUNT = 5;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

    return (
        <div className="bg-[url('../../images/bg-slider.png')] bg-cover bg-center bg-no-repeat pt-12">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    );
}
