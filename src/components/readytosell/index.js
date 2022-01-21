import bg from '/public/Oregon-We-Buy-Houses-Fast-For-Cash.jpg';

export default function ReadyToSell() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row">
        <div
          className="flex-1"
          style={{ background: `url(${bg.src}) center/cover no-repeat` }}
        />
        <div className="bg-mirage flex-1 px-4 py-16 text-white font-medium flex flex-col items-start gap-y-6 lg:px-16">
          <h2 className="text-aqua font-bold text-2xl lg:text-4xl">
            I’m Ready To Sell My House Fast For Cash!
          </h2>
          <p>
            It doesn’t matter what condition your house is in, we can help you
            by making a fair cash offer on your home today. The costs involved
            in repairs, touch-ups, painting, and cleaning leave you drained and
            cost you thousands of dollars. Not to mention; extra mortgage
            payments and tax payments taking money away from your bottom line.
          </p>
          <p>
            And all of this is before the house is even on the market! We buy
            houses on your terms AS-IS, without requesting any repairs. Take
            what you want with you and leave everything else behind. We handle
            the clean-up.
          </p>
          <p>
            In some cases, we will also let you stay in the house even after we
            close. This will give you the time and cash you need to find another
            place to live.
          </p>
          <p>
            We also specialize in buying rental properties. If you have a bad
            tenant in your rental property, no problem. We will still work with
            you.
          </p>
          <p>
            You are under no obligation to sell your house to us. If our cash
            offer is the right option for you, we will open escrow and you can
            receive your cash in as little as 7 to 14 days, or on your timeline.
            It is that easy and stress-free to sell your house fast on your
            terms when you use our service.
          </p>
          <button
            type="button"
            className="bg-aqua text-white font-medium uppercase px-6 py-5 rounded-full"
          >
            get your fair cash offer
          </button>
        </div>
      </div>
    </section>
  );
}