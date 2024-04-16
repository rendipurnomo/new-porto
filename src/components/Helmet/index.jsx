const Helmet = ({ children }) => {
  return (
    <section>
      <div className="relative h-screen w-full overflow-hidden bg-slate-900/20 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900/20 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      {children}
      </div>
    </section>
  )
}

export default Helmet