"use client";

import style from "../Header.module.css";

export default function ChangeLanguaje({ languaje, setLanguaje }) {
  const toggleLanguaje = () => {
    setLanguaje(!languaje);
  };
  return (
    <div className={style.containerLanguaje}>
      <span>es</span>
      <label className={style.switch}>
        <input
          type="checkbox"
          className={style.input}
          onClick={toggleLanguaje}
        />
        <span className={style.slider}></span>
      </label>
      <span>en</span>
    </div>
  );
}
