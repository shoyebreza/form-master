
import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
//import HookForm from './components/HookForm/HookForm'
//import RefForm from './components/RefForm/RefForm'
//import SimpleForm from './components/simpleForm/simpleForm'
//import StatefulForm from './components/StatefulForm/StatefulForm'


function App() {

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> 
      <StatefulForm></StatefulForm>
      <RefForm></RefForm>
      <HookForm></HookForm>*/}
      <ReusableForm
        formTitle={'Sign UP'}
        handleSubmit={handleSingUpSubmit}>
          <div>
            <h2>Sing UP</h2>
            <p>please sign up right now</p>
          </div>
        </ReusableForm>
      <ReusableForm
        formTitle={'Profile Update'}
        handleSubmit={handleUpdateProfile}
        submitBtnText='Update'>
          <div>
            <h2>Update Profile</h2>
            <p>Always keep your profile updated</p>
          </div>
        </ReusableForm>
    </>
  )
}

export default App
