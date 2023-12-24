import { motion } from "framer-motion";

const Path = (props: any) => {
  return (
    <motion.path
      className="stroke-slate-900 stroke-[3]"
      strokeLinecap={"round"}
      {...props}
    />
  );
};

export default Path;
