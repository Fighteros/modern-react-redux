import React from 'react'
import { useState } from 'react'
/* eslint-disable */
const LANGS = [
    { label: "Arabic", value: "ar" },
    { label: "French", value: "fr" },
    { label: "Hindi", value: "hi" },
    { label: "Japanese", value: "ja" },
    { label: "Portuguese", value: "pt" },
    { label: "Russian", value: "ru" },
    { label: "Simplified Chinese", value: "zh-CN" },
    { label: "Spanish", value: "es" },
    { label: "Swahili", value: "sw" },
    { label: "Thai", value: "th" }
];

const Langauges = ({ language, onLanguageChange }) => {
    // check langauge
    if (language === undefined) {
        language = "es";
    }

    const [open, setOpen] = useState(false)


    const languageConfig = LANGS.find(label => label.value === language);
    if (!languageConfig) {
        throw new Error(`Unknown language code '${language}'`);
    }

    const onSelect = language => {
        setOpen(false);
        onLanguageChange(language);
    };

    return (
        <div>
            <label className="label">Select Language</label>
            <div className={`dropdown ${open && "is-active"}`}>
                <div className="dropdown-trigger">
                    <button className="button" onClick={() => setOpen(!open)}>
                        <span>{languageConfig.label}</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-down" />
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu">
                    <div className="dropdown-content">
                        {LANGS.map(({ label, value }) => {
                            return (
                                <a
                                    href="#"
                                    onClick={() => onSelect(value)}
                                    className="dropdown-item"
                                >
                                    {label}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Langauges
