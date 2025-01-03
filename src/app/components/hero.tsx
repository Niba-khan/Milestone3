import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[716px] py-[112px] gap-[20px] md:gap-[80px] text-white text-center flex flex-col md:flex-row items-center justify-center mb-6">
      
     
      <div className="absolute inset-0">
        <Image
          src="/images/heroImg.avif"
          alt="Background"
          width={1440}
          height={716}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="relative w-[90%] md:w-[70%] lg:w-[551px] h-auto text-center gap-[20px] md:gap-[35px] flex flex-col items-center md:items-start px-4 lg:px-0 mr-52">
        <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-[700] leading-tight whitespace-normal md:whitespace-nowrap mb-4">
        ANNA STONE & NK,s 
        </h1>
        <h4 className="text-[12px] sm:text-[14px] md:text-[18px] font-[400] w-full md:w-[376px] text-center md:text-left">
        Introducing the Capsule Collection
        </h4>

        
        <button className="w-[150px] sm:w-[180px] md:w-[221px] h-[50px] sm:h-[55px] md:h-[62px] bg-[#2DC071] hover:bg-green-700 transition duration-300 flex items-center justify-center mt-4">
          <h3 className="text-[14px] sm:text-[16px] md:text-[20px] font-[700] text-[#FFFFFF] leading-none">
            SHOP NOW
          </h3>
        </button>
      </div>
    </div>
  );
}
