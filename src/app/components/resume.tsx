"use client";

import React, { Component, useRef, useState, useEffect } from "react";
import Image from "next/image";
import resumeStyles from "../../../styles/resume.module.css";

const Resume: React.FC = () => {
    return (
        <div>
            <img src="/documents/resume.png" id={resumeStyles.resume} alt="Nikki Hess's resume"/>
        </div>
    );
};

export default Resume;