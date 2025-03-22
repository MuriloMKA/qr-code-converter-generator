import React from "react";
import styled from "styled-components";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './pageHeader.css';
import { Button, Switch } from "antd";
import icon from '../../assets/qrcode-solid.svg';

function PageHeader() {
    return (
        <header>
            <a className="logo" href="#"><img src={icon} alt="Logo" /></a>
            <nav className="navbar">
                <div className="buttons">
                    <Button className="button">QR Generator</Button>
                    <Button className="button">File Coverter</Button>
                </div>
            </nav>
            <div className="switch">
                <Switch checkedChildren={<i className="fa-solid fa-moon"></i>} unCheckedChildren={<i className="fa-solid fa-sun"></i>} />
            </div>
        </header>
    );
}

export default PageHeader;