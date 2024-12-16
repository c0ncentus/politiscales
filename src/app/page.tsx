import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}

function Quizz({q}:{q:string[][]}) {
  return <div id="mainFrame">
    <h2 id="question-number">Question 1 sur 117</h2>
    <div className="questionBox"><p id="question-text">La réduction des déchets doit se faire par une réduction de la production.</p></div>
    <div className="navButtons questionButtons">
      <button onClick={() => { }} className="strong-agree" data-i18n="strong_agree">Absolument d'accord</button>
      <button onClick={() => { }} className="agree" data-i18n="agree">Plutôt d'accord</button>
      <button onClick={() => { }} className="neutral" data-i18n="neutral">Neutre ou hésitant</button>
      <button onClick={() => { }} className="disagree" data-i18n="disagree">Plutôt pas d'accord</button>
      <button onClick={() => { }} className="strong-disagree" data-i18n="strong_disagree">Absolument pas d'accord</button>

      <a href="#" className="button" onClick={() => { }} id="back_button" data-i18n="prev_question" style={{ display: "none" }}>Retour à la question précédente</a>
      <a className="button" href="./" id="back_button_off" data-i18n="back_home" style={{ display: "block" }}>Retour à l'accueil</a>
    </div>
  </div>
}

interface SemiBar {
  img: string,
  label: string,
  prct: number,
}
function ResultBar({ left, right }: { left: SemiBar, right: SemiBar }) {
  const ADD = left.prct + right.prct;
  const IsOK = ADD <= 100 && ADD >= 0;
  const REST = 100 - ADD
  return IsOK ? <div className="scale">
    <div className="left"><Image src={left.img} width={100} height={100} alt="_" /></div>
    <div className="axis">
      <div className="label">
        <div className="left-label">{left.label}</div>
        <div className="right-label">{right.label}</div>
      </div>
      <div className="axis-bar">
        <div id="cAxisNeg" className="axis-left" style={{ width: `${left.prct}%`, backgroundColor: "red" }}>
          <span id="cAxisNegText">{left.prct}%</span>
        </div>
        <div id="cAxisMid" className="axis-center axisNeutral" style={{ backgroundColor: "red", width: `${REST}` }}>
          <span id="cAxisMidText" style={{ display: REST ? "block" : "none" }}>{REST}%</span>
        </div>
        <div id="cAxisPos" className="axis-right axisEssentialism" style={{ width: right.prct, backgroundColor: "red" }}>
          <span id="cAxisPosText">{right.prct}%</span>
        </div>
      </div>
    </div>
    <div className="right"><Image src={right.img} width={100} height={100} alt="_" /></div>
  </div> : <></>
}
function ResultQuizz() {
  return <div className="columnContainer">
    <div className="columnLeft">
      <ResultBar
        left={{ img: "./images/constructivism.png", label: "Constructivisme", prct: 40 }}
        right={{ label: "Essentialisme", img: "./images/constructivism.png", prct: 60 }}
      />
      <ResultBar
        left={{ img: "./images/constructivism.png", label: "Constructivisme", prct: 40 }}
        right={{ label: "Essentialisme", img: "", prct: 60 }}
      />
      <ResultBar
        left={{ img: "./images/constructivism.png", label: "Constructivisme", prct: 40 }}
        right={{ label: "Essentialisme", img: "", prct: 60 }}
      />
      <ResultBar
        left={{ img: "./images/constructivism.png", label: "Constructivisme", prct: 40 }}
        right={{ label: "Essentialisme", img: "", prct: 60 }}
      />
      <ResultBar
        left={{ img: "./images/constructivism.png", label: "Constructivisme", prct: 40 }}
        right={{ label: "Essentialisme", img: "", prct: 60 }}
      />
    </div>

    <div className="columnRight">
      <ResultBar
        left={{ img: "./images/constructivism.png", label: "Constructivisme", prct: 40 }}
        right={{ label: "Essentialisme", img: "", prct: 60 }}
      />
      <ResultBar
        left={{ img: "./images/constructivism.png", label: "Constructivisme", prct: 40 }}
        right={{ label: "Essentialisme", img: "", prct: 60 }}
      />
      <ResultBar
        left={{ img: "./images/constructivism.png", label: "Constructivisme", prct: 40 }}
        right={{ label: "Essentialisme", img: "", prct: 60 }}
      />
      <ResultBar
        left={{ img: "./images/constructivism.png", label: "Constructivisme", prct: 40 }}
        right={{ label: "Essentialisme", img: "", prct: 60 }}
      />
      <ResultBar
        left={{ img: "./images/constructivism.png", label: "Constructivisme", prct: 40 }}
        right={{ label: "Essentialisme", img: "", prct: 60 }}
      />
    </div>
  </div>
}