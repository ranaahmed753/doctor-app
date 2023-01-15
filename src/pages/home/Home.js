import React from "react";
import "./Home.css";
import { DOCTOR } from "../../assets/index";
import Typography from "../../components/typography/Typography";
import Paragraph from "../../components/paragraph/Paragraph";
import { paragraphText } from "../../assets/constant/Constants";
import FilledButton from "../../components/button/FilledButton";
import OutlineButton from "../../components/button/OutlineButton";
import Spacer from "../../components/spacer/Spacer";
import CardList from "../../components/doctor card list/CardList";

function Home() {
    return (
        <div className="home">
            <div className="homeSidebar__left">
                <Typography type="take-care" />
                <Typography type="health-with" />
                <Paragraph title={paragraphText} fontSize={15} />
                <Spacer type="height" height={20} />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <FilledButton title="Get Started" />
                    <Spacer type="width" width={10} />
                    <OutlineButton title="Learn More" />
                </div>
                <Spacer type="height" height={60} />
                <CardList />
            </div>
            <div className="homeSidebar__right">
                <div
                    style={{
                        backgroundColor: "#8BCFBC",
                        borderRadius: 999,
                        height: 400,
                        width: 400,
                        zIndex: 99,
                        position: "absolute",
                        top: 0,
                        right: 20,
                        opacity: 0.3,
                    }}
                />
                <div
                    style={{
                        backgroundColor: "#8BCFBC",
                        borderRadius: 999,
                        height: 200,
                        width: 200,
                        zIndex: 99,
                        position: "absolute",
                        bottom: 30,
                        left: 20,
                        opacity: 0.3,
                    }}
                />
                <img
                    alt=""
                    src={DOCTOR}
                    style={{
                        marginTop: 0,
                        objectFit: "cover",
                        // height: "100vh",
                        // width: "100%",
                        minHeight: "100vh",
                        maxWidth: "100%",
                        flex: 1,
                        zIndex: 100,
                        position: "absolute",
                        marginRight: 10,
                        top: 0,
                        left: 0,
                        right: 0,
                    }}
                />
            </div>
        </div>
    );
}

export default Home;
