"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/page.module.css"; 

const Navbar = () => {
  return (
    <nav className={styles.Mainnav}>
      <ul className={styles.navList}> 
        <li className={styles.logoContainer}>
          <Link href="/">
            <Image
              src="/image.png"     
              alt="Xoodrip Logo"
              width={120}
              height={40}
              className={styles.logo}
              priority
            />
          </Link>
        </li>

        <li><Link href="/product">Product</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
