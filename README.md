- [x] "npx create-next-app@latest {project-name}"
- [x] copy .prettierrc
- [x] change layout, delete assets, change metadata
- [x] clear page.tsx // balance page
- [x] create .env file and add .env to .gitignore

- [x] "npx shadcn-ui@latest init", change tailwind.config.js to tailwind.config.ts
- [x] html, body, :root { height: 100% } thing at app/globals.css
- [x] "npx shadcn-ui@latest add button" to add button

- [x] "npm install next-themes"
- [x] add theme-provider.tsx
- [x] create theme-toggle.tsx switch
- [x] wrap {children} with ThemeProvider
- [x] add suppressHydrationWarning to html tag

- [x] "npm i @clerk/clerk-react", middleware ve (auth) kullanmadık
- [x] create clerk project https://dashboard.clerk.com/
- [x] add .env shits https://clerk.com/docs/quickstarts/nextjs#update-your-environment-variables
- [x] create jwt template and select convex, copy issuer and save

- [x] "npm i convex"
- [x] "npx convex dev" to run convex
- [x] create auth.config.js and add issuer name and url
- [x] add providers/convex-provider.tsx, combine clerk and convex providers and wrap {children} with ConvexProvider

- [x] create edgestore project
- [x] "npm i @edgestore/server @edgestore/react zod"
- [x] create app/api/edgestore/[...edgestore]/route.ts
- [x] create lib/edgestore.ts
- [x] wrap {children} with EdgeStoreProvider
- [x] "npm i tailwind-merge react-dropzone lucide-react"
- [x] add images: {domains: ["files.edgestore.dev"]} to next.config.js
- [x] add beforeDelete lifecycle hook to edgestore route to delete files

- [x] "npm i @blocknote/core @blocknote/react"
- [x] create editor.tsx with BlockNoteView

- [x] git init, git add ., git addcommit "init"
- [x] gh repo create, git push
- [x] copy env files to vercel, add CONVEX_DEPLOY_KEY with deployment key from convex settigs
- [x] override build command to "npm run build && npx convex deploy"
- [x] deploy to vercel

---

- nextjs, typescript, tailwind, ui.shadcn in detail
- convex: whole backend with convex, CRUD functions with convex, give feedback with promises and toasts
- realtime backend
- clerk: easy authentication with clerk
- edgestore: upload images with edgestore
- block-note: notion-like rich text editor with BlockNote
- resizable sidebar
- dark and light mode favicons based on browser theme
- use-scroll-top: changing navbar when scrolled
- animated toast with sonner
- recursive react component for parent and child relation
- restore deleted elements with archieve system
- linting with trunk
- create skeleton loading with creating Item.Skeleton
- create modals with zustand and shadcn
- create ctrl+k search menu
- implement emojis with emoji-picker-react
- autosized text with react-textarea-autosize
- create error state with error.tsx
- get current url with use-origin
- copy to clipboard with navigator.clipboard.writeText(url)

---

- shadcn init sırasında tailwind.config.ts olarak ayarlıyoruz artık
- trunk check eklentisi ile linting yapabilirsin
- app klasörü içindeki "underscore-components" root olarak sayılmaz
- favicon'u app yerine public'e de koyabiliriz yalnız metadata'da belirtmemiz lazım
- light mode ve dark mode için farklı faviconlar atayabiliyoruz
- offline mode favicon'unu yine bulamadım, ama siteyi offline yapmak için Geliştirici Araçları > Network > Kısıtlayıcılar > Offline'i açabiliriz
- tailwind'de h-full tam olarak framer'daki fill yerine geçmiyor, onun için flex-1 diyebilirsin
- landing page'deh h-full demek yerine min-h-full dedi
- text istediğin yerde aşağı insin diye br elementi
- geniş ekrandaki her şey küçük ekranda da olucak diye bi şey yok, exmp: landing page 1 ve 2 image
- use-scrollt-top: navbar kaydırılırken alt tarafına bir border koymak için kullandı
- clerk SignInButton'da mode="modal" yaparsan sign in yeri direkt modal oluyor, (auth)'a ve NEXT_PUBLIC_CLERK_SIGN_IN_URL'e gerek de kalmıyor aslındaz
- main, aside, nav, div, p etiketleri
- div role="button"
- resizable sidebar: "npm i usehooks-ts" > use-media-query
- !!params.documentId <=> params.documentId != null <=> !params.documentId == null
- asChild?
- selim's yerine selim& apos;s yazıyoruz
- router.push() ve redirect() arasındaki fark
- clerk'i convex ile brilikte kullanıyosan, clerk/clerk-react'tan import et, middleware kullanamazsın
- keyboard shortcutlar için kbd tagi
- {${level x 12 + 25}px} gibi şeylerde tailwind className yerine style:{{}}
- event.stopPropagation(); ile iç içe olan divlerde event bubbling'i önleyebilirsin
- onExpand() yerine onExpand?.(); yazmak onExpand optionalsa gerekli
- bir veriyi updatelemek için ya put ya patch yapıcaksın, patch belirli yeri günceller, put tamamını yeniden yazar
- documents === undefined'ı documentler yüklenirken olarak yaptık
- popover ve modal'ların renkleri discord gibi farklı tonda yapılıyor
- kısayolu olan modalları tek tek, olmayanları tek bir modal-provider'da ayarladı
- default exportlardad direkt import EmojiPickerRow from "emoji-picker-react" yapabiliyoruz, as dememize gerek
- büyük importları useMemo(() => dynamic(() => import("@/components/editor"), { ssr: false }), []); ile yapıyoruz

---

- h-full, min-h-full, flex-1
- text-base, font-mono
- object-contain
- hidden + md:block, opacity-0 + hover:opacity-100
- hover:, group + group-hover:, group/{name} + group-hover/sidebar:
- cursor-ew-resize
- transition-all, ease-in-out, duration-300
- h-calc(100%-240px)
- left-0, top-0, space-y-1, gap-2
- bg-transparent
- line-clamp-1, truncate
- rotate-90
- leading-none
- shrink-0
- pointer-events-none, select-none
- ml-auto
- inline-flex
- bg-primary/5
- dark:hover:bg-neural-500
- break-words
- outline-none
- resize-none
