import { departments, type Department } from '@/data/discco';

function DepartmentMotif({ id }: { id: Department['id'] }) {
  if (id === 'creativo') {
    return (
      <div className="grid h-full min-h-[118px] grid-cols-3 grid-rows-2 gap-2">
        <div className="relative col-span-1 row-span-1 bg-[var(--discco-ink)] p-2 text-[var(--discco-bone)]">
          <span className="font-display text-lg uppercase leading-none">DISCCO!</span>
          <span className="absolute bottom-2 right-2 text-[var(--discco-pink)]">✦</span>
        </div>
        <div className="relative bg-[var(--discco-bone)] p-2 text-[var(--discco-ink)]">
          <span className="block font-display text-[1.65rem] uppercase leading-[0.8]">No rules</span>
          <span className="absolute right-2 top-2 h-6 w-1.5 bg-[var(--discco-pink)]" />
        </div>
        <div className="relative bg-[var(--discco-accent)]">
          <span className="absolute inset-x-4 top-1/2 h-px bg-[var(--discco-ink)]" />
          <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--discco-ink)]" />
          <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--discco-ink)]" />
        </div>
        <div className="bg-[var(--discco-taupe)] opacity-70" />
        <div className="relative bg-[var(--discco-charcoal)]">
          <span className="absolute inset-4 rounded-full border border-[var(--discco-accent-dk)]" />
          <span className="absolute left-1/2 top-1/2 h-px w-12 -translate-x-1/2 bg-[var(--discco-accent)]" />
          <span className="absolute left-1/2 top-1/2 h-12 w-px -translate-y-1/2 bg-[var(--discco-accent)]" />
        </div>
        <div className="relative bg-[var(--discco-bone)] p-2">
          <span className="block font-display text-xl uppercase leading-[0.8]">Make meaning</span>
          <span className="absolute bottom-2 right-2 text-lg text-[var(--discco-pink)]">×</span>
        </div>
      </div>
    );
  }

  if (id === 'dev') {
    return (
      <div className="h-full min-h-[124px] border border-[var(--discco-ink)] bg-[var(--discco-charcoal)] text-[var(--discco-bone)]">
        <div className="flex h-7 items-center justify-between border-b border-[rgba(251,247,239,0.22)] px-3">
          <span className="font-display text-[10px] uppercase tracking-[0.12em]">DISCCO.DEV</span>
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--discco-accent)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--discco-taupe)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--discco-bone)]" />
          </span>
        </div>
        <div className="grid grid-cols-[1fr_0.85fr] gap-3 p-4">
          <div>
            <span className="block font-display text-2xl uppercase leading-[0.88]">
              Diseño que funciona.
            </span>
            <span className="mt-3 block h-1.5 w-24 bg-[var(--discco-accent)]" />
            <span className="mt-4 block font-display text-[10px] uppercase tracking-[0.18em]">
              Ver proyectos →
            </span>
          </div>
          <div className="relative min-h-[82px] overflow-hidden border-l border-[rgba(251,247,239,0.25)]">
            <span className="absolute left-1/2 top-1/2 h-16 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[var(--discco-taupe)]" />
            <span className="absolute left-1/2 top-1/2 h-px w-32 -translate-x-1/2 bg-[var(--discco-taupe)]" />
            <span className="absolute left-1/2 top-1/2 h-16 w-px -translate-y-1/2 bg-[var(--discco-taupe)]" />
            <span className="absolute inset-x-4 top-6 h-px bg-[var(--discco-taupe)] opacity-70" />
            <span className="absolute inset-x-4 bottom-6 h-px bg-[var(--discco-taupe)] opacity-70" />
            <span className="absolute right-2 top-1 font-display text-lg text-[var(--discco-accent)]">&lt;/&gt;</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full min-h-[124px] border border-[rgba(251,247,239,0.24)] bg-[rgba(20,17,15,0.36)] text-[var(--discco-bone)]">
      <div className="flex h-8 items-center justify-between border-b border-[rgba(251,247,239,0.2)] px-3">
        <span className="font-display text-xs uppercase tracking-[0.2em]">A DISCCO! RECORDS</span>
        <span className="font-display text-[10px] uppercase tracking-[0.18em] text-[var(--discco-pink)]">Play loud</span>
      </div>
      <div className="p-4">
        <div className="flex h-10 items-center gap-1 border-b border-[rgba(251,247,239,0.14)] pb-3">
          {[10, 18, 8, 24, 14, 30, 12, 22, 9, 26, 16, 20, 11, 28, 13, 18].map((height, index) => (
            <span
              key={index}
              className="w-1 flex-1 bg-[var(--discco-bone)]"
              style={{ height }}
            />
          ))}
        </div>
        <div className="mt-3 grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 font-body text-[10px] uppercase tracking-[0.08em]">
          <span><span className="mr-2 text-[var(--discco-accent)]">1</span>Intro</span>
          <span className="text-[var(--discco-accent)]">01:12</span>
          <span><span className="mr-2 text-[var(--discco-accent)]">2</span>Frecuencia creativa</span>
          <span className="text-[var(--discco-accent)]">03:45</span>
          <span><span className="mr-2 text-[var(--discco-accent)]">3</span>Ruido y propósito</span>
          <span className="text-[var(--discco-accent)]">02:57</span>
        </div>
      </div>
    </div>
  );
}

function DepartmentPanel({ department, index }: { department: Department; index: number }) {
  const isDev = department.id === 'dev';
  const isRecords = department.id === 'records';

  return (
    <a
      href={department.href}
      className={`
        group relative grid min-h-[168px] overflow-hidden rounded-[5px] border p-5 transition duration-200
        hover:-translate-y-0.5 hover:border-[var(--discco-ink)]
        md:min-h-[164px] md:grid-cols-[minmax(210px,0.82fr)_minmax(320px,1.38fr)] md:gap-7 md:p-5
        ${isDev ? 'border-[rgba(20,17,15,0.24)] bg-[var(--discco-accent-dk)] text-[var(--discco-ink)]' : ''}
        ${isRecords ? 'border-[rgba(251,247,239,0.18)] bg-[var(--discco-charcoal)] text-[var(--discco-bone)]' : ''}
        ${!isDev && !isRecords ? 'border-[var(--discco-line)] bg-[var(--discco-bone)] text-[var(--discco-ink)]' : ''}
      `}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(0deg, currentColor 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />

      <div className="relative z-10 flex min-h-[124px] flex-col justify-between">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className={`font-display text-2xl leading-none ${isRecords ? 'text-[var(--discco-pink)]' : 'text-[var(--discco-accent-dk)]'}`}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className={`h-px w-9 ${isRecords ? 'bg-[var(--discco-pink)]' : 'bg-[var(--discco-accent-dk)]'}`} />
          </div>
          <h2
            className="font-display uppercase leading-[0.88] tracking-[-0.015em]"
            style={{ fontSize: 'clamp(2rem, 3vw, 2.9rem)' }}
          >
            {department.name}
          </h2>
          <span className={`mt-4 block h-[3px] w-14 ${isRecords ? 'bg-[var(--discco-pink)]' : 'bg-[var(--discco-bone)]'} ${!isDev && !isRecords ? 'bg-[var(--discco-pink)]' : ''}`} />
        </div>
        <p className={`mt-4 max-w-[26ch] font-body text-sm leading-snug md:text-[15px] ${isRecords ? 'text-[var(--discco-bone)]' : 'text-[var(--discco-ink)]'}`}>
          {department.tagline}
        </p>
      </div>

      <div className="relative z-10 mt-5 md:mt-0">
        <DepartmentMotif id={department.id} />
      </div>
    </a>
  );
}

export default function Hero() {
  return (
    <section className="discco-hero-bg relative overflow-hidden bg-[var(--discco-paper)]">
      <div aria-hidden="true" className="pointer-events-none absolute left-6 top-24 hidden h-[64%] md:block">
        <div className="flex h-full flex-col items-center justify-between">
          <span className="h-8 w-px bg-[var(--discco-line)]" />
          <p className="vertical-rl rotate-180 font-body text-[11px] uppercase tracking-[0.26em] text-[var(--discco-ink)]">
            Identidad • Diseño • Código • Sonido
          </p>
          <span className="h-8 w-px bg-[var(--discco-line)]" />
        </div>
      </div>

      <span aria-hidden="true" className="absolute left-[3.2rem] top-[5.5rem] hidden h-8 w-8 rounded-full border border-[var(--discco-ink)] md:block">
        <span className="absolute left-1/2 top-[-0.55rem] h-[3rem] w-px -translate-x-1/2 bg-[var(--discco-ink)] opacity-60" />
        <span className="absolute left-[-0.55rem] top-1/2 h-px w-[3rem] -translate-y-1/2 bg-[var(--discco-ink)] opacity-60" />
      </span>
      <span aria-hidden="true" className="absolute right-[43%] top-20 hidden h-16 w-px bg-[var(--discco-ink)] md:block" />
      <span aria-hidden="true" className="absolute right-[42.1%] top-[5.9rem] hidden h-px w-16 bg-[var(--discco-ink)] md:block" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 pb-14 pt-12 md:px-10 md:pb-14 md:pt-16 lg:px-14">
        <div className="grid items-center gap-8 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[minmax(0,0.54fr)_minmax(560px,0.46fr)] lg:gap-20">
          <div className="relative min-w-0">
            <div className="mb-8 hidden items-center gap-4 md:flex">
              <span className="font-display text-xs uppercase tracking-[0.18em]">EST. 2016</span>
              <span className="h-px w-24 bg-[var(--discco-line)]" />
              <span className="h-1 w-1 rounded-full bg-[var(--discco-ink)]" />
            </div>

            <h1
              className="discco-hero-title relative max-w-full overflow-hidden font-display uppercase leading-[0.82] text-[var(--discco-ink)]"
              style={{ fontSize: 'clamp(6rem, 12.6vw, 12.8rem)', letterSpacing: '-0.04em' }}
            >
              DISCCO!
            </h1>
            <span aria-hidden="true" className="discco-brush-stroke mt-1 block h-5 w-[82%] bg-[var(--discco-ink)]" />

            <div className="relative mt-5 inline-block">
              <p
                className="font-display lowercase leading-none text-[var(--discco-ink)]"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}
              >
                conexión creativa
              </p>
              <span aria-hidden="true" className="absolute -bottom-3 left-1 h-[5px] w-[42%] -rotate-1 rounded-full bg-[var(--discco-accent-dk)]" />
              <span aria-hidden="true" className="absolute -right-14 top-4 hidden text-5xl leading-none text-[var(--discco-accent-dk)] md:block">✦</span>
            </div>

            <div className="mt-8 max-w-[580px]">
              <p
                className="font-body font-semibold leading-tight text-[var(--discco-ink)]"
                style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)' }}
              >
                Diseño, websites y música bajo una misma frecuencia creativa.
              </p>
              <p className="mt-4 max-w-[520px] font-body text-base leading-relaxed text-[var(--discco-taupe)] md:text-lg">
                Creamos marcas, experiencias digitales y producción con identidad.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#creativo"
                className="inline-flex min-h-14 items-center justify-center gap-4 border border-[var(--discco-ink)] bg-[var(--discco-ink)] px-7 font-display text-sm uppercase tracking-[0.14em] text-[var(--discco-bone)] transition hover:bg-[var(--discco-charcoal)]"
              >
                Ver proyectos <span className="text-xl leading-none text-[var(--discco-accent)]">↗</span>
              </a>
              <a
                href="#dev"
                className="inline-flex min-h-14 items-center justify-center gap-4 border border-[var(--discco-ink)] bg-transparent px-7 font-display text-sm uppercase tracking-[0.14em] text-[var(--discco-ink)] transition hover:bg-[var(--discco-bone)]"
              >
                Explorar ramas <span className="text-xl leading-none text-[var(--discco-accent-dk)]">↗</span>
              </a>
            </div>

            <div className="mt-8 hidden items-end justify-between md:flex">
              <div className="font-display text-[15px] uppercase leading-[0.95] tracking-[0.05em] text-[var(--discco-pink)]">
                Keep<br />it<br />real
                <span className="mt-1 block h-[3px] w-10 -rotate-3 bg-[var(--discco-pink)]" />
              </div>
              <div className="text-right font-body text-[10px] uppercase tracking-[0.14em] text-[var(--discco-ink)]">
                DISCCO!™<br />
                <span className="text-[8px] text-[var(--discco-taupe)]">Conexión creativa</span>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex min-w-0 flex-col gap-5 md:gap-7 lg:pl-2">
            {departments.map((department, index) => (
              <DepartmentPanel key={department.id} department={department} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
