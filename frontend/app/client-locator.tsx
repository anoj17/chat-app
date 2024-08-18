'use client'
import React, { useEffect } from 'react'

import setupLocatorUI from "@locator/runtime";

if (process.env.NODE_ENV === "development") {
    console.log('=======setting up locator=========')
    setupLocatorUI();
}

const ClientLocator = () => {

   
    return (
        <div>

        </div>
    )
}

export default ClientLocator
