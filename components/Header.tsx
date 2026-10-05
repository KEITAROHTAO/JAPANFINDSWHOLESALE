"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useOrderStore } from "./OrderStore";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { items } = useOrderStore();
  const messenger = process.env.NEXT_PUBLIC_MESSENGER_URL || "#";
  const facebook = process.env.NEXT_PUBLIC_FACEBOOK_URL || "#";
  return (
    <header className="siteHeader">
      <div className="headerInner">
        <Link href="/" className="logoLink"><Image src="/images/japan-finds-logo.png" width={210} height={110} alt="JAPAN FINDS WHOLESALE" priority /></Link>
        <div className="headerActions">
          <a className="textAction" href={messenger} target="_blank" rel="noreferrer">Messenger</a>
          <Link href="/order-list" className="orderBadge">Order List{items.length ? ` (${items.length})` : ""}</Link>
          <button aria-label="Open menu" className="menuButton" onClick={() => setOpen((v) => !v)}>☰</button>
        </div>
      </div>
      {open && (
        <nav className="menuPanel" onClick={() => setOpen(false)}>
          <Link href="/">Home</Link>
          <Link href="/available-items">Available Items</Link>
          <Link href="/about">About Us</Link>
          <Link href="/how-to-order">How to Order</Link>
          <Link href="/location">Location</Link>
          <a href={facebook} target="_blank" rel="noreferrer">Facebook</a>
        </nav>
      )}
    </header>
  );
}
