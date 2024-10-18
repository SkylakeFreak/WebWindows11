import React from "react";
import thispc from "../asset/thispc.png";

function Thispc({ setcurrent, setminimize, array1, instanceid }) {
  const onclick = () => {
    if (array1.length == 0) {
      setcurrent(false);
    } else {
      let index = -1;
      for (let ele of array1) {
        index += 1;
        if (ele[0] === instanceid) {
          break;
        }
      }
      array1.splice(index, 1);
    }

    setcurrent(false);
  };
  const onclickmini = () => {
    if (array1.length != 0) {
      let flag = false;
      for (let ele of array1) {
        console.log("debugger", instanceid, ele[0]);
        if (ele[0] === instanceid) {
          console.log("already");
          flag=true;
          setcurrent(false);
          break;
        } else {
            flag=false
         
        }
      }
      if (flag==true){
        setcurrent(false);

      }
      else{
        setminimize([...array1, [instanceid, thispc, "Thispc"]]);
        setcurrent(false);

      }
    } else {
      setminimize([...array1, [instanceid, thispc, "Thispc"]]);
      setcurrent(false);
    }
  };
  return (
    <div className="h-[60vh] w-[60vw] flex-col outline outline-1 flex bg-white">
      <div className="h-[50px] flex items-center justify-end w-full">
        <div
          onClick={() => {
            onclick();
          }}
          className="text-white mr-1 hover:cursor-pointer hover:opacity-80 transition-all duration-150"
        >
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ios-filled/50/multiply-2.png"
            alt="multiply-2"
          />
        </div>
        <div
          onClick={() => {
            onclickmini();
          }}
          className="text-white mr-1 hover:cursor-pointer hover:opacity-80 transition-all duration-150"
        >
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/glyph-neue/64/minimize-window.png"
            alt="multiply-2"
          />
        </div>
      </div>
      <div
        id="boxarea"
        className="h-full w-full items-center justify-center flex flex-col"
      >
        <p>This PC</p>
        <p>{instanceid}</p>
      </div>
    </div>
  );
}

export default Thispc;
