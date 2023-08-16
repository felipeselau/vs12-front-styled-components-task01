import bruiserPath from "../../assets/Fighter_icon.webp";
import supPath from "../../assets/Controller_icon.webp";
import magePath from "../../assets/Mage_icon.webp";
import assassinPath from "../../assets/Slayer_icon.webp";
import adcPath from "../../assets/Marksman_icon.webp";
import { ClassCard } from "./style";
import { useState } from "react";


interface classeProps{
    gameClass: string;
    changeTheme: (currentTheme: string) => void;
}

export default function Classe(props: classeProps){
    const [currentTheme, setCurrentTheme] = useState("")
    let imgPath:string = "";

    switch(props.gameClass){
        case "Lutador":
            imgPath = bruiserPath;
        break;

        case "Assassino":
            imgPath = assassinPath;
        break;

        case "Mago":
            imgPath = magePath;
        break;

        case "Atirador":
            imgPath = adcPath;
        break;

        case "Suporte":
            imgPath = supPath;
        break;

        default:
            throw new Error("Classe de campeão Inválida")
    }


    return(
        <ClassCard>
            <label onClick={()=>{
                setCurrentTheme(props.gameClass);
                props.changeTheme(currentTheme);
            }}>
                <img src={imgPath} alt="" />
                <h3>{props.gameClass}</h3>
                <input type="radio" name="class-select" id="#" />
            </label>
        </ClassCard>
    )
}