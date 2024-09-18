import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  collapsedNumWords = 20,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  buttonColor = " #1f09cd",
  expanded = false,
  children,
  className,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  //se isExpanded for true displayText recebe o children(o texto completo), se nao, transforma num array com funcao split(),
  // define o array da posicao 0 ate a posicao do valor de collapdesNumWords com funcao slice, depois junta o
  // Array com funcao join() e concatena com 3 pontos
  const displayText = isExpanded
    ? children
    : children.split("").slice(0, collapsedNumWords).join("") + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "4px",
    color: buttonColor,
  };
  return (
    <div className={className}>
      {/* atualiza o displayText automaticamente de acordo com o true ou false de isExpanded */}
      <span>{displayText}</span>
      <button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
        {/* se is expanded for true entao mostra o valor de colapsebtntxt, se nao mostra o valor de expandBtnTxt */}
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
