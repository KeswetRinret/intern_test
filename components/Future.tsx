import Image from 'next/image';
import futureImg from '../public/images/futureImg.png'
import img1 from '@/public/images/img1.png'
import img2 from '@/public/images/img2.png'
import img3 from '@/public/images/img3.png'
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ["latin"] });

export default function Future() {
  return (
    <div className= {`${inter.className} flex flex-col lg:flex-row items-center justify-between p-8 bg-white`}>
      <div className="lg:w-1/2 space-y-4 mx-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Unlock the Future of Shopping with Us!
        </h1>
        <p className="text-black font-normal">
          Explore a diverse range of products tailored just for you. From the latest gadgets to fashionable attire, enjoy a seamless shopping experience.
        </p>
        <div className="flex flex-col lg:flex-row lg:space-x-4 md:space-x-0 space-y-3 md:space-y-3 lg:space-y-0">
  <button className="w-full md:w-auto px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium text-black">
    Discover More Deals
  </button>
  <button className="w-full md:w-auto rounded-lg font-medium px-6 py-2 bg-[#EF2A82] hover:bg-[#fd4f9d] text-white">
    Start Shopping Today
  </button>
</div>

<div className="flex items-center space-x-20 pt-4">
  <div className="flex -space-x-3">
    <Image src={img1} width={40} height={32} alt="pic1" className="rounded-full border border-white" />
    <Image src={img2} width={40} height={32} alt="pic2" className="rounded-full border border-white" />
    <Image src={img3} width={40} height={32} alt="pic3" className="rounded-full border border-white" />
  </div>
  <p className="text-[#0D0D0D] font-normal w-full md:w-3/4 lg:w-auto">
    Join our community for personalized recommendations that suit your style and preferences!
  </p>
</div>

      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-40">
        <Image
          src={futureImg}
          alt="Shopping Experience"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}