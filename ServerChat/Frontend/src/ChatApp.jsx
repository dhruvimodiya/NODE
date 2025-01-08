import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const ChatApp = () => {
  const [socket, setSocket] = useState(null);
  const [input, setInput] = useState('');

  useEffect(() => {
    const newSocket = io('http://localhost:4000'); // Connect to Server 1
    setSocket(newSocket);

    return () => newSocket.disconnect();
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit('sendToServer2', input); // Emit message to Server 1
      setInput('');
    }
  };

  return (
    <div>
      <h1>Send Message to Server 2</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatApp;
