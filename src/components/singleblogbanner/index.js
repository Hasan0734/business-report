import banner from '/public/January-2022-QHREI-BLOG-1-400x250.jpg';

export default function SingleBlogBanner() {
  return (
    <section
      className="w-full py-40 flex items-center relative"
      style={{
        background: `linear-gradient(180deg,rgba(0,0,0,0.66) 0%,rgba(0,0,0,0.66) 100%), url(${banner.src}) center/cover no-repeat`,
      }}
    >
      <div className="flex container flex-col md:mt-16 h-80">
        <div className="flex-1 flex flex-col gap-y-5 text-white ">
          <h2 className="text-white font-bold text-3xl lg:text-5xl">
            Selling A House With Major Repairs? What to Remember
          </h2>
          <p className="font-medium">by Steven Allen | Jan 5, 2022</p>
        </div>
      </div>
    </section>
  );
}
