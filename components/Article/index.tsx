import { motion } from "framer-motion";
// import Image from "next/image";
import Link from "next/link";

import NextJS from "../Stacks/NextJS";
import NodeJS from "../Stacks/NodeJS";
import React from "../Stacks/React";
// eslint-disable-next-line import/order
import VanliaJS from "../Stacks/VanliaJS";
import "./styles.css";
// eslint-disable-next-line import/order
import { data } from "../../data";

import type { ItemProps } from "../List";

const Article = ({ id }: { id: any }) => {
  const { category, title } = data.find((data: ItemProps) => data.id === id.id);

  return (
    <motion.div
      className="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
    >
      <motion.div layoutId={`item-motion-${id}`}>
        <Link href={"/"} className="backbtn">
          Back
        </Link>
        <motion.div
          className="image-motion"
          layoutId={`image-motion-${id}`}
        ></motion.div>
        <div className="content">
          <motion.div className="title-motion" layoutId={`title-motion-${id}`}>
            <span className="category">{category}</span>
            <h2 className="title">{title}</h2>
          </motion.div>
          <p>
            {id.id === "React" ? <React /> : undefined}
            {id.id === "NextJS" ? <NextJS /> : undefined}
            {id.id === "NodeJS" ? <NodeJS /> : undefined}
            {id.id === "VanliaJS" ? <VanliaJS /> : undefined}
          </p>
        </div>
      </motion.div>{" "}
    </motion.div>
  );
};

export default Article;
