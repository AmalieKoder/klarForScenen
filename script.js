function SendMail() {
    const Navn = document.getElementById("navn").value;
    const Alder = document.getElementById("alder").value;
    const Epost = document.getElementById("epost").value;
    const Mobil = document.getElementById("mobil").value;
    const Type = document.getElementById("type").value;
    const Beskrivelse = document.getElementById("beskrivelse").value;
    const Lengde = document.getElementById("lengde").value;
    const Teknisk = document.getElementById("teknisk").value;
    const FotoJa = document.getElementById("fotoja").checked;
    const FotoNei = document.getElementById("fotonei").checked;
    const Foresatte = document.getElementById("foresatte").value;

    const body =
        "Navn: " + Navn + "\n" +
        "Alder: " + Alder + "\n" +
        "Epost: " + Epost + "\n" +
        "Mobil: " + Mobil + "\n" +
        "Type: " + Type + "\n" +
        "Beskrivelse: " + Beskrivelse + "\n" +
        "Lengde: " + Lengde + "\n" +
        "Teknisk: " + Teknisk + "\n" +
        "Foto tillatt: " + FotoJa + FotoNei + "\n" +
        "Foresatte: " + Foresatte;

    window.location.href =
        "mailto:amlie.koder@gmail.com?subject=" + encodeURIComponent("Påmelding") +
        "&body=" + encodeURIComponent(body);
}