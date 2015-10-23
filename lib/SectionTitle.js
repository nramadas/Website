/* @flow */
import React            from "react";
import {COLORS, MIXINS} from "./STYLE";
import PREPOSITIONS     from "./PREPOSITIONS";

const height: string = "30px";

const STYLE: Object = {
    container: {
        height: height,
        lineHeight: height,
        fontSize: "24px",
        color: COLORS.grey,
    },

    word: {
        display: "inline-block",
        verticalAlign: "baseline",
        height: height,
        marginRight: 8,
        fontWeight: "800",
        fontFamily: "Open Sans",
    },

    proposition: {
        display: "inline-block",
        verticalAlign: "baseline",
        height: height,
        fontWeight: "400",
        marginRight: 8,
        fontStyle: "italic",
        fontFamily: "Gentium Basic",
    },
};

const propositions: Set = new Set(PREPOSITIONS);

const renderTitle = (titleStr) => {
    return titleStr.split(" ").map(x => {
        if (!propositions.has(x.toLowerCase())) {
            return <div key={Math.random()} style={STYLE.word}>{x.toUpperCase()}</div>;
        } else {
            return <div key={Math.random()} style={STYLE.proposition}>{x}</div>;
        }
    })
};

export default class SectionTitle extends React.Component {
    render(): any {
        return (
            <div style={STYLE.container}>{renderTitle(this.props.title)}</div>
        )
    }
};
