"use client"

import { useState, useEffect } from "react"

export default function () {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 600)
    })

    
   if ( !loading ) return null ;

    return (
        // <!-- ***** Preloader Start ***** -->
        <div id="js-preloader" class="js-preloader">
          <div class="preloader-inner">
            <span class="dot"></span>
            <div class="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        // <!-- ***** Preloader End ***** -->
    )
}