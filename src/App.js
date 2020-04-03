import React, { useState } from "react";
import { Button } from "reactstrap";

function App() {
  const [{ sayi1, sayi2 }, setSayi] = useState({ sayi1: 10, sayi2: 20 });

  return (
    <div className="React Hook">
      <Button
        onClick={() =>
          setSayi((c) => ({
            sayi1: c.sayi1 + 1,
            sayi2: c.sayi2,
          }))
        }
      >
        +
      </Button>
      <div>{sayi1}</div>
      <div>{sayi2}</div>
    </div>
  );
}

export default App;
