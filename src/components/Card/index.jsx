import React from "react";
import { Image } from "react-native";
import { ContainerCard } from "./style";

const Card = () => {
    return <ContainerCard>
        <Image
            source="https://github.com/YanCarlosCamargo.png"
            style={{ width: "60%", height: "60%", alignSelf: "center", justifyContent: "center" }}
        />
    </ContainerCard>
}

export default Card;