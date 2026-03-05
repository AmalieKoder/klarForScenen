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