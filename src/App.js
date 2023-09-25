// import logo from './logo.svg';
// import react from 'react';
import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import './App.css';

function App() {

  const [formvalue, setformvalue] = useState({ name: "", email: "", password: "" })

  const [select, setselect] = useState([])
  const options = [
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "JS", label: "JS" },
    { value: "JAVA", label: "JAVA" },
    { value: "PHYTON", label: "PHYTON" },
    { value: "C++", label: "C++" }
  ]
  const [placeholder, setplaceholder] = useState('Choose Skills')
  const [header, setheader] = useState('Try it free for 7 days then &#8377;180/mo thereafter..')
  const [active, setactive] = useState(false)
  const handlechange = (e) => {
    setformvalue({ ...formvalue, [e.target.name]: e.target.value })
    // console.log({[e.target.name ]:e.target.value} )

  }
  const selectchange = (e) => {
    console.log(e)
    e.map((info) => {
      setselect((prev) => [...prev, info.value])
    })
    console.log(select)
  }

  const tosubmit = () => {
    for (const value in formvalue) {
      if (formvalue[value].length == 0) {
        return false
      }
      return true
    }
  }

  const claimclick = () => {
    setselect([])
    setheader("You have successfully Activated the plan....")
    setplaceholder("Choose Skills")

  }

  useEffect(() => {
    if (select.length > 0 && tosubmit()) {
      setactive(true)
    }
  }, [])

  return (

    <div className="bg">

      <div className="App" >

        {/* left-side  */}
        <div className="left-side">
          <h1 className="Title">Learn to code by watching others</h1>
          <p className="sub-title">See how experienced developers solve problems in real-time.
            Watching scripted tutorials is great, but understanding how developer think is invaluable.</p>
        </div>

        {/* right-side */}

        <div className="right-side">
          <div className="top">
            {header}
          </div>
          <form>
            {/* right-side-box */}
            <div className="bottom">
              <input type="text" name="name" id="username" placeholder="User Name" value={formvalue.name} onChange={handlechange} />
              <input type="email" name="email" id="email" placeholder="Email Address" value={formvalue.email} onChange={handlechange} />
              <input type="password" name="password" id="password" placeholder="Password" value={formvalue.password} onChange={handlechange} />
              <div>
                <Select options={options} onChange={selectchange} placeholder={placeholder} className="form-select" isMulti />

                <p id="category"></p>
              </div>

              <div>
                {active ? <button id="final-btn" onClick={claimclick}>Submit</button> : <button id="final-btn-before" disabled >submit</button>}
                <p id="sub-p">By clicking the button you are agreeing to our <a href="http://www.google.com">Terms and Services</a></p>
              </div>

            </div>
          </form>
        </div>


      </div>

    </div>

  );
}

export default App;
