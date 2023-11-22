import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = ({ images }: { images: string[] }) => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="my-8">
      <Slider {...settings}>
        {images.map((image, i) => (
          <div key={i}>
            <img className="rounded-2xl p-2" src={image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
