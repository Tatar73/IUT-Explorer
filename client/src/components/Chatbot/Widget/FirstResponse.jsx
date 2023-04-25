import { useEffect, useState } from "react";

const FirstResponse = (props) => {
  const [responses, setReponses] = useState([]);

  useEffect(() => {
    const options = {method: 'GET'};
    
    fetch('http://127.0.0.1:3001/api/questions', options)
      .then(response => response.json())
      .then(response => {
        setReponses(response);
        console.log(responses);
      })
      .catch(err => console.error(err));
  }, []);
  
  const buttonMarkup = responses.length > 0 && (
    <>
    {responses[0].reponse.map(test =>{
      return<button key={test} value={test} onClick={props.actionProvider.handleClick}>{test}</button>
    })}
    </>
  );

  return <div class="container-button">{buttonMarkup}</div>;
};

export default FirstResponse;
