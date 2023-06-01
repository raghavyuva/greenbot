import axios from 'axios';
import React from 'react';
const api_endpoint = 'http://192.168.1.3:8000/api/creategroup'

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
        const createGroup = async () => {
            try {
              const response = await axios.post(api_endpoint, { message });
              console.log('Group created:', response.data.groupSid);
            } catch (error) {
              console.error('Error creating group:', error);
            }
          };
          createGroup()
          actions.handlephoneNumber();
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions:actions
        });
      })}
    </div>
  );
};

export default MessageParser;