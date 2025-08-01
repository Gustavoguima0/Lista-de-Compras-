function gerarDiaDaSemana() {
    const agora = new Date();
    const diaDaSemana = agora.toLocaleDateString("pt-BR", { weekday: "long" });
    const data = agora.toLocaleDateString("pt-BR");
    const hora = agora.toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" });
    return `${diaDaSemana} (${data}) às ${hora}`;
}

export default gerarDiaDaSemana;
