import logo from "./logo.svg";
import "./App.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import reviews from "./data";
import { useState, useEffect } from "react";

function App() {
  const [card, setCard] = useState(reviews[1]);

  const [iteration, setIteration] = useState(1);
  let n = reviews.length;

  function leftHandler() {
    if (iteration === 0) {
      setIteration(n - 1);
    } else {
      setIteration((iteration - 1) % n);
    }
  }

  function rightHandler() {
    setIteration((iteration + 1) % n);
  }

  useEffect(() => {
    setCard(reviews[iteration]);
  }, [iteration]);

  function buttonHandler() {
    let i = Math.random() * (n - 1);
    let i1 = Math.round(i);

    setIteration(i1);
  }

  return (
    <div className="bg-slate-200 flex flex-col items-center h-screen">
      <h1 className="pt-[70px] text-[35px] font-bold">Our Testimonial</h1>
      <div className="w-[150px] h-1 bg-purple-400 mt-1"></div>

      <div className=" mx-auto w-[700px] bg-white max-h-[600px]   mt-10 rounded-md relative flex flex-col items-center transition-all duration-700 hover:shadow-xl ">
        <img
          src={`${card.image}`}
          className="w-[140px] rounded-full absolute left-10 top-[-70px] z-20"
        ></img>

        <div className="bg-purple-400 rounded-full w-[140px] h-[140px] absolute left-[50px] top-[-75px] z-10"></div>

        <h2 className=" text-center font-bold text-[25px] pt-[60px]">
          {card.name}
        </h2>

        <p className="text-purple-400 text-center text-[15px] opacity-50 uppercase pt-1">
          {card.job}
        </p>

        <FaQuoteLeft className="text-purple-400 mt-4 text-[16px]"></FaQuoteLeft>
        <p className=" mx-8 my-4 opacity-50 font-medium ml-10">{card.text}</p>
        <FaQuoteRight className="text-purple-400 mt-2 text-[16px]"></FaQuoteRight>

        <div className="flex gap-6 mt-6">
          <FaAngleLeft
            onClick={leftHandler}
            className="text-[30px] text-purple-400 cursor-pointer  hover:text-purple-600"
          >
            {" "}
          </FaAngleLeft>
          <FaAngleRight
            onClick={rightHandler}
            className="text-[30px] text-purple-400 cursor-pointer hover:text-purple-600"
          ></FaAngleRight>
        </div>

        <button
          onClick={buttonHandler}
          className="w-[180px] bg-purple-400 text-white h-[45px] rounded-md mt-4 mb-8 font-bold text-[17px] hover:bg-purple-500"
        >
          Surprise me
        </button>
      </div>
    </div>
  );
}

export default App;
