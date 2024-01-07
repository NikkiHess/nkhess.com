import './globals.css'
import Nav from "./components/nav"
import commonStyles from '../../styles/common.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav></Nav>
        <div id={commonStyles.bodyWrapper}>
          {children}
        </div>
      </body>
    </html>
  )
}
