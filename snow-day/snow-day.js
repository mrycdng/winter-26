document.getElementById("btn").onclick = () => {
    window.alert('thank you! i guess i’m just... not very good at holding on to things.')
    const link = document.createElement("a");
    link.href="snow-day.png";
    link.download = "remember-this-for-me.png";
    link.click();
}