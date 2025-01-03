import Image from "next/image";


export default function Carousel() {
    return (
  <>
  <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full">
      <Image
        src="https://img.freepik.com/free-photo/portrait-curly-girl-with-red-lipstick-taking-notes-tablet-pink-background-with-dressees_197531-17620.jpg"
        alt="image1"
        width={600}
        height={900}
        className="w-full" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide4" className="btn btn-circle">❮</a>
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full">
      <Image
        alt="image2"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWgXjCElnIuWUjuANm-ZdPTz63JQfet8XJzg&s"
        width={600}
        height={900}
        className="w-full" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide1" className="btn btn-circle">❮</a>
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
      <Image
        alt="image3"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQGAiTgoruqCNKsCzD7_Det96Wz0bVnM5nUc4zzwCvGp-QlZ6ImKyRQ8zjaTh3y4rj7lw&usqp=CAU"
        width={600}
        height={900}
        className="w-full" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide2" className="btn btn-circle">❮</a>
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full">
      <Image
        alt="image4"
        src="https://www.shutterstock.com/image-photo/mobile-shopping-happy-young-woman-260nw-2364347187.jpg"
        width={600}
        height={900}
        className="w-full" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide3" className="btn btn-circle">❮</a>
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
  </>
    );
  }