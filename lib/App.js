/* @flow */
import React            from "react";
import Title            from "./Title";
import Section          from "./Section";
import STORABLE_TEXT    from "./sectionParagraphs/Storable";
import HA_TEXT          from "./sectionParagraphs/HipmunkAnywhere";
import MODELS_TEXT      from "./sectionParagraphs/ModelsAndCollections";
import HA_MOBILE_TEXT   from "./sectionParagraphs/HipmunkMobile";
import {COLORS}         from "./STYLE";

const sectionStyle: Function = (sectionNum: number): Object => {
    const colorMap: Array<string> = [
        COLORS.orange,
        COLORS.white,
        COLORS.gold,
        COLORS.white,
        COLORS.blue,
        COLORS.white,
    ];

    return {
        position: "relative",
        height: self.innerHeight,
        minHeight: 900,
        minWidth: 1100,
        backgroundColor: colorMap[sectionNum % colorMap.length],
    };
};

export default class App extends React.Component {
    render(): any {
        return (
            <div>
                <div style={sectionStyle(0)}>
                    <Title />
                </div>
                <div style={sectionStyle(1)}>
                    <Section
                        layout={Section.Layouts.Left}
                        imageSrc={""}
                        title={"Storable and Storable React"}
                        subtitle={"A Data Store Facilitating One-Way Data Flow"}
                        links={{
                            github: "https://github.com/nramadas/Storable",
                            npm: "https://www.npmjs.com/package/storablejs",
                        }}
                        text={STORABLE_TEXT}
                    />
                </div>
                <div style={sectionStyle(2)}>
                    <Section
                        layout={Section.Layouts.Right}
                        imageSrc={""}
                        title={"Hipmunk Anywhere"}
                        subtitle={"A Hipmunk Project Featuring Cross-Device Syncing of User State"}
                        links={{
                            view: "https://www.hipmunk.com/activity",
                        }}
                        text={HA_TEXT}
                    />
                </div>
                <div style={sectionStyle(3)}>
                    <Section
                        layout={Section.Layouts.Left}
                        imageSrc={""}
                        title={"Models & Collections"}
                        subtitle={"Extendable Model and Collection Base Classes"}
                        text={MODELS_TEXT}
                    />
                </div>
                <div style={sectionStyle(4)}>
                    <Section
                        layout={Section.Layouts.Right}
                        imageSrc={""}
                        title={"The Hipmunk Mobile Website"}
                        subtitle={"A Feature Rich App-Like Mobile Website for Hipmunk"}
                        links={{
                            view: "https://www.hipmunk.com",
                        }}
                        text={HA_MOBILE_TEXT}
                    />
                </div>
            </div>
        )
    }
};
