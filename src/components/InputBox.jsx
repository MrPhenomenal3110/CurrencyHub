import React from 'react'

function InputBox(
  label,
  amount,
  onAmountChange,
  onInputChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  customClassName = ""
) {
  return (
    <div className={`w-full h-screen bg-slate-200 flex flex-col justify-center items-center ${customClassName}`}>
      <div className='w-full h-screen flex justify-center items-center'>InputBox</div>
    </div>
  )
}

export default InputBox