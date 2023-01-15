import React from "react";
import DoctorCard from "../doctor card/DoctorCard";
import Spacer from "../spacer/Spacer";
import { useHeader } from "../../context/DoctorContext";
import "./CardList.css";
import { switchToFacility } from "../../context/actions/HeaderAction";

function CardList() {
    const { headerDispatch } = useHeader();
    return (
        <div className="card__list">
            <DoctorCard
                title="879 Health Centers and Hospitals"
                description="Lorem ipsum dolor sit amet,consectetur adipiscing  elit"
                link="/facilities"
                onPressed={() => headerDispatch(switchToFacility())}
            />
            <Spacer type="width" width={10} />
            <DoctorCard
                title="2.5k Doctors and Health Workers"
                description="Lorem ipsum dolor sit amet,consectetur adipiscing  elit"
                link="/facilities"
                onPressed={() => headerDispatch(switchToFacility())}
            />
            <Spacer type="width" width={10} />
            <DoctorCard
                title="100+ Health Services"
                description="Lorem ipsum dolor sit amet,consectetur adipiscing  elit"
                link="/facilities"
                onPressed={() => headerDispatch(switchToFacility())}
            />
        </div>
    );
}

export default CardList;
