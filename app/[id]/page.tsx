"use client";

import Article from "../../components/Article";

const Page = ({ params }: { params: { id: number } }) => {
  return <Article id={params} />;
};

export default Page;
