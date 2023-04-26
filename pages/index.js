import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagina from "../components/Pagina";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="index">
        <Pagina titulo="Página Inicial">
          <motion.h2 animate={{ x: 380, y: 45 }} style={{ color: "white" }}>
            Bem vindo ao ApolloFlix
          </motion.h2>
          <br></br>
          <motion.div className="carousel">
            <motion.div className=""></motion.div>
          </motion.div>
        </Pagina>
      </div>
    </>
  );
};

export default Home;
