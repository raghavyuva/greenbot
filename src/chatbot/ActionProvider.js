import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        const handlephoneNumber = ()=>{
          setState((prevState) => ({
            ...prevState,
            messages: [
              ...prevState.messages,
              createChatBotMessage("Thank you,see you on whatsapp!", { role: "system" })
            ],
          }));
        }
        return React.cloneElement(child, {
          actions: {handlephoneNumber}
        });
      })}
    </div>
  );
};

export default ActionProvider;