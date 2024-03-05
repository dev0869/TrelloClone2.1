import React from "react"
import Navbar from "./_components/Navbar"
import { OrgControl } from "./organization/_components/org-control"

export default function  DashBoardLayout({children}:{children:React.ReactNode}){
return (
    <>
    <Navbar/>
    <OrgControl/>
    {children}
    </>
)

}