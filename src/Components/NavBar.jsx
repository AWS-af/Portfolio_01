import React, { useEffect, useState } from "react";

function NavBar() {

    const [click, setClick] = useState(false);
    function clicking(){
        return setClick(prev => !prev)
    }
    useEffect(()=>{
        clicking();
    },[])
  return (
    <nav className="nav">
      <div className="nav_link">
        <a href="https://github.com/AWS-af" className="nav_anchor">
          &lt; &#47; Abdul Wali Siddiqui &gt;
        </a>
      </div>
      <div className="nav_icon" onClick={() => clicking()}>
        <div className={click ? "nav_icon_line_click" : "nav_icon_line"} />
        <div className={click ? "line_2_click" : "nav_icon_line line_2"} />
        <div className={click ? "line_3_click" : "nav_icon_line line_3"} />
      </div>
    </nav>
  );
}

export default NavBar;
