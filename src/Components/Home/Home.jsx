import React, { useState } from 'react'
import Question from '../Quiz/Question'
import quizData from "../../StaticData/Data"
function Home() {
    const [questions, setquestions] = useState(quizData)
  return (
    <main>
        <div className='container'>
            <h3>Lunic Ai <br/>Quiz App</h3>
            <section>
                {
                   questions.map((question)=>(
                    <Question key={question.id}{...question}/>
                   )) 
                }
               
            </section>
        </div>
    </main>
  )
}

export default Home