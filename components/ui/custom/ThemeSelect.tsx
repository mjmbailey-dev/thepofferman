import useTheme, { Theme } from "@/hooks/useTheme";
import { Select, SelectContent, SelectTrigger, SelectItem, SelectGroup } from "../select";
import { Sun, Moon, SunMoon } from "lucide-react";

import { cn } from "@/lib/utils"

export default function ThemeSelect(){
    const {theme, setTheme} = useTheme();

    const isSystem = theme === 'system';
    const isDark = theme === 'dark';
    const isLight = theme === 'light';

    return(
        <div className="hidden md:block">
            <Select value={theme} onValueChange={(value) => setTheme(value as Theme)}>
                <SelectTrigger className="sm:w-10 md:w-30">
                    {isSystem && <div className="flex"><SunMoon className="size-5 mr-3" /><span className="lg:contents">System</span></div>}
                    {isDark   && <div className="flex"><Moon className="size-5 mr-3" /><span className="lg:contents">Dark</span></div>}
                    {isLight  && <div className="flex"><Sun className="size-5 mr-3" /><span className="lg:contents">Light</span></div>}
                </SelectTrigger>
                <SelectContent >
                    <SelectGroup>
                        <SelectItem value="system" hidden={isSystem}>
                            <div className="flex"><SunMoon className="size-5 mr-3" /><span>System</span></div>
                        </SelectItem>
                        <SelectItem value="dark" hidden={isDark}>
                            <div className="flex"><Moon className="size-5 mr-3" /><span>Dark</span></div>
                        </SelectItem>
                        <SelectItem value="light" hidden={isLight}>
                            <div className="flex"><Sun className="size-5 mr-3" /><span>Light</span></div>
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}