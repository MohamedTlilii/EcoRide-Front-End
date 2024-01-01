import SimpleImageSlider from "react-simple-image-slider";
const images = [
    { url: "/assets/home/scooter-01.png" },
    { url: "/assets/home/scooter-02.png" },
    { url: "/assets/home/scooter-03.png" },
    { url: "/assets/home/scooter-04.png" },
    { url: "/assets/home/scooter-05.png" },
    { url: "/assets/home/scooter-06.png" },
    { url: "/assets/home/scooter-07.png" },
  ];

function Slides() {
    
  
    return (
        <div>
          <SimpleImageSlider
            width={396}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>
      );
}

export default Slides