import React, { useEffect, useState } from "react";

function NavBar() {

    const [click, setClick] = useState(false);

  return (
    <nav className="nav" id="home">
      <div className="nav_link">
        <a href="https://github.com/AWS-af" className="nav_anchor" target="_blank">
          &lt; &#47; Abdul Wali Siddiqui &gt;
        </a>
      </div>
      <div className="nav_icon" onClick={() => setClick(prev => !prev)}>
        <div className={click ? "nav_icon_line_click" : "nav_icon_line"} />
        <div className={click ? "line_2_click" : "nav_icon_line line_2"} />
        <div className={click ? "line_3_click" : "nav_icon_line line_3"} />
      </div>
      <div className={click ? "drop_down_click" : "drop_down"}>
        <div className="drop_down_container">
          <a href="#home" onClick={()=> setClick(false)}>Home</a>
          <a href="#projects" onClick={()=> setClick(false)}>Projects</a>
          <a href="#about-me" onClick={()=> setClick(false)}>About me</a>
          <a href="#contact" onClick={()=> setClick(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
