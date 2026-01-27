document.getElementById("btn").onclick = () => {
    const link = document.createElement("a");
    link.href="snow-day.png";
    link.download = "remember-this-for-me.png";
    link.click();
}