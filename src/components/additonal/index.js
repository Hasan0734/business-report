import { features } from '../../fakedata';

export default function Additional() {
  return (
    <section className="py-9 lg:py-16">
      <div className="container px-4">
        <div className="text-center">
          <h2 className="text-aqua font-bold capitalize text-2xl lg:text-4xl mb-3">
            Additional Services
          </h2>
          <p className="font-semibold text-iron-gray">
            The team at Quality Homes Reimagined, LLC does more than just buy
            houses. We also sell wholesale properties, partner with local agents
            to expand our network and provide investing opportunities for
            investors.
          </p>
        </div>
        <div className="grid gap-y-6 mt-10 md:grid-cols-2 gap-x-6 lg:grid-cols-3">
          {features &&
            features.map((feature, i) => (
              <div className="text-center shadow-sm p-5" key={i}>
                <div className="w-16 h-16 text-2xl flex items-center justify-center mx-auto mb-5 rounded-full bg-aqua text-white">
                  {feature.icon}
                </div>
                <h3 className="text-dark-gray font-semibold text-xl mb-2">
                  {feature.title}
                </h3>
                <p className="mb-3 text-gray-light font-medium">
                  {feature.desc}
                </p>
                <button className="font-semibold text-black uppercase text-sm">
                  View More
                </button>
              </div>
            ))}
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
