import React, { useState,useEffect } from 'react'
import axios from './axios'


function Form(props){
  const [questions,setQuestion] = useState([]);
  const [option, setOption] = useState();

  useEffect(()=>{
    async function fetchData(){
      const req = await axios.get("/questions"
      // +props.match.params.id  changes here
      );
      setQuestion(req.data);
    }
    fetchData();
  },[])

  // console.log(questions);

  // Functions

  const postValues = (values) => {
      axios.post('/user', values)
    .then((response) => {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }

  const handleResponse = (event) => {
    event.preventDefault()
    // console.log("===>", event.target.value)
    // console.log("===>", event.target)
    let jsonRes = {
      response: option
    }
    // console.log("JSONRES : ", jsonRes)

    // Post Values
    postValues(jsonRes)
  }

  return (
    <>
      {questions.map (ques => (
        <div>
          <form
           onSubmit={handleResponse}
          >
            <label key={ques.id}>{ques.question}</label>
            <select  
              id="response"
              type="select"
              placeholder="Answer"
              name="response"
              onChange={(e) => {
                console.log(e.target.value)
                setOption(e.target.value)
              }}
            >
              <option value={`${ques.option1}`}>{ques.option1}</option>
              <option value={`${ques.option2}`}>{ques.option2}</option>
              <option  value={`${ques.option3}`}>{ques.option3}</option>
              <option value={`${ques.option4}`}>{ques.option4}</option>
            </select>
            <button type="submit">
              Submit
            </button>
          </form>
        </div>
      ))}
    </>  
  )
}
    

export default Form

       

