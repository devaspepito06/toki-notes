import { Navbar } from "./components/Navbar"
import { Notes } from "./Notes"
import { useTheme } from "@/components/theme-provider"

export function App() {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    const nextTheme =
      theme === "dark" ? "light" : theme === "light" ? "dark" : "dark"
    setTheme(nextTheme)
  }

  return (
    <div className="flex min-h-svh justify-center">
      <div className="flex w-[50%] flex-col gap-4 text-sm leading-loose">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Notes theme={theme} />
      </div>
    </div>
  )
}

export default App
