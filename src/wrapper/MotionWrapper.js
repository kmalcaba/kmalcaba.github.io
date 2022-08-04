import { motion } from "framer-motion";

function MotionWrapper(Component, classNames = "") {
  return function HOC() {
    return (
      <motion.div
        whileInView={{ opacity: [0, 0, 1], y: [100, 50, 0] }}
        transition={{ duration: 0.3 }}
        className={`${classNames} flex-center`}
        viewport={{ once: true }}
      >
        <Component />
      </motion.div>
    );
  };
}
export default MotionWrapper;
