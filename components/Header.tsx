"use client";

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
        <Link href="/" className="logoLink" aria-label="JAPAN FINDS WHOLESALE home">
          <img src="/images/japan-finds-logo.png" alt="JAPAN FINDS WHOLESALE" />
        </Link>
        <div className="headerActions">
          <a className="textAction" href={messenger} target="_blank" rel="noreferrer">Messenger</a>
          <Link className="orderBadge" href="/order-list">Order List{items.length ? ` (${items.length})` : ""}</Link>
          <button className="menuButton" onClick={() => setOpen(!open)} aria-label="Open menu" aria-expanded={open}>☰</button>
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
