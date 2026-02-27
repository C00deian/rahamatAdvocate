function PageHero({ title }) {
  return (
    <section className="bg-[#ececec] border-y border-[#e1e1e1]">
      <div className="container-shell h-[190px] md:h-[210px] flex items-center pl-4 md:pl-10">
        <div className="inline-flex items-center gap-3 md:gap-5">
          <span className="h-12 w-0.5 bg-[var(--primary)]" aria-hidden="true" />
          <h1 className="font-title uppercase text-[#0f1720] text-[1.05rem] md:text-[2.1rem] font-semibold tracking-[0.01em] leading-none">
            {title}
          </h1>
        </div>
      </div>
    </section>
  )
}

export default PageHero
