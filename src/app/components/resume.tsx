"use client";

import React, { Component, useRef, useState, useEffect } from "react";
import resumeStyles from "../../../styles/resume.module.css";

const Resume: React.FC = () => {
    var zoomed = false;

    useEffect(() => {

        const handleClick = (event: MouseEvent) => {
            zoomed = !zoomed;
            if(zoomed) {
                
            }
        }

        window.addEventListener("click", handleClick);
        
        return () => {
            window.removeEventListener("wheel", handleClick);
        }
    }, []);

    return (
        <div>
            <img src="/documents/resume.png" id={resumeStyles.resume} ></img>
        </div>
    );
};

export default Resume;