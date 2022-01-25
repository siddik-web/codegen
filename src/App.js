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
    license:"",
    authorEmail: "",
    authorUrl: "",
    version: "",
    description: "",
  });
  const handelNameChange = (e) => {
    localStorage.setItem(
      "manifest_key", JSON.stringify({ ...manifest, name: e.target.value })
    );
    setManifest({ ...manifest, name: e.target.value });
  };
  const handelAuthorChange = (e) => {
    localStorage.setItem(
      "manifest_key", JSON.stringify({ ...manifest, author: e.target.value })
    );
    setManifest({ ...manifest, author: e.target.value });
  };
  const handelCreationDateChange = (e) => {
    localStorage.setItem(
      "manifest_key", JSON.stringify({ ...manifest, creationDate: e.target.value })
    );
    setManifest({ ...manifest, creationDate: e.target.value });
  };

  const handelCopyrightChange = (e) => {
    localStorage.setItem(
      "manifest_key", JSON.stringify({ ...manifest, copyright: e.target.value })
    );
    setManifest({ ...manifest, copyright: e.target.value });
  };

  const handelAuthorEmailChange = (e) => {
    localStorage.setItem(
      "manifest_key", JSON.stringify({ ...manifest, authorEmail: e.target.value })
    );
    setManifest({ ...manifest, authorEmail: e.target.value });
  };

  const handelAuthorUrlChange = (e) => {
    localStorage.setItem(
      "manifest_key", JSON.stringify({ ...manifest, authorUrl: e.target.value })
    );
    setManifest({ ...manifest, authorUrl: e.target.value });
  };

  const handelVersionChange = (e) => {
    localStorage.setItem(
      "manifest_key", JSON.stringify({ ...manifest, version: e.target.value })
    );
    setManifest({ ...manifest, version: e.target.value });
  };

  const handelDescriptionChange = (e) => {
    localStorage.setItem(
      "manifest_key", JSON.stringify({ ...manifest, description: e.target.value })
    );
    setManifest({ ...manifest, description: e.target.value });
  };

  useEffect(() => {
    if (localStorage.getItem("manifest_key") === null) {
      localStorage.setItem("manifest_key", JSON.stringify(manifest))
      setManifest(JSON.parse(localStorage.getItem("manifest_key")));
    } 
  }, [manifest]);
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
              onChange={handelCopyrightChange}
            />
            <InputBoxWithLabel
              id={"authorEmail"}
              label={"author Email"}
              type={"text"}
              onChange={handelAuthorEmailChange}
            />
            <InputBoxWithLabel
              id={"authorUrl"}
              label={"authorUrl"}
              type={"text"}
              onChange={handelAuthorUrlChange}
            />
            <InputBoxWithLabel
              id={"version"}
              label={"version"}
              type={"text"}
              onChange={handelVersionChange}
            />
            <InputBoxWithLabel
              id={"description"}
              label={"description"}
              type={"text"}
              onChange={handelDescriptionChange}
            />
          </div>
          <div className="col border p-3">
            <CodeBlock
              type={"module"}
              client={"site"}
              name={JSON.parse(localStorage.getItem('manifest_key'))?.name}
              author={JSON.parse(localStorage.getItem('manifest_key'))?.author}
              creationDate={JSON.parse(localStorage.getItem('manifest_key'))?.creationDate}
              copyright={JSON.parse(localStorage.getItem('manifest_key'))?.copyright}
              license={JSON.parse(localStorage.getItem('manifest_key'))?.license}
              authorEmail={JSON.parse(localStorage.getItem('manifest_key'))?.authorEmail}
              authorUrl={JSON.parse(localStorage.getItem('manifest_key'))?.authorUrl}
              version={JSON.parse(localStorage.getItem('manifest_key'))?.version}
              description={JSON.parse(localStorage.getItem('manifest_key'))?.description}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
