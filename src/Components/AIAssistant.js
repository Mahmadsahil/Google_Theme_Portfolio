import { GoogleGenerativeAI } from '@google/generative-ai';
import React, { useState } from 'react';

const AIAssistant = () => {
  const GOOGLE_API_KEY = "AIzaSyCNLEXYL1tENFp-mSyZrQ_HqqT1lVp7PsI";
  const [input, setInput] = useState('');
  const [qaPairs, setQaPairs] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add the question with a placeholder answer to qaPairs
    setQaPairs(prevQaPairs => [
      ...prevQaPairs,
      { question: input, answer: 'Fetching answer...' }
    ]);

    try {
      // Initialize GoogleGenerativeAI
      const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `Hello! I'm Mahmad Sahil L Achanoor, a frontend developer from Bagalkote, Karnataka, India, 
      seeking a fresher role as a Frontend or React developer. I have a Diploma in Computer Science Engineering (2018-2021)
       from Government Polytechnic Bagalkote with 82% and was the institute topper. 
       I'm skilled in JavaScript, React, Tailwind CSS, HTML, CSS, Jest, and Testing, and I use VS Code. 
       I've completed the 'Namaste React' course and built projects likeInteractive DSA Coding Platform, AI-powered Product Suggestions,Movie Suggestion Platform, Video Streaming Platform, Food Ordering Web Application, Google Theme Portfolio.
        My achievements include ranking first in my final year with 87%, being the institute topper for 2020-2021, and successfully optimizing search features and building a movie suggestion feature in my projects. 
        Find me on LinkedIn (https://www.linkedin.com/in/md-sahil-achanoor-2a686423a) and GitHub (https://github.com/Mahmadsahil).
         Contact: sahilachanur@gmail.com or 6363420179.

      act like assistant and Based on the information provided, here is the short,simple and exact answer to the following question:
      Q: ${input}
            
      dont answer irrelevant questions 
      `;

      const result = await model.generateContent(prompt);
      const answer = result.response.text();

      // Update the most recent question with its answer
      setQaPairs(prevQaPairs =>
        prevQaPairs.map((pair, index) =>
          index === prevQaPairs.length - 1
            ? { ...pair, answer: answer }
            : pair
        )
      );

    } catch (error) {
      console.error(error);
    }

    // Clear the input field
    setInput('');
  };

  return (
    <div className='w-11/12 md:w-6/12 m-auto rounded-lg border shadow p-2'>

      <ul className='h-96 flex flex-col justify-end gap-4 px-2 overflow-y-scroll'>
        {qaPairs.map((pair, index) => (
          <li className='w-full ' key={index}>
            <p className='text-xs md:text-base text-right text-slate-800 font-medium'>{pair.question} : You</p>
            <p className='text-xs md:text-base text-left text-slate-800'>{pair.answer}</p>
          </li>
        ))}
      </ul>

      <form className=' w-full flex gap-2 bottom-0 p-2' onSubmit={handleSubmit}>
        <input
          className='w-full border p-2 rounded-lg outline-none'
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Ask about me..."
        />
        <button className='p-2 text-sm rounded-full bg-blue-600 text-white font-semibold' type="submit">Go</button>
      </form>
    </div>
  );
};

export default AIAssistant;
