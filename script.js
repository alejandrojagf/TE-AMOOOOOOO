document.getElementById("yes").addEventListener("click", function() {
    document.getElementById("message").style.display = "block";
});

document.getElementById("no").addEventListener("mouseover", function() {
    this.style.position = "absolute";
    this.style.top = Math.random() * window.innerHeight + "px";
    this.style.left = Math.random() * window.innerWidth + "px";
});
