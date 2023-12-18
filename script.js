const form = document.getElementById("form");

form.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    const file = document.getElementById("files");
    const formData = new FormData();

    formData.append("files", file.files[0]);
    fetch("https://dynamic-certification-generator-and.onrender.com/uploadfile", {
        method: 'POST',
        body: formData,
        
    })
        .then((res) => {
            location.reload();
            console.log(res);
        })
        .catch((err) => ("Error occured", err));
        
}