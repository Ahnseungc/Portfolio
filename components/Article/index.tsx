import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import "./styles.css";

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
          <p></p>
        </div>
      </motion.div>{" "}
    </motion.div>
  );
};

export default Article;
