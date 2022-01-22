import Image from 'next/image';
import img2 from '/public/Home-Selling-Mistakes-You-Should-Avoid-OG-400x250.jpg';

export default function News({ show, setShow }) {
  return (
    <section className="py-16 lg:py-28">
      <div className="container px-4">
        <div className="text-center">
          <h2 className="text-aqua font-bold text-2xl lg:text-4xl font-amiko capitalize mb-8">
            latest news & blogs
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 lg:gap-x-7">
          <div className="flex-1 flex flex-col gap-y-2 shadow-xm border font-sans border-iron">
            <div>
              <Image
                src={img2}
                alt=""
                width={350}
                height={250}
                layout="responsive"
              />
            </div>
            <div className="px-5 py-4">
              <h5 className="font-semibold text-base mb-3">
                Can I Sell my Salem Home without Any Equity?
              </h5>
              <p className="mb-2 text-iron-gray">Jan 19, 2022</p>
              <p className="text-iron-gray mb-3">
                Can you sell your home even under difficult circumstances? You
                certainly can, but are the right strategies at your
                disposal?It’s even possible to sell your house fast for cash
                while facing legal issues in Salem, Oregon.
              </p>
              <button className="text-aqua uppercase text-left">
                Read More
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-y-2 shadow-xm border font-sans border-iron">
            <div>
              <Image
                src={img2}
                alt=""
                width={350}
                height={250}
                layout="responsive"
              />
            </div>
            <div className="px-5 py-4">
              <h5 className="font-semibold text-base mb-3">
                Can I Sell my Salem Home without Any Equity?
              </h5>
              <p className="mb-2 text-iron-gray">Jan 19, 2022</p>
              <p className="text-iron-gray mb-3">
                Can you sell your home even under difficult circumstances? You
                certainly can, but are the right strategies at your
                disposal?It’s even possible to sell your house fast for cash
                while facing legal issues in Salem, Oregon.
              </p>
              <button className="text-aqua uppercase text-left">
                Read More
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-y-2 shadow-xm border font-sans border-iron">
            <div>
              <Image
                src={img2}
                alt=""
                width={350}
                height={250}
                layout="responsive"
              />
            </div>
            <div className="px-5 py-4">
              <h5 className="font-semibold text-base mb-3">
                Can I Sell my Salem Home without Any Equity?
              </h5>
              <p className="mb-2 text-iron-gray">Jan 19, 2022</p>
              <p className="text-iron-gray mb-3">
                Can you sell your home even under difficult circumstances? You
                certainly can, but are the right strategies at your
                disposal?It’s even possible to sell your house fast for cash
                while facing legal issues in Salem, Oregon.
              </p>
              <button className="text-aqua uppercase text-left">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-14">
          <button
            type="submit"
            className="bg-aqua px-7 py-4 font-asap text-xl text-white uppercase font-medium rounded-full"
          >
            Read More Blogs
          </button>
        </div>
      </div>
    </section>
  );
}
