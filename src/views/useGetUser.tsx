import React, { useEffect, useState } from 'react'

export default function useGetUser() {
    const [role, setRole] = useState("")
    useEffect(()=>{
        const role = JSON.parse(localStorage.getItem('role'))||"hello world";
        setRole(role)
    }, [])
  return role;
}
