import React, { useState } from 'react'

function InputBox(
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  customClassName = ""
) {
  return (
    <div className={`w-full h-screen bg-slate-200 flex flex-col justify-center items-center ${customClassName}`}>
      <div className='w-full h-screen flex justify-center items-center'>
        <label htmlFor="">{label}</label>
        <input
        type="number"
        value={amount}
        onChange={onAmountChange && onAmountChange(Number(e.target.value))}
        placeholder='Amount ...'
        disabled={amountDisabled}
        />
      </div>
      <div>
        <span>Select Currency</span>
        <select
        name=""
        id=""
        value={selectedCurrency}
        onChange={onCurrencyChange && onCurrencyChange(Number(e.target.value))}
        >{currencyOptions.map((currency) => {
          return(
            <option key={currency} value={currency}>{currency}</option>
          )
        })}
        </select>
      </div>
    </div>
  )
}

export default InputBox;