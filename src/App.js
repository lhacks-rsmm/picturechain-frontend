import './App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Button, FormGroup, Navbar, Nav, NavItem} from 'react-bootstrap';

import VerticalNavbar from './components/VerticalNavbar';
import PromptForm from './components/PromptForm';


function App() {
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");

  async function sendMessage(m) {
    const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + "" //"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"
            },
            body: JSON.stringify({
              "model" : "gpt-4",
              "messages": [{
                "role" : "user",
                "content" : m
              }]
            })
          }
    )

    console.log(response);

    return response.json();
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await sendMessage(inputValue);
      const apiMessage = response.choices[0].message.content;
      setMessage(`${message}\n${inputValue}\n${apiMessage}`);
    } catch (error) {
      setMessage(`${message}\n${inputValue}\n${error}`);
    }

    setInputValue("");
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <header>
      <h2>New chat</h2>
      </header>
      <PromptForm />
      <main className='main-content'>
      <VerticalNavbar />
      <div className='content'>
      <div style={{ whiteSpace: 'pre-line', overflow: 'auto', maxHeight: '450px' }}>
        {message}
      </div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Form.Control type="text" placeholder="Send a message" value={inputValue} onChange={handleInputChange} />
        </FormGroup>
        <Button type="submit">Send</Button>
      </Form>
      </div>
    </main>
    </div>
  );
}

export default App;
