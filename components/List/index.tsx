import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { setCookie } from "cookies-next";

import "./style.css";

import { data } from "../../data";

export interface ItemProps {
  id: string;
  title: string;
  category?: string | number;
  isSelected?: boolean;
}

const DIVIDER_HEIGHT = 5;

const Item = ({ id, title, category, isSelected }: ItemProps) => {
  const itemClick = () => {
    setCookie("scroll_position", window.innerHeight * 2 + DIVIDER_HEIGHT * 2);
  };

  return (
    <li className="item">
      <motion.div layoutId={`item-motion-${id}`}>
        <Link href={`/${id}`} className="link" onClick={itemClick}>
          <div className="content">
            <motion.div
              className="title-motion"
              layoutId={`title-motion-${id}`}
            >
              <span className="category">{category}</span>
              <h2 className="title">{title}</h2>
            </motion.div>
            <motion.div
              className="image-motion"
              aria-hidden="true"
              layoutId={`image-motion-${id}`}
            >
              <Image
                className="image"
                width={100}
                height={100}
                src="/"
                alt="/"
              />
            </motion.div>
          </div>
        </Link>
      </motion.div>
    </li>
  );
};

const List = ({ selectedId }: { selectedId: string }) => {
  return (
    <ul className="list">
      {data.map((item: ItemProps) => (
        <Item key={item.id} {...item} isSelected={item.id === selectedId} />
      ))}
    </ul>
  );
};

export default List;
