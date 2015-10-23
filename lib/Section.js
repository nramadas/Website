/* @flow */
import React            from "react";
import SectionTitle     from "./SectionTitle";
import {COLORS, MIXINS} from "./STYLE";

const V = React.PropTypes;

const Layouts: Object = {
    Left: Symbol("sectionleft"),
    Right: Symbol("sectionright"),
};

const baseStyle: Object = {
    container: {
        ...MIXINS.centerBox({width: 1100, height: 900}),
    },

    title: {
        marginBottom: 5,
    },

    subtitle: {
        fontSize: "18px",
        lineHeight: "22px",
        fontWeight: "400",
        fontFamily: "Gentium Basic",
        fontStyle: "italic",
        color: COLORS.red,
    },

    text: {
        marginTop: 25,
        fontSize: "16px",
        lineHeight: "24px",
        fontFamily: "Gentium Basic",
        color: COLORS.grey,
    },

    paragraph: {
        marginBottom: 15,
    },

    links: {
        marginTop: 5,
    },

    link: {
        marginRight: 15,
        fontSize: "12px",
        lineHeight: "26px",
        fontFamily: "Open Sans",
        textDecoration: "none",
        color: COLORS.grey,
    },

    linkIcon: {
        marginRight: 5,
    },
}

const STYLES: Object = {
    // $NoFlow
    [Layouts.Left]: {
        ...baseStyle,

        image: {
            ...MIXINS.pickAbsolute(50, null, null, 50),
            width: 400,
            height: 600,
            backgroundColor: COLORS.grey,
            border: "none",
        },

        content: {
            ...MIXINS.pickAbsolute(50, 100, 50, 500),
        },
    },

    // $NoFlow
    [Layouts.Right]: {
        ...baseStyle,

        image: {
            ...MIXINS.pickAbsolute(50, 50, null, null),
            width: 400,
            height: 600,
            backgroundColor: COLORS.grey,
            border: "none",
        },

        content: {
            ...MIXINS.pickAbsolute(50, 500, 50, 100),
        },
    },
};

const renderLink: Function = (linkType: string, address: string) => {
    const typeToIcon: Object = {
        github: "fa-github",
        npm: "fa-download",
        view: "fa-eye",
    };

    const typeToText: Object = {
        github: "View Source",
        npm: "Download from NPM",
        view: "View Site",
    };

    return (
        <a style={baseStyle.link} href={address} target="_blank" key={Math.random()}>
            <i style={baseStyle.linkIcon} className={`fa ${typeToIcon[linkType]}`}></i>
            {typeToText[linkType]}
        </a>
    );
};

export default class Section extends React.Component {
    // $NoFlow
    static Layouts: Object = Layouts;

    // $NoFlow
    static propTypes: Object = {
        layout: V.oneOf([Layouts.Left, Layouts.Right]).isRequired,
        imgSrc: V.string.isRequired,
        title: V.string.isRequired,
        subtitle: V.string.isRequired,
        text: V.array.isRequired,
        links: V.object,
    };

    // $NoFlow
    static defaultProps: Object = {
        links: {},
    };

    render(): any {
        const STYLE = STYLES[this.props.layout];

        return (
            <div style={STYLE.container}>
                <img style={STYLE.image} src={this.props.imageSrc}/>
                <div style={STYLE.content}>
                    <div style={STYLE.title}>
                        <SectionTitle title={this.props.title}/>
                    </div>
                    <div style={STYLE.subtitle}>
                        {this.props.subtitle}
                    </div>
                    {Object.keys(this.props.links).length
                        ? <div style={STYLE.links}>{Object.keys(this.props.links).map(linkType => renderLink(linkType, this.props.links[linkType]))}</div>
                        : null}
                    <div style={STYLE.text}>
                        {this.props.text.map(x => <div style={STYLE.paragraph} key={Math.random()}>{x}</div>)}
                    </div>
                </div>
            </div>
        )
    }
};
