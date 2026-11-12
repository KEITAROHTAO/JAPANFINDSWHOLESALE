"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useOrderStore } from "./OrderStore";

const JP_PATHS = new Set(["/", "/partners", "/contact"]);

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { items } = useOrderStore();
  const messenger = process.env.NEXT_PUBLIC_MESSENGER_URL || "https://m.me/61576532876437";
  const facebook = process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/profile.php?id=61576532876437";
  const isJapanese = JP_PATHS.has(pathname);

  return (
    <header className="siteHeader">
      <div className="headerInner">
        <Link href={isJapanese ? "/" : "/shop"} className="logoLink" aria-label="JAPAN FINDS WHOLESALE home">
          <img src="/images/japan-finds-logo.jpg" alt="JAPAN FINDS WHOLESALE" />
        </Link>
        <div className="headerActions">
          {isJapanese ? (
            <>
              <Link className="textAction" href="/available-items">販売商品を見る</Link>
              <Link className="orderBadge" href="/contact">取引相談</Link>
            </>
          ) : (
            <>
              <a className="textAction" href={messenger} target="_blank" rel="noreferrer">Messenger</a>
              <Link className="orderBadge" href="/order-list">Order List{items.length ? ` (${items.length})` : ""}</Link>
            </>
          )}
          <button className="menuButton" onClick={() => setOpen(!open)} aria-label="Open menu" aria-expanded={open}>☰</button>
        </div>
      </div>
      {open && (
        <nav className="menuPanel" onClick={() => setOpen(false)}>
          {isJapanese ? (
            <>
              <Link href="/">事業紹介</Link>
              <Link href="/partners">取引パートナー募集</Link>
              <Link href="/contact">取引相談</Link>
              <Link href="/available-items">フィリピンでの販売商品</Link>
              <Link href="/shop">Philippines Shop (English)</Link>
            </>
          ) : (
            <>
              <Link href="/shop">Home</Link>
              <Link href="/available-items">Available Items</Link>
              <Link href="/about">About Us</Link>
              <Link href="/how-to-order">How to Order</Link>
              <Link href="/location">Location</Link>
              <a href={facebook} target="_blank" rel="noreferrer">Facebook</a>
              <Link href="/">For Japanese Business Partners</Link>
            </>
          )}
        </nav>
      )}
    </header>
  );
}
