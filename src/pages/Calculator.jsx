import { useState } from 'react'

export default function Calculator() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [op, setOp] = useState('+')
  const [result, setResult] = useState('')

  const toNum = (v) => (v === '' || v === '-' || v === '.' ? NaN : Number(v))

  const compute = () => {
    const x = toNum(a)
    const y = toNum(b)
    if (Number.isNaN(x) || Number.isNaN(y)) {
      setResult('Enter valid numbers')
      return
    }
    let r
    switch (op) {
      case '+': r = x + y; break
      case '-': r = x - y; break
      case '*': r = x * y; break
      case '/': r = y === 0 ? 'Cannot divide by 0' : x / y; break
      default: r = 'Unknown op'
    }
    setResult(String(r))
  }

  const clear = () => {
    setA('')
    setB('')
    setOp('+')
    setResult('')
  }

  const inputStyle = { padding: '8px', width: '120px' }
  const btnStyle = { padding: '8px 12px', cursor: 'pointer', border: '1px solid #ccc', background: 'transparent' }
  const selectStyle = { padding: '8px' }
  const wrap = { display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '360px', margin: '40px auto', fontFamily: 'system-ui, Arial' }
  const row = { display: 'flex', gap: '8px', alignItems: 'center' }
  const title = { fontSize: '24px', marginBottom: '8px', textAlign: 'center' }
  const resultBox = { minHeight: '24px', border: '1px dashed #aaa', padding: '8px' }

  return (
    <div style={wrap}>
      <div style={title}>Simple Calculator</div>

      <div style={row}>
        <input
          style={inputStyle}
          type="number"
          placeholder="First number"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <select style={selectStyle} value={op} onChange={(e) => setOp(e.target.value)}>
          <option>+</option>
          <option>-</option>
          <option>*</option>
          <option>/</option>
        </select>
        <input
          style={inputStyle}
          type="number"
          placeholder="Second number"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>

      <div style={row}>
        <button style={btnStyle} onClick={compute}>= Compute</button>
        <button style={btnStyle} onClick={clear}>Clear</button>
      </div>

      <div><strong>Result:</strong></div>
      <div style={resultBox}>{result}</div>
    </div>
  )
}
