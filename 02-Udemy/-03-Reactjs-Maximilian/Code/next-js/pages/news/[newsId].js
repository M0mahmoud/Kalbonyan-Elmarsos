import React from "react";
import { useRouter } from "next/router";

// Domain/news/something
export default function someThing() {
  const router = useRouter();

  const newsId = router.query.newsId;

  //Send A Request To The Backend API

  return <div>someThing</div>;
}
