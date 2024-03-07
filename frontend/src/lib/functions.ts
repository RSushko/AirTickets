import { usePathname } from "next/navigation";

export const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

export function headerBackground() {
  const pathname = usePathname();
  let background = "";
  switch (pathname) {
    case "/":
      background = "header";
      return [background, pathname];
    case "/login":
      background = "bg-slate-600 h-[50vh]";
      return [background, pathname];
    case "/help":
      return [background, pathname];
    case "/signup":
      return [background, pathname];
    default:
      return [background, pathname];
  }
}
