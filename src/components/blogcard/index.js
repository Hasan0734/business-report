import Image from 'next/image';

export default function SingleBlog({ img, title, date, desc }) {
  return (
    <div className="flex-1 flex flex-col gap-y-2 shadow-xm border border-iron">
      <div>
        <Image src={img} alt="" width={350} height={250} layout="responsive" />
      </div>
      <div className="px-5 py-4">
        <h5 className="font-semibold text-base mb-3">{title}</h5>
        <p className="mb-2 text-iron-gray">{date}</p>
        <p className="text-iron-gray mb-3">{desc}</p>
        <button className="text-aqua uppercase text-left">Read More</button>
      </div>
    </div>
  );
}