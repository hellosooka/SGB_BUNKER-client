import { useRouter } from "next/router";
import React from "react";

export default function Room() {
  const router = useRouter();
  const { roomCode } = router.query;
  return <div> {roomCode} </div>;
}
