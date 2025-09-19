"use client"
import { useState } from "react";

const Home = () => {
const mock =   [
  {
  q: "react gej yu be ? hhaha",
  a: ["react", "next", "tailwind", "typescript"],
  correct: "react",
},
{
  q: "next gej yu be ? 2",
  a: ["react", "next js", "tailwind", "typescript"],
  correct: "next",
},
{
  q: "tailwind gej yu be ?3",
  a: ["react", "next", "tailwind", "typescript"],
  correct: "tailwind",
},
{
  q: "typescript gej yu be ? 4",
  a: ["react", "next", "tailwind", "typescript"],
  correct: "typescript",
},

]
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const handleOnAnswer =(index) => {
    alert(index)
    setCurrentQuestion(currentQuestion + 1)
  }
  console.log(mock[currentQuestion])
  return <div>
    <h3 className="border border-white p-2 rounded-md w-fit">{mock[currentQuestion].q}</h3>
    <div className="flex gap-4 w-[600px]">
    { mock[currentQuestion].a.map((item, index) => (
      <p onClick={() => handleOnAnswer(index)} key={index}>{item}</p>
    ))}

    </div>
  </div>;
};

export default Home;

