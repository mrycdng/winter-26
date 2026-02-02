const ppl = ["u", "me", "them", "her", "him"];

function fillSpans(ppl) {
    const spans = document.querySelectorAll("span.fill");
  
    spans.forEach(span => {
      const random = Math.floor(Math.random() * ppl.length);
      span.textContent = ppl[random];
    });
  }

  fillSpans(ppl);


//The following code is generated with the aid of Chat GPT as required by my assignment.
//I asked for each "thinking about ___" segment to have a random position in the canvas, and for svg lines to connect each span with the class "fill"

function layoutThoughts() {
    const thoughts = document.querySelectorAll(".thought");
    const svg = document.querySelector("#connector");
  
    const vw = window.innerWidth;
    const vh = window.innerHeight;
  
    // clear old lines
    svg.innerHTML = "";
  
    // random position each thought
    thoughts.forEach(t => {
      const x = Math.random() * (vw - t.offsetWidth);
      const y = Math.random() * (vh - t.offsetHeight);
  
      t.style.left = x + "px";
      t.style.top = y + "px";
    });
  
    // collect span centers
    const fills = [...document.querySelectorAll(".fill")];
  
    const points = fills.map(span => {
      const rect = span.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };
    });
  
    // draw lines connecting them in order
    for (let i = 0; i < points.length - 1; i++) {
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  
      line.setAttribute("x1", points[i].x);
      line.setAttribute("y1", points[i].y);
      line.setAttribute("x2", points[i + 1].x);
      line.setAttribute("y2", points[i + 1].y);
  
      line.setAttribute("stroke", "white");
      line.setAttribute("stroke-width", "1");
  
      svg.appendChild(line);
    }
  }
  
  // run on load + resize
  layoutThoughts();
  window.addEventListener("resize", layoutThoughts);
  
  // An interesting part of Chat GPT is that it automatically added a user-xp-enhancing element that I didn’t conceive of...

  // optional: re-randomize on click for generative feel
  document.addEventListener("click", layoutThoughts);