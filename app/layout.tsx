import "./globals.css";
import Button from "@/components/button";

export default function RootLayout ({ children }){
  return(
    <html>
      <body>
        <header className="bg-emerald-50 text-black w-full p-4">Cabecalho
          <Button>Criar conta</Button>
          <Button>Entrar</Button>
        </header>
        <div className="bg-amber-600"> {children}</div>
        <footer>rodape</footer>
      </body>
    </html>
  )
}