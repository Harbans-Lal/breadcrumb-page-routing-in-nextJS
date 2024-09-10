'use client'
import * as React from "react";
import {ArrowNextFilled} from '@fluentui/react-icons'
import Link from "next/link";
import { useRouter } from "next/router";

 const BreadCrumbb = () => {

  const router = useRouter()
  const currentPath = router.pathname;

  const pathArr = currentPath.split('/');

  const handlePath = (ind) =>{
   const currPath =  pathArr.slice(0,ind).join('/')
   return currPath ;
  }

  return (
   <div> 
   {(currentPath.includes('/dashboard') || currentPath==='/dashboard') && <Link href="/dashboard">dashboard <ArrowNextFilled /> </Link> } 
    {(currentPath.includes('/dashboard/admin') || currentPath === '/dashboard/admin') && <Link href="/dashboard/admin" >admin <ArrowNextFilled /> </Link>}
   {( currentPath.includes('/dashboard/admin/home') || currentPath==='/dashboard/admin/home') &&<Link href="/dashboard/admin/home">home<ArrowNextFilled /></Link>} 
   {( currentPath.includes('/dashboard/admin/home/products') || currentPath==='/dashboard/admin/home/products') &&  <Link href="/dashboard/admin/home/products">products<ArrowNextFilled /></Link> }
   {(currentPath.includes('/dashboard/admin/home/products/add-to-cart') || currentPath==='/dashboard/admin/home/products/add-to-cart/') &&  <Link href="/dashboard/admin/home/products/add-to-cart/">add-to-cart<ArrowNextFilled /></Link> }
   {( currentPath.includes('/dashboard/admin/home/products/add-to-cart/checkout') || currentPath==='/dashboard/admin/home/products/add-to-cart/checkout') &&  <Link href="/dashboard/admin/home/products/add-to-cart/checkout">checkout<ArrowNextFilled /></Link> }
   {currentPath==='/dashboard/admin/home/products/add-to-cart/checkout/status' &&  <Link href="/dashboard/admin/home/products/add-to-cart/checkout/status">status<ArrowNextFilled /></Link> }

    <hr />
    <p>useing array !!!!!!!!!!!!!! </p>
    {pathArr.map((path, ind) =>{
      return <Link key={ind} href={handlePath(ind+1)}>{path} <ArrowNextFilled /></Link>
    })}
   </div>
  );
};

export default BreadCrumbb;