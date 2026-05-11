import type { NextPage } from "next"
import Head from "next/head"
import { useMemo, useState } from "react"
import styled from "styled-components"

const TIP_PERCENTS = [5, 10, 15, 25, 50]

const TipCalculator: NextPage = () => {
  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0)
  const [people, setPeople] = useState(1)

  const billPerPerson = useMemo(() => (bill / people), [bill, people])
  const tipAmount = useMemo(() => (billPerPerson * tip / 100), [billPerPerson, tip])
  const total = useMemo(() => (billPerPerson + tipAmount), [billPerPerson, tipAmount])

  return (
    <PageWrapper>
      <Styles>
        <Head>
          <title>Tip Calculator</title>
        </Head>
        <div className="container">
          <header>
            <h1>SPLI</h1>
            <h1>TTER</h1>
          </header>

          <section className="cal">
            <div className="cal_options">
              <div>
                <label className="options_title" htmlFor="bill">Bill</label>
                <div className='form-input'>
                  <img src="/assets/challenges/tip-calculator-app-main/images/icon-dollar.svg" alt="" />
                  <input id="bill" type="number" placeholder="0" 
                    value={bill}
                    onChange={e => setBill(Number(e.target.value))}
                  />
                </div>
              </div>

              <div>
                <label className="options_title">Select Tip %</label>
                <div className="tip">
                  {TIP_PERCENTS.map((value, idx) => 
                    <TipRadioButton  
                      key={idx}
                      value={value} 
                      onChange={setTip}
                      checked={(value === tip)}
                    />
                  )}
                  <label>
                    <input type="radio" id="custom-tip-radio" className="d-none" name="tip" value="custom" />
                    <input type="number" id="custom-tip" placeholder="Custom"
                      onFocus={() => setTip(0)}
                      onChange={e => setTip(Number(e.target.value))}
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="options_title" htmlFor="people">Number of People</label>
                <div className='form-input'>
                  <img src="/assets/challenges/tip-calculator-app-main/images/icon-person.svg" alt="" />
                  <input id="people" type="number" placeholder="0" 
                    min={1}
                    value={people}
                    onChange={e => setPeople(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>
            <div className="cal_result">
              <div>
                <div className="result-group">
                  <div className="title">
                    <h2>Tip Amount</h2>
                    <small>/ person</small>
                  </div>
                  <div id="tip-amt" className="amount">
                    ${tipAmount.toFixed(2)}
                  </div>
                </div>
                <div className="result-group">
                  <div className="title">
                    <h2>Total</h2>
                    <small>/ person</small>
                  </div>
                  <div id="total" className="amount">
                    ${total.toFixed(2)}
                  </div>
                </div>
              </div>


              <button type='reset' className="btn-reset"
                onClick={() => {
                  setBill(0)
                  setTip(0)
                  setPeople(1)
                }}
              >
                RESET
              </button>
            </div>
          </section>
        </div>
      </Styles>
    </PageWrapper>
  )
}

export default TipCalculator

const PageWrapper = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #c5e4e7;

  & * {
    font-family: "Space Mono", monospace;
  }
`

const TipRadioButton = ({
  onChange,
  value,
  checked
}: {
  onChange: (val: number) => void,
  value: number,
  checked: boolean
}) => (
  <label>
    <input 
      type="radio" 
      className="d-none" 
      name="tip" 
      value={value} 
      onChange={e => onChange(Number(e.target.value))}
      checked={checked}
    />
    <span>{value}%</span>
  </label>
)

const Styles = styled.div`

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

button {
  cursor: pointer;
}

.d-none {
  display: none;
}

.container {
  display: flex;
  flex-direction: column;
  margin-top: -75px;
}
.container header {
  margin: 2rem;
  text-align: center;
  color: #5e7a7d;
  font-size: 0.6rem;
}
.container header h1 {
  letter-spacing: 5px;
}

.cal {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.75rem;
  width: 670px;
}
.cal .cal_options {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cal .cal_options > div:not(:last-child) {
  margin-bottom: 1.5rem;
}
.cal label.options_title {
  color: #5e7a7d;
  font-weight: bolder;
  font-size: 0.8rem;
  display: block;
  margin-bottom: 0.5rem;
}
.cal input {
  border: none;
  background-color: #f4fafa;
  color: #00494d;
  font-size: 1.2rem;
  text-align: right;
  font-weight: bolder;
}
.cal input:focus {
  outline: none;
}
.cal .form-input {
  background-color: #f4fafa;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.6rem;
}
.cal .form-input img {
  height: 1rem;
  -o-object-fit: contain;
     object-fit: contain;
}
.cal .tip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
}
.cal .tip input[type=radio]:checked ~ span {
  background-color: #26c0ab;
  color: #00494d;
  font-weight: 600;
}
.cal .tip span {
  display: block;
  border-radius: 0.3rem;
  font-size: 1.1rem;
  background-color: #00494d;
  color: white;
  padding: 6px 0;
  width: 100%;
  text-align: center;
  cursor: pointer;
}
.cal .tip label > input[type=number] {
  width: 100%;
  padding: 3px;
  font-weight: 600;
  text-align: center;
  font-size: 1.2rem;
  height: 100%;
  border-radius: 0.3rem;
}

.cal_result {
  background-color: #00494d;
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cal_result .result-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.cal_result .result-group h2 {
  color: white;
  font-size: 0.9rem;
}
.cal_result .result-group small {
  color: #7f9c9f;
  font-size: 0.7rem;
}
.cal_result .result-group .amount {
  color: #26c0ab;
  font-size: 1.8rem;
}
.cal_result .btn-reset {
  color: #00494d;
  background-color: #26c0ab;
  border: none;
  padding: 0.5rem;
  font-size: 0.9rem;
  font-weight: 700;
  border-radius: 0.35rem;
  margin-top: 1.5rem;
}

@media screen and (max-width: 588px) {
  .container {
    margin-top: 0;
  }

  .cal {
    grid-template-columns: 1fr;
    width: 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .cal .tip {
    grid-template-columns: repeat(2, 1fr);
  }
}
`
