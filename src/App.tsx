import { useState } from 'react';
import { ChevronDown, ArrowRight, Menu, X, type LucideIcon, UserIcon, StoreIcon } from 'lucide-react';
import  AOMercado from './images/aom-logo.png';
import  aom_tela_inicial from './images/tela-inicial.png';
import  aom_tela_pesquisa from './images/tela-busca.png';
import  aom_tela_criar_lista from './images/tela-lista.png';
import  aom_tela_comparar from './images/tela-compara.png';
import heroFull from './images/hero-opt.png';
import heroMobile from './images/hero-mobile-opt.png';

const navItems = [
  { label: 'Início', href: '#inicio', active: true },
  { label: 'Conheça mais', href: '#como-funciona', active: false },
  { label: 'Sobre nós', href: '#mercados', active: false },
];

const secondaryFeatures = [
  {
    number: '2',
    title: 'Pesquisa de Produto',
    description: 'Ao buscar um item, você vê na hora os preços praticados por cada mercado cadastrado, podendo filtrar por proximidade, preço ou avaliação.',
    screen: aom_tela_pesquisa,
  },
  {
    number: '3',
    title: 'Montagem de Lista',
    description: 'Monte sua lista de compras de forma simples, por categoria de produto, sem se preocupar com marcas específicas.',
    screen: aom_tela_criar_lista,
  },
  {
    number: '4',
    title: 'Comparativo de Lista',
    description: 'Com um toque, o AOMercado mostra em qual mercado sua lista completa sai mais barata, considerando preço e proximidade.',
    screen: aom_tela_comparar,
  },
];

function FeatureNumber({ number, large = false }: { number: string; large?: boolean }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full bg-linear-to-br from-aom-lilac to-aom-purple font-medium text-white shadow-md font-body ${
        large ? 'h-10 w-10 text-base' : 'h-8 w-8 text-sm'
      }`}
    >
      {number}
    </span>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroSrc = window.innerWidth < 465 ? heroMobile : heroFull;

  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-aom-cream">
      {/* Header */}
      <header className="sticky top-0 flex w-full flex-col items-start">
        <div className="flex py-4 w-full items-center justify-between px-4 sm:px-8">
          <a
            href="#inicio"
            className="flex items-center"
            aria-label="AOMercado, voltar ao início"
            onClick={() => setIsMenuOpen(false)}
          >
            <img src={AOMercado} style={{height: "30px"}} />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-2 sm:flex">
            {navItems.map((item) =>
              item.active ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-full bg-aom-lilac px-4 py-2 text-sm font-medium text-aom-grape shadow-sm transition-all hover:opacity-70 font-body"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="whitespace-nowrap rounded-full px-4 py-2 text-sm text-aom-text transition-colors hover:bg-aom-cream hover:text-aom-grape font-body"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-aom-plum transition-colors hover:bg-aom-cream sm:hidden"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav panel */}
        {isMenuOpen && (
          <nav className="flex w-full flex-col gap-1 border-t border-aom-lilac/20 bg-white px-4 pb-4 pt-3 sm:hidden">
            {navItems.map((item) =>
              item.active ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl bg-aom-lilac px-4 py-3 text-center text-sm font-medium text-aom-grape shadow-sm font-body"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-center text-sm text-aom-text transition-colors hover:bg-aom-cream hover:text-aom-grape font-body"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="relative flex w-full flex-col items-center p-8"
        style={{ background: 'linear-gradient(173deg, #f3eaf5 0%, #ffffff 50%, rgba(239,168,248,0.3) 100%)' }}
      >
        <div className="absolute left-1/2 top-0 h-100 w-200 -translate-x-1/2 rounded-full bg-aom-lilac/30 blur-[50px]" />
        <div className="absolute -bottom-32 -right-32 h-100 w-100 rounded-full bg-aom-purple/20 blur-2xl" />
        <div className="absolute -left-32 top-1/2 h-75 w-75 rounded-full bg-[#83468e]/10 blur-[50px]" />

        <div className="relative flex flex-col w-full max-w-6xl items-center gap-2">
          <div className='flex items-center flex-col md:flex-row gap-3'>
            <div className="order-1 md:order-0 flex flex-col items-center gap-3">
              <h1
                className="text-center text-2xl md:text-3xl leading-tight text-aom-plum sm:text-3xl font-semibold"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Economize tempo e dinheiro <br className="hidden sm:block" />
                em cada compra de mercado
              </h1>
              <p
                className="text-center text-base leading-7 text-aom-text sm:text-lg"
              >
                O AOMercado compara preços entre mercados pra você economizar, e leva tecnologia para os
                pequenos e médios mercados da sua região.
              </p>

              <div className='w-full md:max-w-fit flex flex-col gap-3'>
                <button className='flex gap-2 justify-center items-center cursor-pointer bg-aom-lilac px-4 py-3 rounded-full hover:scale-105 transition-all'>
                  <UserIcon/>
                  <a href="#mercados">
                    Sou consumidor e tenho interesse
                  </a>
                </button>
                
                <button className='flex gap-2 justify-center items-center cursor-pointer bg-aom-grape text-aom-cream px-4 py-3 rounded-full hover:scale-105 transition-all'>
                  <StoreIcon/>
                  <a href="#mercados">
                    Tenho mercado e me interesso
                  </a>
                </button>
              </div>
            </div>

            <div className="flex order-0 md:order-1 items-center justify-center gap-3">
              <img src={heroSrc} className='w-sm md:w-6xl' />
            </div>
          </div>

          <button
            onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
            className="group mt-8 flex flex-col items-center gap-2 bg-transparent opacity-70 transition-opacity hover:opacity-100"
            aria-label="Descubra mais"
          >
            <span className="text-[10px] font-semibold tracking-[2px] text-aom-purple font-body">
              DESCUBRA MAIS
            </span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </button>
        </div>
      </section>

      {/* Features */}
      <section
        id="como-funciona"
        className="relative w-full overflow-hidden px-4 py-12 sm:px-8 sm:py-24"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, rgba(243,234,245,0.5) 50%, rgba(239,168,248,0.1) 100%)' }}
      >
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-16">
          <header className="flex flex-col items-center gap-4">
            <span className="rounded-full bg-aom-lilac px-4 py-1 text-sm text-aom-plum shadow-sm">
              A Plataforma
            </span>
            <h2
              className="max-w-md text-center text-2xl font-bold leading-9 tracking-tight text-aom-plum sm:text-3xl"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Veja como o AOMercado vai facilitar sua rotina de compras.
            </h2>
          </header>

          {/* Feature 1 - Home screen */}
          <div className="flex  items-center justify-center relative overflow-hidden rounded-3xl border border-aom-purple/10 bg-white/60 p-6 shadow-lg backdrop-blur-[6px]">
            <div className="pointer-events-none absolute -left-48 -top-48 h-100 w-100 rounded-full bg-aom-lilac/20 blur-2xl" />
            <div className="relative flex flex-col items-center justify-center gap-4 md:flex-row">
              <article className="order-1 md:order-0 flex w-full max-w-lg flex-col items-start gap-4">
                <div className="flex items-center gap-3">
                  <FeatureNumber number="1" large />
                  <h3
                    className="text-2xl font-bold tracking-tight text-aom-plum sm:text-3xl"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    Tela Inicial
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-aom-text sm:text-lg">
                  O ponto de partida. Aqui você pesquisa produtos, acompanha ofertas dos mercados mais
                  recomendados e acessa rapidamente todas as funções do app.
                </p>
              </article>
              <div className="order-0 md:order-1 flex w-full justify-center">
                <img src={aom_tela_inicial} className="aspect-auto h-full max-h-140 w-auto" />
              </div>
            </div>
          </div>

          {/* Features 2-4 */}
          <div className="grid grid-cols-1 items-start justify-center gap-12 pt-4 md:grid-cols-3 md:gap-8">
            {secondaryFeatures.map((feature) => (
              <article key={feature.number} className="flex flex-col items-center gap-6">
                <div className="flex w-full justify-center">
                  <img src={feature.screen} className="w-90 h-auto" />
                </div>
                <div className="flex flex-col items-center gap-3 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <FeatureNumber number={feature.number} />
                    <h3
                      className="text-center text-lg font-bold tracking-tight text-aom-plum sm:text-xl"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-center text-sm leading-relaxed text-aom-text sm:text-base font-body">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Validation */}
      <section
        id="mercados"
        className="relative flex w-full flex-col overflow-hidden px-6 py-16 sm:px-12 sm:py-20 lg:px-32 lg:py-24"
        style={{ background: 'linear-gradient(161deg, #4b276b 0%, #73479c 50%, #734e94 100%)' }}
      >
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(239,168,248,0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(239,168,248,0.1) 0%, transparent 40%)' }} />
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-8">
          <span className="rounded-full border border-white/20 bg-white/10 px-6 py-1.5 text-base font-medium tracking-wide text-aom-cream backdrop-blur-md font-body">
            FASE DE VALIDAÇÃO
          </span>
          <h2
            className="max-w-3xl text-center text-2xl font-bold tracking-tight text-white sm:text-3xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Sua opinião decide o próximo passo do AOMercado
          </h2>
          <p className="max-w-3xl text-center text-base leading-relaxed text-white/90 sm:text-lg font-body">
            O AOMercado ainda está em construção, e é exatamente por isso que sua opinião importa tanto
            agora. Cada resposta que recebemos ajuda a confirmar, ou repensar, os caminhos do projeto. Leva
            poucos minutos, é anônimo, e transforma sua experiência de compra (ou o seu negócio) em parte real
            da construção dessa solução. Escolha abaixo o formulário que combina com você:
          </p>
          <div className="grid w-full max-w-2xl grid-cols-1 gap-6 pt-4 sm:grid-cols-2">
            <ValidationCard
              label="Sou consumidor(a)"
              response="Responder formulário"
              variant="light"
              href="https://forms.gle/PH7Q32E3JfffcSiL9"
              icon={UserIcon}
            />
            <ValidationCard
              label="Tenho um mercado"
              response="Responder formulário"
              variant="dark"
              href="https://forms.gle/KEsRfyd9VzFnask4A"
              icon={StoreIcon}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex w-full flex-col items-center bg-aom-plum px-8 py-12">
        <div className="flex items-center gap-2">
          <img src={AOMercado} className='brightness-200' style={{height: '30px'}} />
        </div>
        <p className="mt-3 text-center text-sm text-white font-body">
          AOMercado — Projeto em desenvolvimento
        </p>
        <p className="pt-8 text-center text-xs text-aom-muted font-body">
          © 2026 AOMercado. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}

function ValidationCard({
  label,
  response,
  variant,
  href,
  icon: Icon,
}: {
  label: string;
  response: string;
  variant: 'light' | 'dark';
  href: string;
  icon: LucideIcon;
}) {
  const isLight = variant === 'light';
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex min-h-44 flex-col items-center justify-center gap-3 rounded-3xl p-8 transition-all hover:scale-[1.02] ${
        isLight
          ? 'bg-aom-lilac/90 text-aom-plum'
          : 'border-2 border-aom-lilac/50 bg-aom-plum text-aom-lilac backdrop-blur-sm'
      }`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:scale-105 ${
          isLight ? 'bg-white/40' : 'bg-aom-lilac/20'
        }`}
      >
        <Icon className="h-6 w-6" strokeWidth={2} />
      </div>
      <span className="text-base font-semibold font-display">{label}</span>
      <span
        className={`mt-1 flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-colors font-body ${
          isLight ? 'bg-white/30 group-hover:bg-white/50' : 'bg-white/10 group-hover:bg-white/20'
        }`}
      >
        {response}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}

export default App;
