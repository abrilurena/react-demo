import './App.css';
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div>
      <motion.h1
        animate={{ 
          y : 100,
          color: '#fff'
        }}
      >Hello World
      </motion.h1>
    </motion.div>
  );
}

export default App;
