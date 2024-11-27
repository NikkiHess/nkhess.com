"use client";

import React, { Component, useRef, useState, useEffect } from "react";
import resumeStyles from "../../../styles/resume.module.css";

const Resume: React.FC = () => {
    return (
        <div>
            <img src="/documents/resume.png" id={resumeStyles.resume} ></img>
        </div>
    );
};

export default Resume;