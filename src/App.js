import { useEffect, useState } from "react";
import "./App.css";
import CodeBlock from "./components/CodeBlock";
import InputBoxWithLabel from "./components/inputs/InputBoxWithLabel";

function App() {
  const [manifest, setManifest] = useState({
    name: "",
    author: "",
    creationDate: "",
    copyright: "",
    authorEmail: "",
    authorUrl: "",
    version: "",
    description: "",
  });
  const handelNameChange = (e) => {
    localStorage.setItem(
      "manifest_key",
      JSON.stringify({ ...manifest, name: e.target.value })
    );
    setManifest({ ...manifest, name: e.target.value });
  };
  const handelAuthorChange = (e) => {
    localStorage.setItem(
      "manifest_key",
      JSON.stringify({ ...manifest, author: e.target.value })
    );
    setManifest({ ...manifest, author: e.target.value });
  };
  const handelCreationDateChange = (e) => {
    localStorage.setItem(
      "manifest_key",
      JSON.stringify({ ...manifest, creationDate: e.target.value })
    );
    setManifest({ ...manifest, creationDate: e.target.value });
  };

  useEffect(() => {
    if (localStorage.getItem("manifest_key") === null) {
      setManifest(
        localStorage.setItem("manifest_key", JSON.stringify(manifest))
      );
    } 
  }, [manifest]);
  console.log(manifest);
  return (
    <div>
      <h1 className="text-center">CodeGen</h1>
      <div className="container">
        <div className="row">
          <div className="col border p-3">
            <InputBoxWithLabel
              id={"name"}
              label={"name"}
              type={"text"}
              onChange={handelNameChange}
            />
            <InputBoxWithLabel
              id={"author"}
              label={"author"}
              type={"text"}
              onChange={handelAuthorChange}
            />
            <InputBoxWithLabel
              id={"creationDate"}
              label={"Creation Date"}
              type={"text"}
              onChange={handelCreationDateChange}
            />
            <InputBoxWithLabel
              id={"copyright"}
              label={"copyright"}
              type={"text"}
              onChange={handelAuthorChange}
            />
            <InputBoxWithLabel
              id={"authorEmail"}
              label={"author Email"}
              type={"text"}
              onChange={handelAuthorChange}
            />
            <InputBoxWithLabel
              id={"authorUrl"}
              label={"authorUrl"}
              type={"text"}
              onChange={handelAuthorChange}
            />
            <InputBoxWithLabel
              id={"version"}
              label={"version"}
              type={"text"}
              onChange={handelAuthorChange}
            />
            <InputBoxWithLabel
              id={"description"}
              label={"description"}
              type={"text"}
              onChange={handelAuthorChange}
            />
          </div>
          <div className="col border p-3">
            <CodeBlock
              type={"module"}
              client={"site"}
              name={manifest?.name}
              author={manifest?.author}
              creationDate={manifest?.creationDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
