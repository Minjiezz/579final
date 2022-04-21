import "./AddTitle.css";
import { motion } from "framer-motion";

const AddTitle = () => {

    return (
        <>
        <motion.h1
            initial={{fontSize: 50, opacity: 0.8, color: "#de00ff", x:50, y:-50}}
            animate={{fontSize: 15, opacity: 1, color: ["#ffffff", "#de00ff", "#ffffff"], x: 0, y: 0}}
            transition={{type: "spring", stiffness: 300}}
        >Find your favorite cat 🐈 🐾 🐾 🐾 by breed :)</motion.h1>
        <motion.h6
            initial={{opacity: 0.8, color: "#de00ff",x:50 ,y:-50}}
            animate={{opacity: 1, color: "#ffffff",x:0 ,y: 0}}
            transition={{type: "spring", stiffness: 300}}
        >Meet your favorite kitty</motion.h6>
        </>
    )
}

export default AddTitle;