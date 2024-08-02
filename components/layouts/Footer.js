import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-[3.125rem] h-[18.75rem] pt-20 relative  rounded-t-[2.5rem] bg-[#F2DB64]">
      <div className="flex flex-col md:flex-row md:gap-[250px] m-[35px] pt-[75px] gap-[25px]">
        <div className="w-[156px] h-[30px] text-[#0e071e] text-[24px] font-semibold leading-[30px] text-left md:text-center">
          Pixelize
        </div>
        <div className="flex flex-col md:flex-row gap-[20px] md:gap-[80px]">
          <div className="flex flex-col gap-[20px] md:gap-[40px]">
            <Link href="/ServicePage" className="text-[12px] font-medium leading-[12.5px] tracking-[0.2em] text-left md:text-center text-black">WHAT WE DO</Link>
            <Link href="/" className="text-[12px] font-medium leading-[12.5px] tracking-[0.2em] text-left md:text-center text-black">BLOG</Link>
          </div>
          <div className="flex flex-col gap-[20px] md:gap-[40px]">
            <Link href="/WorkPage" className="text-[12px] font-medium leading-[12.5px] tracking-[0.2em] text-left md:text-center text-black">OUR WORK</Link>
            <Link href="/" className="text-[12px] font-medium leading-[12.5px] tracking-[0.2em] text-left md:text-center text-black">CUSTOMER STORIES</Link>
          </div>
          <div className="flex flex-col gap-[20px] md:gap-[40px]">
            <Link href="/ServicePage" className="text-[12px] font-medium leading-[12.5px] tracking-[0.2em] text-left md:text-center text-black">WHY US?</Link>
            <Link href="/" className="text-[12px] font-medium leading-[12.5px] tracking-[0.2em] text-left md:text-center text-black">IN NEWS</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
