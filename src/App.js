import { useEffect, useState } from "react";
import "./App.css";
import CodeBlock from "./components/CodeBlock";
import InputBoxWithLabel from "./components/inputs/InputBoxWithLabel";

const initialState = {
  name: "",
  author: "",
  creationDate: "",
  copyright: "",
  license:"",
  authorEmail: "",
  authorUrl: "",
  version: "",
  description: "",
};

function App() {
  const [manifest, setManifest] = useState(initialState);

  const handleInputChange = (key) => (value) => {
    const updatedManifest = {...manifest, [key]: value};
    setManifest(updatedManifest);
    localStorage.setItem("manifest_key", JSON.stringify(updatedManifest));
  }

  useEffect(() => {
    if(localStorage.getItem('manifest_key')) {
      setManifest(JSON.parse(localStorage.getItem('manifest_key')))
    }
  }, [])


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
              value={manifest.name}
              onChange={handleInputChange('name')}
            />
            <InputBoxWithLabel
              id={"author"}
              label={"author"}
              type={"text"}
              value={manifest.author}
              onChange={handleInputChange('author')}
            />
            <InputBoxWithLabel
              id={"creationDate"}
              label={"Creation Date"}
              type={"text"}
              value={manifest.creationDate}
              onChange={handleInputChange('creationDate')}
            />
            <InputBoxWithLabel
              id={"copyright"}
              label={"copyright"}
              type={"text"}
              value={manifest.copyright}
              onChange={handleInputChange('copyright')}
            />
            <InputBoxWithLabel
              id={"authorEmail"}
              label={"author Email"}
              type={"text"}
              value={manifest.authorEmail}
              onChange={handleInputChange('authorEmail')}
            />
            <InputBoxWithLabel
              id={"authorUrl"}
              label={"authorUrl"}
              type={"text"}
              value={manifest.authorUrl}
              onChange={handleInputChange('authorUrl')}
            />
            <InputBoxWithLabel
              id={"version"}
              label={"version"}
              type={"text"}
              value={manifest.version}
              onChange={handleInputChange('version')}
            />
            <InputBoxWithLabel
              id={"description"}
              label={"description"}
              type={"text"}
              value={manifest.description}
              onChange={handleInputChange('description')}
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
