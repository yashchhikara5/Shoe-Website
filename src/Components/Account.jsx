function Account() {
  return (
    <div>
      <h2>Log In</h2>
      <div>
        <input type="email" placeholder="E-Mail"></input>
      </div>
      <div>
        <input type="password" placeholder="Password"></input>
      </div>
      <input type="submit" value="LOG IN"></input>
      <br />
      Already have an account?
      <input type="submit" value="Sign Up"></input>
    </div>
  )
}

export default Account
