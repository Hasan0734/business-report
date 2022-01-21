import { TiTick } from 'react-icons/ti';
import banner from '/public/banner.jpg';

const features = [
  {
    icon: <TiTick />,
    text: 'Fair Cash Offer In 48 Hours or Less',
  },
  {
    icon: <TiTick />,
    text: 'Zero Commission Fees',
  },
  {
    icon: <TiTick />,
    text: 'We Buy In As-Is-Condition',
  },
  {
    icon: <TiTick />,
    text: 'We Pay Cash For Your House',
  },
];

export default function Banner() {
  return (
    <section
      className="w-full py-40 flex items-center relative"
      style={{
        background: `linear-gradient(180deg,rgba(38,38,38,0.92) 0%,rgba(38,38,38,0.84) 100%), url(${banner.src}) center/cover no-repeat`,
      }}
    >
      <div className="flex container flex-col md:flex-row px-4 lg:gap-x-24 md:mt-16">
        <div className="flex-1 flex flex-col gap-y-8 mb-8 mb:mb-0">
          <h2 className="text-white text-3xl md:text-5xl font-bold">
            We Buy Houses Fast For Cash
          </h2>
          <p className="text-white font-asap leading-7">
            Sell your house fast with Quality Homes Reimagined, LLC regardless
            of the condition. No realtors, no hidden fees, no commissions & no
            repairs. Fill out the short form below to find out how much we can
            offer for your home today!
          </p>
          <div className="border-2 w-32 border-white" />
          <ul className="flex flex-col gap-y-3">
            {features.map((feature, i) => (
              <li
                className="text-white flex items-center gap-x-3 text-lg font-semibold"
                key={i}
              >
                {feature.icon} <span>{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <div className="max-w-md mx-auto md:mx-0 bg-procelain shadow-sm px-5 py-7">
            <div className="text-center">
              <h3 className="text-aqua text-2xl font-bold mb-3">
                Get Your Full Cash Offer
              </h3>
              <p className="font-semibold text-xl text-black">
                No Hidden Fees. No Agent Commissions.
              </p>
            </div>
            <form action="" className="w-full flex flex-col gap-y-4 mt-3">
              <input
                className="w-full my-1 p-3 text-liver border border-gray placeholder:capitalize focus:border-space focus:rounded-none focus:text-iridum"
                type="text"
                placeholder="full name*"
              />
              <input
                className="w-full my-1 p-3 text-liver border border-gray placeholder:capitalize focus:border-space focus:rounded-none focus:text-iridum"
                type="phone"
                placeholder="phone*"
              />
              <input
                className="w-full my-1 p-3 text-liver border border-gray placeholder:capitalize focus:border-space focus:rounded-none focus:text-iridum"
                type="email"
                placeholder="email*"
              />
              <textarea
                className="w-full my-1 p-3 text-liver border border-gray placeholder:capitalize focus:border-space focus:rounded-none focus:text-iridum"
                placeholder="property adress*"
              />
              <button className="bg-aqua text-white uppercase font-bold text-lg p-4">
                get your full cash offer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
