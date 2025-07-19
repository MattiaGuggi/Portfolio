const Footer = () => {
  return (
    <footer className="absolute bottom-0 mt-5 w-full py-6 bg-white/80 backdrop-blur border-t border-indigo-200 text-indigo-700 text-center flex items-center justify-center font-semibold text-base">
      © {new Date().getFullYear()} Mattia Guggi. All rights reserved.
    </footer>
  )
}

export default Footer
