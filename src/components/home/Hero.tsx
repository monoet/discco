import { departments, type Department } from '@/data/discco';

const recordWaveBars = [
  18, 28, 16, 34, 24, 42, 20, 30, 48, 22, 36, 26,
  44, 18, 32, 46, 20, 40, 24, 35, 50, 28, 38, 21,
  31, 45, 19, 34, 26, 42, 24, 36, 18, 30, 41, 22,
];

function DepartmentMotif({ id }: { id: Department['id'] }) {
  if (id === 'creativo') {
    return (
      <div className="relative h-full min-h-[128px] overflow-hidden 2xl:min-h-[154px]">
        <div className="absolute left-0 top-0 h-[70px] w-[58%] bg-[var(--discco-ink)] p-4 text-[var(--discco-bone)] 2xl:h-[84px]">
          <span className="font-display text-xl uppercase leading-none">DISCCO!</span>
          <span className="absolute bottom-4 right-4 text-[var(--discco-pink)]">✦</span>
        </div>
        <div className="absolute right-0 top-0 h-[70px] w-[36%] bg-[var(--discco-bone)] p-3 text-[var(--discco-ink)] 2xl:h-[84px]">
          <span className="block max-w-[5.5ch] font-display text-[1.65rem] uppercase leading-[0.82] 2xl:text-3xl">No rules</span>
          <span className="absolute right-2 top-2 h-6 w-1.5 bg-[var(--discco-pink)]" />
        </div>
        <div className="absolute bottom-0 left-0 h-[50px] w-[58%] bg-[var(--discco-taupe)] opacity-[0.72] 2xl:h-[62px]" />
        <div className="absolute bottom-0 right-[25%] h-[50px] w-[28%] bg-[var(--discco-charcoal)] 2xl:h-[62px]">
          <span className="absolute inset-3 rounded-full border border-[var(--discco-accent-dk)]" />
          <span className="absolute left-1/2 top-1/2 h-px w-12 -translate-x-1/2 bg-[var(--discco-accent)]" />
          <span className="absolute left-1/2 top-1/2 h-10 w-px -translate-y-1/2 bg-[var(--discco-accent)]" />
        </div>
        <div className="absolute bottom-0 right-0 h-[50px] w-[20%] bg-[var(--discco-accent)] 2xl:h-[62px]">
          <span className="absolute inset-x-3 top-1/2 h-px bg-[var(--discco-ink)]" />
          <span className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--discco-ink)]" />
          <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--discco-ink)]" />
        </div>
        <span className="absolute right-1 top-[78px] font-display text-lg uppercase leading-[0.82] text-[var(--discco-ink)] 2xl:top-[94px] 2xl:text-xl">
          Make<br />meaning
        </span>
        <span className="absolute bottom-2 right-2 text-lg text-[var(--discco-pink)]">×</span>
      </div>
    );
  }

  if (id === 'dev') {
    return (
      <div className="h-full min-h-[128px] overflow-hidden border border-[var(--discco-ink)] bg-[var(--discco-charcoal)] text-[var(--discco-bone)] 2xl:min-h-[154px]">
        <div className="flex h-7 items-center justify-between border-b border-[rgba(251,247,239,0.22)] px-3">
          <span className="font-display text-[10px] uppercase tracking-[0.12em]">DISCCO.DEV</span>
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--discco-accent)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--discco-taupe)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--discco-bone)]" />
          </span>
        </div>
        <div className="grid h-[calc(100%-1.75rem)] grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] gap-4 p-4">
          <div className="min-w-0">
            <span className="block max-w-[9ch] font-display text-[1.65rem] uppercase leading-[0.88]">
              Diseño que funciona.
            </span>
            <span className="mt-3 block h-1.5 w-20 bg-[var(--discco-accent)]" />
            <span className="mt-4 block font-display text-[10px] uppercase tracking-[0.16em]">
              Ver proyectos →
            </span>
          </div>
          <div className="relative min-w-0 overflow-hidden border-l border-[rgba(251,247,239,0.25)] pl-4">
            <span className="absolute left-[calc(50%+0.5rem)] top-1/2 h-16 w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[var(--discco-taupe)]" />
            <span className="absolute left-[calc(50%+0.5rem)] top-1/2 h-px w-[86%] -translate-x-1/2 bg-[var(--discco-taupe)]" />
            <span className="absolute left-[calc(50%+0.5rem)] top-1/2 h-16 w-px -translate-y-1/2 bg-[var(--discco-taupe)]" />
            <span className="absolute inset-x-5 top-6 h-px bg-[var(--discco-taupe)] opacity-70" />
            <span className="absolute inset-x-5 bottom-6 h-px bg-[var(--discco-taupe)] opacity-70" />
            <span className="absolute right-1 top-1 font-display text-lg text-[var(--discco-accent)]">&lt;/&gt;</span>
          </div>
        </div>
      </div>
    );
  }

  return (
      <div className="h-full min-h-[128px] overflow-hidden border border-[rgba(251,247,239,0.24)] bg-[rgba(20,17,15,0.36)] text-[var(--discco-bone)] 2xl:min-h-[154px]">
      <div className="flex h-8 items-center justify-between border-b border-[rgba(251,247,239,0.2)] px-3">
        <span className="font-display text-xs uppercase tracking-[0.2em]">A DISCCO! RECORDS</span>
        <span className="font-display text-[10px] uppercase tracking-[0.18em] text-[var(--discco-pink)]">Play</span>
      </div>
      <div className="p-4 pt-3">
        <div className="flex h-8 items-center gap-[2px] border-b border-[rgba(251,247,239,0.14)] pb-2" aria-hidden="true">
          {recordWaveBars.map((height, index) => (
            <span
              key={index}
              className="discco-wave-bar w-[2px] flex-1 bg-[var(--discco-bone)]"
              style={{ height, animationDelay: `${index * 34}ms` }}
            />
          ))}
        </div>
        <div className="mt-3 grid min-w-0 grid-cols-[minmax(0,1fr)_auto] gap-x-3 gap-y-1 font-body text-[10px] uppercase tracking-[0.08em]">
          <span className="truncate"><span className="mr-2 text-[var(--discco-accent)]">1</span>Intro</span>
          <span className="text-[var(--discco-accent)]">01:12</span>
          <span className="truncate"><span className="mr-2 text-[var(--discco-accent)]">2</span>Frecuencia creativa</span>
          <span className="text-[var(--discco-accent)]">03:45</span>
          <span className="truncate"><span className="mr-2 text-[var(--discco-accent)]">3</span>Ruido y propósito</span>
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
        group relative grid min-h-[188px] overflow-hidden rounded-[5px] border p-5 transition duration-200
        hover:-translate-y-0.5 hover:border-[var(--discco-ink)]
        md:h-[188px] md:grid-cols-[minmax(220px,0.78fr)_minmax(300px,1.42fr)] md:items-stretch md:gap-6 md:p-6
        2xl:h-[216px] 2xl:grid-cols-[minmax(250px,0.8fr)_minmax(360px,1.4fr)] 2xl:gap-7
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

      <div className="relative z-10 flex min-h-[142px] flex-col justify-between md:min-h-0">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className={`font-display text-2xl leading-none ${isRecords ? 'text-[var(--discco-pink)]' : isDev ? 'text-[var(--discco-ink)]' : 'text-[var(--discco-accent-dk)]'}`}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className={`h-px w-9 ${isRecords ? 'bg-[var(--discco-pink)]' : isDev ? 'bg-[var(--discco-ink)]' : 'bg-[var(--discco-accent-dk)]'}`} />
          </div>
          <h2
            className="font-display uppercase leading-[0.88] tracking-[-0.015em]"
            style={{ fontSize: 'clamp(2rem, 3vw, 2.9rem)' }}
          >
            {department.name}
          </h2>
          <span className={`mt-4 block h-[3px] w-16 ${isRecords ? 'bg-[var(--discco-pink)]' : isDev ? 'bg-[var(--discco-bone)]' : 'bg-[var(--discco-pink)]'}`} />
        </div>
        <p className={`mt-4 max-w-[26ch] font-body text-sm leading-snug md:text-[15px] ${isRecords ? 'text-[var(--discco-bone)]' : 'text-[var(--discco-ink)]'}`}>
          {department.tagline}
        </p>
      </div>

      <div className="relative z-10 mt-5 min-w-0 overflow-hidden border border-[rgba(20,17,15,0.08)] bg-[rgba(251,247,239,0.1)] p-3 md:mt-0">
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

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 pb-14 pt-12 md:px-10 md:pb-14 md:pt-16 xl:px-14">
        <div className="grid items-center gap-8 xl:min-h-[calc(100svh-4rem)] xl:grid-cols-[minmax(0,0.52fr)_minmax(560px,0.48fr)] xl:gap-16 2xl:grid-cols-[minmax(0,0.54fr)_minmax(640px,0.46fr)] 2xl:gap-20">
          <div className="relative min-w-0">
            <div className="mb-8 hidden items-center gap-4 md:flex">
              <span className="font-display text-xs uppercase tracking-[0.18em]">EST. 2016</span>
              <span className="h-px w-24 bg-[var(--discco-line)]" />
              <span className="h-1 w-1 rounded-full bg-[var(--discco-ink)]" />
            </div>

            <h1
              className="discco-hero-title relative max-w-full overflow-hidden font-display uppercase leading-[0.82] text-[var(--discco-ink)]"
              style={{ fontSize: 'clamp(6rem, 11.2vw, 12.8rem)', letterSpacing: '-0.04em' }}
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
                Signal<br />over<br />noise
                <span className="mt-1 block h-[3px] w-10 -rotate-3 bg-[var(--discco-pink)]" />
              </div>
              <div className="text-right font-body text-[10px] uppercase tracking-[0.14em] text-[var(--discco-ink)]">
                DISCCO!™<br />
                <span className="text-[8px] text-[var(--discco-taupe)]">Conexión creativa</span>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex min-w-0 flex-col gap-5 md:gap-6 xl:pl-2 2xl:gap-7">
            {departments.map((department, index) => (
              <DepartmentPanel key={department.id} department={department} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
