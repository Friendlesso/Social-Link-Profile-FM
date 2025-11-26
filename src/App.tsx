import { LinkList } from "./components/LinkList/LinkList"
import { ProfileInfo } from "./components/ProfileInfo/ProfileInfo"

function App() {



  return (
    <section 
      className="w-[85vw] sm:w-[50vw] min-h-[70vh] sm:max-w-[50vh] rounded-2xl bg-[#1f1f1f] flex flex-col justify-center"
    >
      <ProfileInfo />
      <LinkList />
    </section>
  )
}

export default App
