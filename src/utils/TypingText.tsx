import { useEffect, useRef, useState } from "react";
import { palette } from "@/utils/color";

function TypingText({ text = "", start = false, speed = 20 }: { text?: string; start?: boolean; speed?: number }) {
  const [displayedText, setDisplayedText] = useState("");
  const [finished, setFinished] = useState(false);
  const timerRef = useRef<number | null>(null);
  const idxRef = useRef(0);

  // garante que seja string "limpa" — evita strings "undefined" ou "null"
  const safeText = (() => {
    if (text === null || text === undefined) return "";
    const s = String(text);
    if (s.trim() === "undefined" || s.trim() === "null") return "";
    return s;
  })();

  useEffect(() => {
    // se não deve começar, reseta tudo
    if (!start) {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      idxRef.current = 0;
      setDisplayedText("");
      setFinished(false);
      return;
    }

    // start = true
    setDisplayedText("");
    setFinished(false);
    idxRef.current = 0;

    const tick = () => {
      // se por alguma razão safeText mudou e é vazio, termina
      if (!safeText || idxRef.current >= safeText.length) {
        setFinished(true);
        timerRef.current = null;
        return;
      }

      // pega caractere com charAt (não retorna 'undefined')
      const ch = safeText.charAt(idxRef.current);
      setDisplayedText((prev) => prev + ch);
      idxRef.current += 1;

      // agenda próximo
      timerRef.current = window.setTimeout(tick, speed);
    };

    // inicia
    tick();

    // cleanup
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [safeText, start, speed]);

  return (
    <p className={`text-sm text-[${palette.text.primary}] font-mono leading-relaxed whitespace-pre-wrap`}>
      {displayedText}
      {!finished && start && <span className="animate-pulse">|</span>}
    </p>
  );
}

export default TypingText;
