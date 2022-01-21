import Link from 'next/link';
import bg from '/public/fixedbg.jpg';

export default function Steps() {
  return (
    <section
      className="py-16"
      style={{ background: `url(${bg.src}) center / cover fixed no-repeat` }}
    >
      <div className="w-full lg:max-w-6xl lg:mx-auto px-4">
        <div className="md:text-center">
          <h2 className="text-white font-bold text-3xl">
            Easy 3 Step Process To Get Your Cash Offer Now!
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row mt-12 gap-y-12 lg:gap-y-0 gap-x-6 lg:mt-20">
          <div className="flex-1">
            <div className="flex gap-x-4 lg:gap-x-7 text-white">
              <h2 className="text-6xl">1</h2>
              <div className="flex flex-col gap-y-2">
                <h2 className="uppercase font-bold text-aqua text-xl">
                  call or fill out the form
                </h2>
                <p className="font-medium">
                  Request your cash offer by submitting your contact information
                  to us or calling us direct at:{' '}
                  <Link href="tel:">
                    <a className="text-aqua">(503) 610-8828</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex gap-x-4 lg:gap-x-7 text-white">
              <h2 className="text-6xl">2</h2>
              <div className="flex flex-col gap-y-2">
                <h2 className="uppercase font-bold text-aqua text-xl">
                  WE&apos;LL GIVE YOU A CASH OFFER
                </h2>
                <p className="font-medium">
                  We&apos;ll schedule a property viewing and make you a fair,
                  no-obligation, all cash offer in a as little as 48 hours or
                  less.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex gap-x-4 lg:gap-x-7 text-white">
              <h2 className="text-6xl">3</h2>
              <div className="flex flex-col gap-y-2">
                <h2 className="uppercase font-bold text-aqua text-xl">
                  YOU CHOOSE CLOSING DATE
                </h2>
                <p className="font-medium">
                  In some cases, we can close escrow and transfer your money in
                  as little as 14 days of accepting our offer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-14">
          <button
            type="submit"
            className="bg-aqua px-7 py-4 text-white uppercase font-semibold rounded-full"
          >
            get your fair cash offer
          </button>
        </div>
      </div>
    </section>
  );
}
