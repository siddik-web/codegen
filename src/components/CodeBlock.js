import React from "react";

export default function CodeBlock({ type, client, group, name, author, creationDate }) {
  return (
    <>
      <pre>
        <code>
          {`<xml version="1.0" encoding="utf-8"/>\n<extension type="${type}" version="3.9" client="${client}" group="${group}" method="upgrade">\n\t<name>${name}</name>\n\t<author>${author}</author>\n\t<creationDate>${creationDate}</creationDate>\n</extension>`}
        </code>
      </pre>
    </>
  );
}
