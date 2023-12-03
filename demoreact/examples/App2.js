import './App.css';
import { motion } from "framer-motion";

/*Changes the text color and animates it */

function App() {
  return (
    <motion.div>
      <motion.h1
        animate={{ 
          y : 100,
          color: '#fff'
        }} // ask copilot: what is the difference between animate and initial?
        // what's the transition yoyo: infinity in framer motion?
        transition={{
          yoyo: Infinity,
          duration: 1
        }}
      >Hello World
      </motion.h1>
    </motion.div>
  );
}

export default App;
