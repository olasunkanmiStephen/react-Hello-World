import Message from "./assets/Message";
import Alert from "./Components/Alert";
import ListGroup from "./Components/ListGroup";
import Button from "./Components/Button";
import { useState } from "react";

function App() {

  const [AlrtVisible, setAlrtVisible] = useState(false);

  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <div>
        <Message />
      </div>
      <div>
        {AlrtVisible && <Alert onClose={() => setAlrtVisible(false)}>My Alert</Alert>}        <Button onClick={() => setAlrtVisible(true)}>CLick Me</Button>
      </div>
      <div>
        <Alert>
          Hello <span>World</span>
        </Alert>
      </div>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
    </>
  );
}

export default App;
