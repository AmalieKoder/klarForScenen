function SendMail() {
    const Navn = document.getElementById("navn").value;
    const Alder = document.getElementById("alder").value;
    const Epost = document.getElementById("epost").value;
    const Mobil = document.getElementById("mobil").value;
    const Type = document.getElementById("type").value;
    const Beskrivelse = document.getElementById("beskrivelse").value;
    const Lengde = document.getElementById("lengde").value;
    const Teknisk = document.getElementById("teknisk").value;
    const FotoJa = document.getElementById("fotoja").value;
    const FotoNei = document.getElementById("fotoNei").value;
    const Foresatte = document.getElementById("foresatte").value;

    window.location.href = "mailto:amlie.koder@gmail.com?navn="+Navn+"alder="+Alder+"epost="+Epost+"mobil="+Mobil+"type="+Type+"beskrivelse="+Beskrivelse+"lengde="+Lengde+"teknisk="+Teknisk+"fotoja="+FotoJa+"fotonei="+FotoNei+"foresatte="+Foresatte;
}