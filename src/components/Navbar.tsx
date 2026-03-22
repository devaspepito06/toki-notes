import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Button } from "./ui/button"
import { RiEqualizer3Line, RiSunLine, RiMoonLine } from "@remixicon/react"
import { Badge } from "./ui/badge"

type NavbarProps = {
  theme: string
  toggleTheme: () => void
}

export const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  return (
    <div className="flex h-14 w-full items-center justify-between p-1">
      <div className="group flex h-12 w-32 flex-row items-center gap-2 rounded-full">
        <Avatar className="size-9">
          <AvatarImage
            src="/img/logo.png"
            alt="@tokinotes"
            className="grayscale"
          />
          <AvatarFallback>Toki Notes Icon</AvatarFallback>
        </Avatar>
        <p className="cursor-default font-bold whitespace-nowrap">Toki Notes</p>
      </div>

      <div className="flex items-center gap-3">
        <Button
          onClick={toggleTheme}
          className={`size-4 rounded-full bg-transparent transition-colors duration-300 hover:cursor-pointer hover:bg-transparent ${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-slate-950"} `}
        >
          {theme === "dark" ? (
            <RiSunLine className="size-4 bg-transparent" />
          ) : (
            <RiMoonLine className="size-4 bg-transparent" />
          )}
        </Button>
        {import.meta.env.MODE === "development" && (
          <Button
            className={`size-4 rounded-full bg-transparent transition-colors duration-300 hover:cursor-pointer hover:bg-transparent ${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-slate-950"}`}
          >
            <RiEqualizer3Line className="size-4" />
          </Button>
        )}
        {/* <Button
          className="size-8 rounded-full bg-transparent hover:cursor-pointer"
          onClick={goPomito}
        >
          <Avatar className="size-7">
            <AvatarImage
              src="/img/logo.png"
              alt="@user"
              className="grayscale"
            />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
        </Button> */}
      </div>

      {import.meta.env.MODE === "development" && (
        <div className="fixed top-3 left-3 z-50 flex flex-col items-center gap-2 p-2">
          <Badge className="w-25 bg-gray-800 text-white">Development</Badge>
        </div>
      )}
    </div>
  )
}
