"use client";

import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import resumeStyles from "../../../styles/resume.module.css";

class Resume extends Component<{}, { width: number, imageData: any }> {
    constructor(props: any) {
        super(props);
        this.state = { width: 0, imageData: null };
        
    }

    componentDidMount () {
        this.setDivSize();
        window.addEventListener("resize", this.setDivSize);
    }

    componentWillUnmount () {
        window.removeEventListener("resize", this.setDivSize)
    }
    
    setDivSize = () => {
        this.setState({ width: window.innerWidth })
    }

    render() {
        const width = this.state.width * .5;
        const height = width * (11 / 8.5);

        return (
            <Document file="/documents/resume.pdf" className={resumeStyles.document}>
                <Page pageNumber={1} width={width} height={height} renderTextLayer={false} renderAnnotationLayer={false} className={resumeStyles.page}/>
            </Document>
        );
    }
};

export default Resume;
