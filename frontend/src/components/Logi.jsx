import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
    "https://cervmkwebrpczjfzgwfz.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlcnZta3dlYnJwY3pqZnpnd2Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyMTczNDcsImV4cCI6MjAyODc5MzM0N30.u0zee6FMwq4I1w00Pr47uMz14z1oAtCi9h-nVS_EMrM"
)

function Logi() {
    const navigate = useNavigate()

    supabase.auth.onAuthStateChange(async (event) => {
        if (event == "SIGNED_IN") {
            navigate("/home");
        } else {
            // path '/' : login 
            navigate('/')
        }
    })
    return (
        <div className='flex items-end justify-center min-h-screen' >
            <div className='flex fixed z-[-2]  bg-naac h-screen w-[2880px] bg-no-repeat bg-cover bg-center bg-fixed items-center justify-center min-h-screen' >
                {/* image is here */}
            </div>
            {/* login component */}
            <div style={{ height: '40.5%', paddingTop: '0', lineHeight: '10px' }} className='p-4 fixed text-[1px] z-4  bg-white w-[28rem] h-[28rem]'>
                <Auth
                    supabaseClient={supabase}
                    appearance={{
                        theme: ThemeSupa,
                        style: {

                        }
                    }}
                    theme='dark'
                    providers={[]}
                />
            </div>
        </div >
    )
}

export default Logi