document.getElementById("btn").onclick = () => {
    const link = document.createElement("a");
    link.href="snow-day.png";
    link.download = "i’ll-keep-it-safe.png";
    link.click();
}