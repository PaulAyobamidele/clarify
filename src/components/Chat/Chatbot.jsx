import React, { useState } from "react";
import axios from "axios";
import "./chatbot.css"; // Keep your styles as before

// Hugging Face API setup
const API_URL = "https://api-inference.huggingface.co/models/gpt2";
const API_KEY = process.env.REACT_APP_OPENAI_API_KEY; // Replace with your Hugging Face API Key

// Function to get response from Hugging Face model
const getChatbotResponse = async (query) => {
    try {
      const response = await axios.post(
        API_URL,
        {
          inputs: query,
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
  
      console.log("API Response:", response);
  
      // Assuming response format is correct, check it and return the response
      if (response.data && response.data[0] && response.data[0].generated_text) {
        let text = response.data[0].generated_text;
  
        // Truncate the response to one paragraph (limit by number of characters or words)
        const maxLength = 600;  // You can adjust this based on your needs
        if (text.length > maxLength) {
          text = text.substring(0, maxLength) + "...";  // Truncate with ellipsis
        }
  
        return text;
      } else {
        return "Sorry, I couldn't understand the response.";
      }
    } catch (error) {
      console.error("Error fetching data from Hugging Face API:", error);
      return "Sorry, I couldn't process your request. Please try again later.";
    }
  };
  

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle chat window visibility
  const [chatHistory, setChatHistory] = useState([]); // Stores chat messages
  const [userQuery, setUserQuery] = useState(""); // User's input

  // Handle user input change
  const handleQueryChange = (e) => {
    setUserQuery(e.target.value);
  };

  // Handle form submission (user query)
  const handleQuerySubmit = async () => {
    // Clear previous chat history before adding the new query and response
    setChatHistory([]);

    // Display the user's query
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { sender: "user", text: userQuery },
    ]);

    // Get response from Hugging Face model
    const response = await getChatbotResponse(userQuery);

    // Display the model's response
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { sender: "bot", text: response },
    ]);

    // Clear user input field
    setUserQuery("");
  };

  return (
    <div className="chatbot-container">
      {/* Chat Icon */}
      <div className="chat-icon" onClick={() => setIsOpen(!isOpen)}>
        💬
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Chat with us</h3>
            <button className='chatbot-bbtn' onClick={() => setIsOpen(false)}>Close</button>
          </div>

          <div className="chat-body">
            {/* Display chat history */}
            <div className="chat-history">
              {chatHistory.map((message, index) => (
                <div
                  key={index}
                  className={message.sender === "user" ? "user-message" : "bot-message"}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Input and Send button */}
            <input
              type="text"
              value={userQuery}
              onChange={handleQueryChange}
              placeholder="Ask me anything..."
            />
            <button onClick={handleQuerySubmit}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
