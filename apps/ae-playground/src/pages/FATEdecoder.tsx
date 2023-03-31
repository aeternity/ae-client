import { useEffect, useState } from "react";
import { BasicTypes, JsonBig } from "ae-node-rest-client";
import aecalldata from "@aeternity/aepp-calldata";
import { useSearchParams } from "react-router-dom";

const decoder = new aecalldata.ContractByteArrayEncoder();

export function FATEdecoder() {
  const [qs, setQs] = useSearchParams({ cb: "" });
  const [cbValid, setCbValid] = useState(false);
  const [decoded, setDecoded] = useState<any | null>(null);

  const onTextAreaChange = (text: string) => {
    console.log("text area change");
    setQs({ cb: text });
    const validated = BasicTypes.ContractByteArray.safeParse(text);
    setCbValid(validated.success);
    if (validated.success) {
      setDecoded(decoder.decode(validated.data));
    } else {
      setDecoded(null);
    }
  };
  // initially validate the query string
  useEffect(() => {
    onTextAreaChange(qs.get("cb") || "");
  }, []);

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
            value={qs.get("cb") || ""}
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
