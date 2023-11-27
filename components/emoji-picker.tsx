"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import EmojiPickerRow, { Theme } from "emoji-picker-react";
import { useTheme } from "next-themes";

interface Props {
  onChange: (icon: string) => void;
  children: React.ReactNode;
  asChild?: boolean;
}

function EmojiPicker({ onChange, children, asChild }: Props) {
  const { resolvedTheme } = useTheme();
  const currentTheme = (resolvedTheme || "light") as keyof typeof themeMap;

  const themeMap = {
    dark: Theme.DARK,
    light: Theme.LIGHT
  };

  const theme = themeMap[currentTheme];

  return (
    <Popover>
      <PopoverTrigger asChild={asChild}>{children}</PopoverTrigger>
      <PopoverContent className="p-0 w-full border-none shadow-none">
        <EmojiPickerRow height={450} theme={theme} onEmojiClick={(data) => onChange(data.emoji)} />
      </PopoverContent>
    </Popover>
  );
}

export default EmojiPicker;
