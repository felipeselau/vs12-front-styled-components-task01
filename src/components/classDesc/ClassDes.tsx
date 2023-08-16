import { ClassDescCard } from "./style";

interface iClassDesc{
    selectedClass: string
}

export default function ClassDesc(props: iClassDesc){

    let text:string = "";

    const classesDesc = {
        lutador: "Os lutadores são campeões versáteis que possuem uma combinação de resistência e dano. Eles são frequentemente encontrados no front-line, engajando inimigos e causando estragos com habilidades corpo a corpo. Lutadores têm um equilíbrio entre sobrevivência e poder de impacto, sendo capazes de absorver dano enquanto ainda infligem dano significativo aos oponentes.",

        assassino: "Os assassinos são mestres em eliminar alvos individuais rapidamente. Eles possuem alta mobilidade e dano explosivo, sendo capazes de eliminar inimigos frágeis em questão de segundos. Assassinos geralmente são encontrados na rota do meio ou na selva, e sua capacidade de surpreender e eliminar alvos valiosos é sua maior força.",

        mago: "Os magos são campeões especializados em causar dano mágico a distância. Eles geralmente possuem habilidades de área de efeito (AoE) que podem causar estragos em grupos de inimigos. Magos são frequentemente vistos nas rotas do meio (mid lane) e têm a capacidade de controlar o campo de batalha com suas habilidades de controle de grupo e dano mágico.",

        atirador: "Os atiradores, também conhecidos como ADCs (Attack Damage Carries), são campeões de longo alcance que causam dano físico constante aos inimigos. Eles são frequentemente encontrados na rota inferior (bot lane) e são essenciais para causar dano consistente em confrontos de equipe. Atiradores dependem de ataques básicos e itens para aumentar seu poder de dano ao longo do jogo.",

        suporte: "Os suportes são campeões cujo papel principal é proteger, curar, dar suporte e controlar o campo de batalha para sua equipe. Eles frequentemente acompanham o atirador na rota inferior e trabalham para garantir a sobrevivência e o sucesso do atirador e da equipe como um todo. Suportes possuem habilidades de controle de grupo, cura e utilidade para influenciar o jogo de maneira estratégica.",

        default: "Cada classe tem uma variedade de campeões com habilidades e estilos de jogo únicos, e a estratégia de equipe e o equilíbrio de composição são fundamentais para o sucesso no League of Legends."
    }
    
    switch(props.selectedClass){
        case "Lutador":
            text = classesDesc.lutador;
        break;

        case "Assassino":
            text = classesDesc.assassino;
        break;

        case "Mago":
            text = classesDesc.mago;
        break;

        case "Atirador":
            text = classesDesc.atirador;
        break;

        case "Suporte":
            text = classesDesc.suporte;
        break;

        default:
            text = classesDesc.default;
        break;
        
    }

    return(
        <ClassDescCard
        data-testid="desc-card"
        >
        <h3>{text}</h3>
        </ClassDescCard>
        
    )
}