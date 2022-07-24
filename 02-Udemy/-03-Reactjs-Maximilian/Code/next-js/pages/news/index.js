// Domain/news

import React, { Fragment } from 'react'
import  Link from "next/link";


export default function NewsPage() {
  return (
    <Fragment>
      <div>News Page</div>
      <ul>
        <li><Link href='/news/nextjs' >Next JS</Link></li>
        <li><Link href='/news/css' >CSS</Link></li>
        <li><Link href='/news/html' >HTML </Link></li>
      </ul>
    </Fragment>
  )
}
