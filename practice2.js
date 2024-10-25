function alert_paragraph_color() {
    var border_R = document.getElementById("b_R").value;
    var border_G = document.getElementById("b_G").value;
    var border_B = document.getElementById("b_B").value;
    
    var border_width = document.getElementById("b_width").value;
    
    var bg_R = document.getElementById("bg_R").value;
    var bg_G = document.getElementById("bg_G").value;
    var bg_B = document.getElementById("bg_B").value;

    var tag = document.getElementById("paragraph");
    
    tag.style.borderColor = `rgb(${border_R},${border_G},${border_B})`;
    tag.style.borderWidth = border_width
    tag.style.backgroundColor = `rgb(${bg_R},${bg_G},${bg_B})`;
}
