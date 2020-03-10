import React from 'react';


const SelectOptionInput = ({ options, selectClass, onSelectChange, optionClass }) => {
  const selectOptions = options.map((state, i) => <option key={i} value={state.value}>{state.label}</option>);  


  return (
    <div>
      <select className={selectClass} onChange={e => {
          onSelectChange(e.target.value)}
        }>
        <option className={optionClass}>Select State</option>
        { selectOptions }
      </select>
    </div>
  )
}

export default SelectOptionInput;