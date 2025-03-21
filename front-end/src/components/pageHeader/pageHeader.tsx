import React from 'react';
import './header.module.css';

const PageHeader: React.FC = () => {
    return (
        <header className="page-header">
            <a className="logo" href=""><img src="#" alt="Logo" /></a>
            <nav className="nav-buttons">
                <button className="nav-buttons-qr">Gerar Qr-Code</button>
                <span className="nav-buttons-convert">Converter Arquivos</span>
            </nav>
            <div className="theme-toggle">
                <input type="checkbox" id="theme-toggle" />
                <label htmlFor="theme-toggle" className="toggle-label">
                    <span className="toggle-icon"></span>
                </label>
            </div>
        </header>
    );
};

export default PageHeader;