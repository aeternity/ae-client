import React from "react";
import { usePageContext } from "../../renderer/usePageContext";
import { getTransaction } from "ae-node-rest-client/dist/restApi/transaction";
import { createClient } from "ae-node-rest-client/dist/restClient";
import { TransactionHash } from "ae-node-rest-client/dist/basicTypes";

const client = createClient("testnet");
export const Page = () => {
  // console.log("blah");
  const pageContext = usePageContext();
  // const { id } = pageContext.params;
  console.log("pageContext", pageContext.routeParams);
  const th = TransactionHash.safeParse(pageContext.routeParams?.th);
  if (!th.success) {
    return <div>Invalid transaction hash</div>;
  } else {
    const tx = getTransaction(client, th.data);
    return <div>blah</div>;
  }
};

const Transaction = ({ th }: { th: TransactionHash }) => {};
