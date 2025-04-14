import React, { useState } from "react";

const MessagePage = () => {
  const [messages, setMessages] = useState([
    { sender: "client", text: "Hello, I'm interested in your services." },
    { sender: "freelancer", text: "Hi! Sure, how can I help you?" },
  ]);
  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (inputText.trim() === "") return;
    setMessages([...messages, { sender: "client", text: inputText }]);
    setInputText("");
  };

  return (
    <div className="chat-container" style={{margin:"100px",justifyItems:"center"}}>
      <h2 style={{margin:"80px"}}>Messages</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default MessagePage;
