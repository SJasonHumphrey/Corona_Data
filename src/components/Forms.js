import React, {useState, useEffect} from "react";


const Forms = () => {

  const [textValue, setTextValue] = useState('Select');
  const [isValid, setIsValid] = useState(false);
  const [selectValue, setSelectValue] = useState('Houston')

  const handleForm = (e) => {

    e.preventDefault()

    console.log(`
      Form Submitted
      ${textValue}
      ${isValid}
      ${selectValue}
    `);
  }

  return <>

    <h2>{textValue}</h2>
    <h2>{isValid ? "true" : "false"}</h2>
    <h2>{selectValue}</h2>

    <form onSubmit={handleForm}>

      <input type="text" value={textValue} onChange={(e)=>setTextValue(e.target.value)} />

      <br /> 

      <input type="checkbox" checked={isValid} onChange={(e)=>{setIsValid(e.target.checked)}} />


      <select name="selectValue" value={selectValue} onChange={e=>setSelectValue(e.target.value)}>
        <option value="Houston">Houston</option>
        <option value="Atlanta">Atlanta</option>
        <option value="Las Vegas">Las Vegas</option>
        <option value="Ashville">Ashville</option>
        <option value="Nashville">Nashville</option>
        <option value="Seattle">Seattle</option>
        <option value="Tampa">Tampa</option>
        <option value="Indianapolis">Indianapolis</option>
        <option value="Dallas">Dallas</option>
      </select>

      <input type="submit" />

    </form>
  
  
  </>;
};

export default Forms;