function SendMail() {
    const Navn = document.getElementById("navn").value;
    const Alder = document.getElementById("alder").value;
    const Epost = document.getElementById("epost").value;
    const Mobil = document.getElementById("mobil").value;
    const Type = document.getElementById("type").value;
    const Beskrivelse = document.getElementById("beskrivelse").value;
    const Lengde = document.getElementById("lengde").value;
    const Teknisk = document.getElementById("teknisk").value;
    const Foresatte = document.getElementById("foresatte").value;
    const valgtFoto = document.querySelector('input[name="foto"]:checked');
    const Foto = valgtFoto ? valgtFoto.value : "ikke valgt";

    const body =
        "Navn: " + Navn + "\n" +
        "Alder: " + Alder + "\n" +
        "Epost: " + Epost + "\n" +
        "Mobil: " + Mobil + "\n" +
        "Type: " + Type + "\n" +
        "Beskrivelse: " + Beskrivelse + "\n" +
        "Lengde: " + Lengde + "\n" +
        "Teknisk: " + Teknisk + "\n" +
        "Foto/film tillatt: " + Foto + "\n" +
        "Foresatte: " + Foresatte;

    window.location.href =
        "mailto:vibeke.valestrand@glode.no?subject=" + encodeURIComponent("Påmelding") +
        "&body=" + encodeURIComponent(body);

    document.querySelector("form").style.display = "none";

    document.getElementById("takkMelding").style.display = "block";
} 

document.getElementById("pameldingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    fetch("/", {
        method: "POST",
        body: data
    })
    .then(() => {
        form.style.display = "none";
        document.getElementById("takkMelding").style.display = "block";
    })
    .catch(() => alert("Noe gikk galt. Prøv igjen."));
});