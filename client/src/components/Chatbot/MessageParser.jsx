import React from 'react';

const MessageParser = ({ children, actions }) => {

  const parse = (message) => {
    if(message.includes("ca va")){
      actions.handleFind()
    }

    if(message.includes("ça va")){
      actions.handleFind()
    }

    if(message.includes("Comment vas tu")){
      actions.handleFind()
    }

    if(message.includes("comment va tu")){
      actions.handleFind()
    }

    if(message.includes("Comment va tu")){
      actions.handleFind()
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;