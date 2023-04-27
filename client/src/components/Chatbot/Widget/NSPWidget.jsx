import { useEffect, useState } from "react";

const NSPWidget = (props) => {
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
    {responses[1].reponse.map(test =>{
      return<button key={test} onClick={props.actionProvider.handleClickNSP} value={test}>{test}</button>
    })}
    </>
  );

  return <div className="container-button">{buttonMarkup}</div>;
};

export default NSPWidget;