import { Button } from "@/component/Button";
import { request } from "@/lib/request";
import { useState } from "react";

export function NestJS() {
  const [response, setResponse] = useState("");
  const requestToNestJS = () => {
    request
      .post("next-auth")
      .then((rs) => setResponse(rs.data))
      .catch((err) => setResponse(err.message));
  };

  return (
    <>
      <Button onClick={() => requestToNestJS()}>Request to NestJS</Button>
      <p>Response: </p> {response}
    </>
  );
}
