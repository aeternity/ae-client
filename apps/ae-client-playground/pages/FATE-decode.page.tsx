import React from "react";
import { BasicTypes, JsonBig } from "ae-node-rest-client";
import aecalldata from "@aeternity/aepp-calldata";

const decoder = new aecalldata.ContractByteArrayEncoder();
export function Page() {
  const [text, setText] = React.useState("");
  const [cbValid, setCbValid] = React.useState(false);
  const [decoded, setDecoded] = React.useState(null);

  const onTextAreaChange = (text: string) => {
    setText(text);
    const validated = BasicTypes.ContractDataEnc.safeParse(text);
    setCbValid(validated.success);
    if (validated.success) {
      setDecoded(decoder.decode(validated.data));
    } else {
      setDecoded(null);
    }
  };

  return (
    <>
      <h1 className="text-3xl">FATE decode</h1>
      <p>Decode FATE datastructures</p>
      <div className="">
        <div className="">
          <textarea
            className={`border border-2 w-full min-h-[5rem] textarea textarea-bordered
             ${cbValid ? "textarea-success" : "textarea-error"}`}
            onChange={(e) => onTextAreaChange(e.target.value.trim())}
            value={text}
            placeholder={"cb_XXXXXXXXXX"}
            spellCheck={false}
          />
        </div>
        <div className="">
          Result:
          <textarea
            className="w-full  h-[40vh]"
            value={
              cbValid
                ? JsonBig.JSONbigConfigured.stringify(decoded, null, 2)
                : "Invalid input"
            }
            disabled
          />
        </div>
      </div>
    </>
  );
}
