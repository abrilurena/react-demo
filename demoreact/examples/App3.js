import './App.css';
import { motion } from "framer-motion";

/* it has a box and animates it */

function App() {
  return (
    <motion.div 
    className='box'
    animate={{scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"]}} 
    
  ></motion.div>
  );
}

export default App;
