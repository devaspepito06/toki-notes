import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Button } from "./ui/button"
import { RiEqualizer3Line } from "@remixicon/react"
// import { Badge } from "./ui/badge"
// import { useTheme } from "@/components/theme-provider"

export const Navbar = () => {
  //   const { setTheme, theme } = useTheme()

  //   const toggleTheme = () => {
  //     const nextTheme =
  //       theme === "dark" ? "light" : theme === "light" ? "dark" : "dark"
  //     setTheme(nextTheme)
  //   }

  const goPomito = () => {
    window.open("https://tokipomito.vercel.app/", "_blank")
  }
  return (
    <div className="flex h-14 w-full items-center justify-between p-1">
      <Button className="group h-12 w-32 rounded-full bg-transparent hover:cursor-pointer hover:bg-transparent hover:text-white">
        <Avatar className="size-9">
          <AvatarImage
            src="/img/logo.png"
            alt="@tokinotes"
            className="grayscale"
          />
          <AvatarFallback>Toki Pomito Icon</AvatarFallback>
        </Avatar>
        <p className="text-amber-50 transition-all duration-200">Toki Pomito</p>
      </Button>

      <div className="flex gap-2">
        <Button className="size-9 rounded-full bg-transparent transition-colors duration-300 hover:cursor-pointer hover:bg-gray-600 hover:text-white">
          <RiEqualizer3Line className="size-5 text-amber-50" />
        </Button>
        <Button
          className="size-9 rounded-full bg-transparent hover:cursor-pointer"
          onClick={goPomito}
        >
          <Avatar className="size-9">
            <AvatarImage
              src="/img/logo.png"
              alt="@user"
              className="grayscale"
            />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
        </Button>
      </div>

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
