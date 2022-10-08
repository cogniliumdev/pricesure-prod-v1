import Link from "next/link";
import data from "@data/account-menu.json";
import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from "next/router";

const Account = ({ className, isHidden, openHandler, closeHandler }) => {
    const node = useRef();
    const router = useRouter();

    const clickOutside = (e) => {
        if (node.current?.contains(e.target)) {
            // inside click
            // console.log('clicked inside')
            return;
        }
        // outside click
        // console.log('clicked outside scope')
        openHandler(e)
    }

    useEffect(() => {
        document.addEventListener('mousedown', clickOutside);
    
        // clean up function before running new effect
        return () => {
            document.removeEventListener('mousedown', clickOutside);
        }
      }, [isHidden])

    return (
        <div  ref={node} className={`tt-parent-box ${className}`}>
            <div className={`tt-account tt-dropdown-obj ${!isHidden ? 'active' : null}`}>
                <button  className="tt-dropdown-toggle" data-id="account" onClick={openHandler} >
                    <i className="icon-f-94" />
                </button>
                <div  className="tt-dropdown-menu">

                    <div className="tt-mobile-add">
                        <button className="tt-close" data-id="account" onClick={closeHandler}>Close</button>
                    </div>

                    <div  className="tt-dropdown-inner">
                        <ul >
                            {data.map(item => (
                                <li key={item.id}>
                                    <Link href={item.link}>
                                        <a><i className={item.iconClass} />{item.text}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
