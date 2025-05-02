
export default function Form() {

  const signUp = (formData)=>{
    
   
    console.log(Object.fromEntries(formData));
   
  }
  return (
    <section>
      <h1>Signup</h1>
      <form action={signUp} >
        <label htmlFor="email">Email 
        
        </label>
        <input type="email" 
        name='email'
        defaultValue="dan@gmail.com"
        id='email'
        placeholder='Enter your email'
        />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password"
        placeholder='Enter your password' id="password" />
          <label htmlFor="description">Description</label>
        <textarea name="description" id="description"></textarea>
        <fieldset>
          <legend>Employment Status</legend>
        <label htmlFor="">
        <input type="radio" name="employmentStatus" value="unemployed"/>
       Unemployed
        </label>
        <label htmlFor="">
        <input type="radio" name="employmentStatus" value={"part-time"}/>
        Partime
        </label>
        <label htmlFor="">
        <input type="radio" name="employmentStatus" value={"full-time"} defaultChecked/>
        Fulltime
        </label>
        </fieldset>
        <fieldset>
          <legend>Dietary restrictions:</legend>
        <label htmlFor="">
        <input type="checkbox" name="dietaryRestrictions" value="unemployed"/>
       Unemployed
        </label>
        <label htmlFor="">
        <input type="checkbox" name="dietaryRestrictions" value={"part-time"}/>
        Partime
        </label>
        <label htmlFor="">
        <input type="checkbox" name="dietaryRestrictions" value={"full-time"} defaultChecked/>
        Fulltime
        </label>
        </fieldset>
       
       <label htmlFor="favColor">What is your favorite color?</label>
       <select name="favColor" id="favColor" defaultValue="">
        <option value="" disabled> Choose a color</option>
        <option value="Red">Red</option>
        <option value="Orange">Orange</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
        <option value="White">White</option>
        <option value="Violet">Violet</option>
       </select>

      <button>Submit</button>
      </form>
    </section>
  )
}
