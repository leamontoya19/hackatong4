const Hero = () => {
    return (
        <div className="flex items-start relative z-19">
            <div className="w-full flex flex-col pt-[12%] pb-[10%]  items-center bg-gradient-to-b from-[#3b82f6] to-[#1e40af]">
                <div className="w-[85vw] flex flex-col items-start">
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-60 w-full">
                        <p className="w-full lg:w-[40%] font-jaro text-6xl lg:text-9xl text-shadow-sm text-center mb-6 lg:mb-10 lg:text-left">
                            EasySpain
                        </p>
                        <p className="w-full lg:w-[60%] font-inter text-base lg:text-2xl text-center lg:text-left">
                          
                        </p>
                    </div>
                    <div className="mt-[5%] w-full text-center lg:w-[40%] lg:self-start lg:text-left">
                        <p className="font-alatsi text-lg lg:text-2xl">
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
