import style from "../style/style2.module.css";

export function MyContainer() {
  return (
    <div>
      {/* css module에서 class여러개 줄때는 `` (template literal) 사용*/}
      <h1 className={`${style.boxClass} ${style.note} ${style.error}`}>
        Lorem ipsum dolor sit amet.
      </h1>
      {/* 2번째 방법 join(" ") */}
      <h1 className={[style.boxClass, style.error, style.note].join(" ")}>
        Lorem ipsum dolor sit amet.
      </h1>
    </div>
  );
}
