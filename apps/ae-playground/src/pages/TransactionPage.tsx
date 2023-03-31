import { TransactionHash } from "ae-node-rest-client/dist/basicTypes";
import {
  getTransaction,
  resolveCallData,
  TxResponse,
} from "ae-node-rest-client/dist/restApi/transaction";
import { useParams } from "react-router-dom";
import { createClient } from "ae-node-rest-client/dist/restClient";
import { useEffect, useState } from "react";
import { JsonBig } from "ae-node-rest-client";

function useTransaction(thStr: string) {
  const client = createClient("testnet");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [txResp, setTxResp] = useState<TxResponse | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [callData, setCallData] = useState<any | null>(null);
  useEffect(() => {
    console.log("thStr in useEffect", thStr);
    const th = TransactionHash.safeParse(thStr);
    if (!th.success) {
      setErrors([`Invalid transaction hash: ${thStr}`]);
      setTxResp(null);
    } else {
      setLoading(true);
      getTransaction(client, th.data)
        .catch((e) => {
          console.error(e);
          setErrors([...errors, e.toString()]);
          setTxResp(null);
        })
        .then((txResp) => {
          if (txResp) {
            setLoading(true);
            resolveCallData(client, txResp.tx)
              .then((cd) => {
                setSuccess(true);
                setTxResp(txResp);
                setCallData(cd);
              })
              .catch((e) => {
                console.error("error", e);
                setErrors([...errors, e.toString()]);
              })
              .finally(() => setLoading(false));
          }
        })
        .finally(() => setLoading(false));
    }
  }, [thStr]);
  return {
    success,
    txResp,
    errors: errors,
    th: txResp?.hash,
    loading,
    callData,
  };
}
export function TransactionPage() {
  // const { id } = pageContext.params;
  const { th: thParam } = useParams();
  const { success, txResp, errors, th, loading, callData } = useTransaction(
    thParam || ""
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  if (success === false && !loading) {
    return (
      <div>
        Unsuccessful with errors: {JsonBig.JSONbigConfigured.stringify(errors)}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Transaction {th}</h1>
        <textarea
          className="w-full  h-[60vh]"
          value={
            success
              ? JsonBig.JSONbigConfigured.stringify(txResp, null, 2)
              : "Invalid input"
          }
          disabled
        />
        <h3>CallData</h3>
        {callData && (
          <textarea
            className="w-full h-[25vh]"
            disabled
            value={JsonBig.JSONbigConfigured.stringify(callData, null, 2)}
          ></textarea>
        )}
      </div>
    );
  }
}
