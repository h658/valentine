export default function Hero() {
    return (
        <>
  <section className="grid grid-cols-2 mt-20 ">

         <div>
            <img src="/girlboy.png" alt="mainpic" className="-ml-11" />
        </div>

        <div className="h-fullscreen bg-[url('/2clouds.svg')] bg-no-repeat ">
                    <div className="relative">
                        <img src="/happybox.svg" alt="box" className="ml-36 " />
                        <span className="absolute -mt-12 ml-64 text-3xl font-normal text-white">H A A P Y</span>
                    </div>
                 
                    <div className="text-3xl font-light tracking-wider ml-52 mt-5">Valentine&apos;s Day</div>

                    <p className="text-center text-lg font-semibold italic mt-7">"In dreams and in love there are no impossibilities." - Janos Arnay</p><br/>
         
                    <p className="text-sm mr-3 "> On this Valentine's Day, amidst the sea of hearts and the scent of roses, you find yourself captivated by the beauty of your love. With every beat of your heart, you are reminded of the joy your partner brings into your life, the warmth of their embrace, and the depth of their affection.
                    On this joyous Valentine's Day, amidst the sea of hearts and the scent of roses, you find yourself captivated by the beauty of your love.</p>
                    <button className=" w-40 h-9 btn-custom rounded-full text-white ml-60 mt-10 "> READ MORE</button>
                  

        </div>
 </section>
        </>

    )
}