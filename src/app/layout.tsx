import './globals.css'
import commonStyles from '../../styles/common.module.css'
import Nav from "./nav"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav></Nav>
        <div className={commonStyles.bodyWrapper}>
          {children}
        </div>
      </body>
    </html>
  )
}
