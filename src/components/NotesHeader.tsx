import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Button } from "./ui/button"
import { RiAddFill } from "@remixicon/react"
// import { Badge } from "./ui/badge"
// import { useTheme } from "@/components/theme-provider"

export const NotestHeader = () => {
  //   const { setTheme, theme } = useTheme()

  //   const toggleTheme = () => {
  //     const nextTheme =
  //       theme === "dark" ? "light" : theme === "light" ? "dark" : "dark"
  //     setTheme(nextTheme)
  //   }

  const hanldeClickTest = () => {
    alert("Add Note Clicked!")
  }

  return (
    <div className="flex h-10 w-full items-center justify-center p-1">
      <Button
        className="h-8 bg-transparent font-extrabold text-amber-50 hover:cursor-pointer hover:bg-gray-600 hover:text-white"
        onClick={hanldeClickTest}
      >
        <RiAddFill className="size-5" />
        Add Note
      </Button>

      {/* {import.meta.env.MODE === "development" && (
        <>
          <Badge className="fixed top-3 left-34 z-50 w-25 bg-gray-800 text-white">
            Development
          </Badge>
          <Button onClick={toggleTheme}>change</Button>
        </>
      )} */}
    </div>
  )
}
