import Head from "next/head";
import DropDowns from "../app/DropDowns";
import Hero from "../app/Hero";
import Search from "../app/Search";

const index = () => {
  return (
    <>
      <Head>
        <title>Online Toolbox</title>
      </Head>
      <Hero />
      <Search />
      <DropDowns />
    </>
  );
};
export default index;
