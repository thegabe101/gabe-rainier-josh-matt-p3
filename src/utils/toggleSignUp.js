import


// added.
const [buttonText,setButtonText] = useState('I am a Coach')

// RD added function -----------------------------
function handleOnClick() {
  toggleCoachState()
  handleButtonChange()
}
// Added
function handleButtonChange() {
  if (buttonText === "I am a Coach") {
    setButtonText('I am a Client')
  } else {
    setButtonText('I am a Coach')
  }
  
}



{/* something wonky happening here when submitted wont */}
        <button className="superCoolButton" type="button" onClick={() => {
          handleButtonChange();
          toggleCoachState()
        }}>{buttonText}</button>
        <label for="coach"></label>
      </form>
      <p>
        Aleady have an account? <br />
        <a href="/login">Log in here</a>
      </p>
    </div>
  );
};