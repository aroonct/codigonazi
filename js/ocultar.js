

function ocultar_code() {
    var code_area = document.getElementById("code-area");
    code_area.style.display = "none";
    var preview = document.getElementById("preview-area");
    preview.style.width = "100%";
    preview.style.position = "absolute";
}

function mostrar_code() {
    var code_area = document.getElementById("code-area");
    code_area.style.display = "block";
    var preview = document.getElementById("preview-area");
    preview.style.width = "50%";
    preview.style.position = "relative";
}