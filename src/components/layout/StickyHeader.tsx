"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import FlipButton from "../common/FlipButton";
import { navigationData } from "@/data/navigation";

interface StickyHeaderProps {
  onOpenMobileMenu: () => void;
}

export default function StickyHeader({ onOpenMobileMenu }: StickyHeaderProps) {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header-area header-1 header-duplicate header-sticky ${
        isSticky ? "sticky" : ""
      }`}
    >
      <div className="header-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header-wrapper">
                {/* Site Logo */}
                <div className="site_logo">
                  <Link className="logo" href="/">
                    <Image
                      src="/assets/images/logos/logo.png"
                      alt="Logo"
                      width={140}
                      height={40}
                      priority
                      style={{ height: "auto" }}
                    />
                  </Link>
                </div>

                {/* Navigation */}
                <div className="menu-area d-none d-lg-inline-flex align-items-center">
                  <nav className="mainmenu">
                    <ul>
                      {navigationData.map((item, index) => {
                        const isHomeActive = pathname === "/";
                        const isAboutActive = pathname === "/about";
                        const isAncestor =
                          (item.title === "Home" && isHomeActive) ||
                          (item.title === "Pages" && isAboutActive);

                        return (
                          <li
                            key={index}
                            className={`${item.hasDropdown ? "has-dropdown" : ""} ${
                              isAncestor ? "current-menu-ancestor" : ""
                            }`}
                          >
                            <Link href={item.href}>{item.title}</Link>
                            {item.subItems && (
                              <ul className="sub-menu">
                                {item.subItems.map((sub, sIdx) => {
                                  const isSubActive =
                                    (sub.title === "Course marketplace" && isHomeActive) ||
                                    (sub.href === "/about" && isAboutActive);

                                  return (
                                    <li
                                      key={sIdx}
                                      className={`${
                                        isSubActive ? "current-menu-item" : ""
                                      } ${sub.subItems ? "has-dropdown" : ""}`}
                                    >
                                      <Link href={sub.href}>{sub.title}</Link>
                                      {sub.subItems && (
                                        <ul className="sub-menu">
                                          {sub.subItems.map((nested, nIdx) => (
                                            <li key={nIdx}>
                                              <Link href={nested.href}>
                                                {nested.title}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>

                {/* Header Right Items */}
                <div className="header-right-item d-inline-flex">
                  <div className="header-search-box d-lg-block d-none">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <button type="submit" aria-label="Search">
                        <i className="tji-search"></i>
                      </button>
                      <input
                        type="search"
                        autoComplete="off"
                        name="s"
                        placeholder="Search for here..."
                      />
                    </form>
                  </div>
                  <div className="header-cart">
                    <Link className="cart-btn" href="/cart" aria-label="Cart">
                      <i className="tji-cart-bag"></i>
                      <span className="cart-count">02</span>
                    </Link>
                  </div>
                  <div className="header-user d-lg-none">
                    <Link className="user-btn" href="/login" aria-label="User Account">
                      <i className="tji-user"></i>
                    </Link>
                  </div>
                  <div className="header-button d-xl-flex d-none">
                    <FlipButton
                      href="/login"
                      className="tj-btn-primary tj-btn-primary-border tj-btn-primary-border-sm flip-text-wrap"
                    >
                      Log in
                    </FlipButton>
                    <FlipButton
                      href="/contact"
                      className="tj-btn-primary tj-btn-primary-sm flip-text-wrap"
                    >
                      Sign in
                    </FlipButton>
                  </div>
                </div>

                {/* Mobile Menu Hamburger Button */}
                <button
                  className="menu_btn mobile_menu_bar d-lg-none"
                  onClick={onOpenMobileMenu}
                  type="button"
                  aria-label="Toggle Mobile Menu"
                >
                  <span className="bars">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
