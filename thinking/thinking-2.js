const ppl = ["u", "me", "them", "her", "him"];

function fillSpans(ppl) {
    const spans = document.querySelectorAll("span.fill");
  
    spans.forEach(span => {
      const random = Math.floor(Math.random() * ppl.length);
      span.textContent = ppl[random];
    });
  }

  fillSpans(ppl);


//The following code is generated with the aid of ChatGPT as required by my assignment.
//I asked for each "thinking about ___" span to have a random position in the canvas, and for svg lines to connect each span with the class "fill"

function layoutThoughts() {
    const thoughts = document.querySelectorAll(".thought");
    const svg = document.querySelector("#connector");
  
    const vw = window.innerWidth;
    const vh = window.innerHeight;
  
    // ChatGPT here clears all SVG lines
    svg.innerHTML = "";
  
    // ChatGPT here generates random x + y coordinates for each span
    thoughts.forEach(t => {
      const x = Math.random() * (vw - t.offsetWidth);
      const y = Math.random() * (vh - t.offsetHeight);
  
      t.style.left = x + "px";
      t.style.top = y + "px";
    });
  
    // ChatGPT here finds the center of each span
    const fills = [...document.querySelectorAll(".fill")];
  
    const points = fills.map(span => {
      const rect = span.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };
    });
  
    // ChatGPT here draws svg lines between the coordinates of two spans
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
  
  // ChatGPT here is having the code run immediately on load, and then every time the window’s resized
  layoutThoughts();
  window.addEventListener("resize", layoutThoughts);
  
  // An interesting part of Chat GPT is that it automatically added a user-experience-enhancing element that I didn’t conceive of...
  // It wrote code for re-randomizing the position of the spans on click.
  document.addEventListener("click", layoutThoughts);