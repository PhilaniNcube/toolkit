import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container mx-auto py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
        <Image
          src="/images/basic.jpg"
          className="w-full object-cover"
          width={1827}
          height={1066}
          alt="Basic"
        />
        <Image
          src="/images/german.jpg"
          className="w-full object-cover"
          width={750}
          height={275}
          alt="German"
        />
        <Image
          src="/images/canada.jpg"
          className="w-full object-cover"
          alt="Canada"
          width={500}
          height={350}
        />
        <Image
          src="/images/masifunde.jpg"
          className="w-full object-cover"
          alt="Masifunde"
          width={1163}
          height={367}
        />
        <Image
          src="/images/agape.png"
          className="w-full object-cover"
          alt="Agape"
          width={750}
          height={207}
        />
      </div>
    </footer>
  );
};
export default Footer;
