const ppl = ["u", "me", "them", "her", "him"];

function fillSpans(ppl) {
    const spans = document.querySelectorAll("span.fill");
  
    spans.forEach(span => {
      const random = Math.floor(Math.random() * ppl.length);
      span.textContent = ppl[random];
    });
  }

  fillSpans(ppl);