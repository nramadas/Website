/* @flow */
import React            from "react";
import {COLORS, MIXINS} from "./STYLE";

const STYLE: Object = {
    container: {
        ...MIXINS.pickAbsolute(0, 0, 0, 0),
    },

    box: {
        ...MIXINS.centerBox({width: 500, height: 150}),
        color: COLORS.grey,
        textAlign: "center",
    },

    title: {
        fontSize: "44px",
        lineHeight: "62px",
        fontWeight: "800",
        fontFamily: "Open Sans",
    },

    line: {
        display: "inline-block",
        verticalAlign: "top",
        margin: "0 8px",
        height: 11,
        width: 75,
        lineHeight: "11px",
        borderBottom: `1px solid ${COLORS.grey}`,
    },

    subtitleText: {
        display: "inline-block",
        verticalAlign: "top",
        height: 24,
        fontSize: "20px",
        lineHeight: "24px",
        fontWeight: "800",
        fontFamily: "Open Sans",
    },

    subtitleAltText: {
        display: "inline-block",
        verticalAlign: "top",
        height: 24,
        margin: "-4px 8px 0",
        fontSize: "32px",
        lineHeight: "32px",
        fontFamily: "Gentium Basic",
        fontStyle: "italic",
    },

    footer: {
        ...MIXINS.pickAbsolute(null, 15, 15, null),
        textAlign: "right",
        fontSize: "14px",
        lineHeight: "18px",
    },

    linkStyle: {
        textDecoration: "none",
        color: COLORS.grey,
        marginLeft: 20,
    },

    icon: {
        marginRight: 5,
    },
};

export default class Title extends React.Component {
    render(): any {
        return (
            <div style={STYLE.container}>
                <div style={STYLE.box}>
                    <div style={STYLE.title}>NIRANJAN RAMADAS</div>
                    <div>
                        <div style={STYLE.line}></div>
                        <div style={STYLE.subtitleText}>PROJECTS</div>
                        <div style={STYLE.subtitleAltText}> & </div>
                        <div style={STYLE.subtitleText}>LIBRARIES</div>
                        <div style={STYLE.line}></div>
                    </div>
                </div>
                <div style={STYLE.footer}>
                    <a style={STYLE.linkStyle} href="mailto:nrbramadas@gmail.com" target="_blank">
                        <i style={STYLE.icon} className="fa fa-envelope"></i>
                        nrbramadas@gmail.com
                    </a>
                    <a style={STYLE.linkStyle} href="https://github.com/nramadas" target="_blank">
                        <i style={STYLE.icon} className="fa fa-github"></i>
                        Github
                    </a>
                </div>
            </div>
        )
    }
}
