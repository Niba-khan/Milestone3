import Image from "next/image"

export default function ContainerFluide(){
    return(
        <div className="flex flex-col lg:flex-row w-full lg:w-[1439px] h-auto lg:h-[682px] mb-10">
            
            <div className="mx-auto lg:ml-16">
              <Image
                src="/images/about.jpg"
                alt="login Image"
                width={632}
                height={491.99}
                className="object-cover lg:top-[116px] lg:left-[36px] w-full lg:w-[632px] h-auto"
              />
            </div>

            <div className="w-full lg:w-[573px] h-auto flex flex-col items-start py-6 lg:py-16 px4 lg:px-8 gap-8">
                <h5 className="text-[16px] font-[700] text-[#BDBDBD]">SUMMER 2020</h5>
                <h2 className="text-[#252B42] text-[30px] lg:text-[40px] font-[700] w-full lg:w-[375px]">Part of the Neural Universe</h2>
                <h4 className="text-[#737373] text-[16px] lg:text-[20px] font-[400]">We know how large objects will act, 
                but things on a small scale.</h4>
                <div className="flex flex-col lg:flex-row gap-[10px] text-[14px] font-[700]">
                    <button className="w-full lg:w-[156px] h-[52px] bg-[#2DC071] text-white rounded-md">Buy Now!</button>
                    <button className="w-full lg:w-[173px] h-[52px] border-[1px] border-[#2DC071] text-[#2DC071] rounded-md">READ MORE</button>
                </div>
            </div>
        </div>
    )
}
