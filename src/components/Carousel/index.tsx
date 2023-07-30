'use client'
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import Image, { type StaticImageData } from "next/image";
import banner1 from "~/assets/Banner/banner1.png"
import banner2 from "~/assets/Banner/banner2.png"
import banner3 from "~/assets/Banner/banner3.png"

interface TypeImageList {
    link: StaticImageData,
    alt: string,
    className: string
}
const imageList: Array<TypeImageList> = [
    {
        link: banner1,
        alt: "image 1",
        className: "object-cover w-full",
    },
    {
        link: banner2,
        alt: "image 2",
        className: "object-cover w-full",
    },
    {
        link: banner3,
        alt: "image 3",
        className: "object-cover w-full",
    }
]
const CarouselComponent: React.FunctionComponent<any> = () => {

    return (
        <Carousel transition={{ duration: 1 }} autoplay={true} loop={true} className="max-h-[900px] overflow-hidden" prevArrow={({ handlePrev }) => (
            <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 -translate-y-2/4 left-4"
            >
                <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
            </IconButton>
        )}
            nextArrow={({ handleNext }) => (
                <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute top-2/4 -translate-y-2/4 !right-4"
                >
                    <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
                </IconButton>
            )}
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}>
            {
                imageList.map(({ link, alt, className }: TypeImageList) => <Image key={alt} src={link} alt={alt} className={className} />)
            }
        </Carousel>
    );
}
export default CarouselComponent;