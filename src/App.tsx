import { ChevronDown, ShoppingBag, MapPin, TrendingDown } from 'lucide-react';
import { PhoneMockup } from '@/components/PhoneMockup';
import { HomeScreen } from '@/components/phone-screens/HomeScreen';
import { SearchScreen } from '@/components/phone-screens/SearchScreen';
import { ListScreen } from '@/components/phone-screens/ListScreen';
import { CompareScreen } from '@/components/phone-screens/CompareScreen';
import  AOMercado from '../public/AOM-Logo.png'

const navItems = [
  { label: 'Início', href: '#inicio', active: true },
  { label: 'Como Funciona', href: '#como-funciona', active: false },
  { label: 'Mercados', href: '#mercados', active: false },
];

const secondaryFeatures = [
  {
    number: '2',
    title: 'Pesquisa de Produto',
    description: 'Ao buscar um item, você vê na hora os preços praticados por cada mercado cadastrado, podendo filtrar por proximidade, preço ou avaliação.',
    screen: <SearchScreen />,
  },
  {
    number: '3',
    title: 'Montagem de Lista',
    description: 'Monte sua lista de compras de forma simples, por categoria de produto, sem se preocupar com marcas específicas.',
    screen: <ListScreen />,
  },
  {
    number: '4',
    title: 'Comparativo de Lista',
    description: 'Com um toque, o AOMercado mostra em qual mercado sua lista completa sai mais barata, considerando preço e proximidade.',
    screen: <CompareScreen />,
  },
];

function FeatureNumber({ number, large = false }: { number: string; large?: boolean }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#efa8f8] to-[#73479c] font-medium text-white shadow-md [font-family:Inter,sans-serif] ${
        large ? 'h-10 w-10 text-base' : 'h-8 w-8 text-sm'
      }`}
    >
      {number}
    </span>
  );
}

function App() {
  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f3eaf5]">
      {/* Header */}
      <header className="sticky top-0 z-50 flex w-full flex-col items-start bg-white/80 shadow-sm backdrop-blur-md">
        <div className="flex h-16 w-full items-center justify-between px-4 sm:px-8">
          <a href="#inicio" className="flex items-center" aria-label="AOMercado, voltar ao início">
            <img src={AOMercado} style={{height: "50px"}} />
          </a>
          <nav className="flex items-center gap-2 sm:gap-6">
            {navItems.map((item) =>
              item.active ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-full bg-[#efa8f8] px-4 py-1 text-sm text-[#72367d] [font-family:Inter,sans-serif]"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="whitespace-nowrap text-sm text-[#4e434e] transition-colors hover:text-[#72367d] [font-family:Inter,sans-serif]"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="relative flex w-full flex-col items-center overflow-hidden px-8 pb-6 pt-24"
        style={{ background: 'linear-gradient(173deg, #f3eaf5 0%, #ffffff 50%, rgba(239,168,248,0.3) 100%)' }}
      >
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[#efa8f8]/30 blur-[50px]" />
        <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-[#73479c]/20 blur-2xl" />
        <div className="absolute -left-32 top-1/2 h-[300px] w-[300px] rounded-full bg-[#83468e]/10 blur-[50px]" />

        <div className="relative flex w-full max-w-4xl flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={AOMercado} style={{height: "200px"}} />
          </div>

          <div className="flex flex-col items-center gap-3">
            <h1
              className="max-w-2xl text-center text-3xl leading-tight text-[#4b276b] sm:text-4xl"
              style={{ fontFamily: 'Aoboshi One, serif' }}
            >
              Economize tempo e dinheiro <br className="hidden sm:block" />
              em cada compra de mercado
            </h1>
            <p
              className="max-w-2xl text-center text-base leading-7 text-[#4e434e] sm:text-lg"
              style={{ fontFamily: 'Inclusive Sans, sans-serif' }}
            >
              O AOMercado compara preços entre mercados pra você economizar, e leva tecnologia para os
              pequenos e médios mercados da sua região.
            </p>
          </div>

          <button
            onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-8 flex flex-col items-center gap-2 bg-transparent opacity-70 transition-opacity hover:opacity-100"
            aria-label="Descubra mais"
          >
            <span className="text-[10px] tracking-[1px] text-[#73479c] [font-family:Inter,sans-serif]">
              DESCUBRA MAIS
            </span>
            <ChevronDown className="h-4 w-4 animate-bounce-soft text-[#73479c]" />
          </button>
        </div>
      </section>

      {/* Features */}
      <section
        id="como-funciona"
        className="relative w-full overflow-hidden px-4 py-12 sm:px-8 sm:py-24"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, rgba(243,234,245,0.5) 50%, rgba(239,168,248,0.1) 100%)' }}
      >
        <div className="relative mx-auto flex w-full max-w-screen-xl flex-col gap-16">
          <header className="flex flex-col items-center gap-4">
            <span className="rounded-full bg-[#efa8f8] px-4 py-1 text-sm text-[#4b276b] shadow-sm [font-family:Plus_Jakarta_Sans,sans-serif]">
              A Plataforma
            </span>
            <h2
              className="max-w-md text-center text-2xl leading-9 text-[#4b276b] sm:text-3xl"
              style={{ fontFamily: 'Aclonica, sans-serif' }}
            >
              Veja como o AOMercado vai facilitar sua rotina de compras.
            </h2>
          </header>

          {/* Feature 1 - Home screen */}
          <div className="relative overflow-hidden rounded-3xl border border-[#73479c]/10 bg-white/60 p-6 shadow-lg backdrop-blur-[6px] sm:p-12">
            <div className="pointer-events-none absolute -left-48 -top-48 h-[400px] w-[400px] rounded-full bg-[#efa8f8]/20 blur-2xl" />
            <div className="relative flex flex-col items-center justify-center gap-12 lg:flex-row">
              <article className="flex w-full max-w-lg flex-col items-start gap-4">
                <div className="flex items-center gap-3">
                  <FeatureNumber number="1" large />
                  <h3 className="text-2xl text-[#4b276b] sm:text-3xl" style={{ fontFamily: 'Aoboshi One, serif' }}>
                    Tela Inicial
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-[#4e434e] sm:text-lg [font-family:Plus_Jakarta_Sans,sans-serif]">
                  O ponto de partida. Aqui você pesquisa produtos, acompanha ofertas dos mercados mais
                  recomendados e acessa rapidamente todas as funções do app.
                </p>
              </article>
              <div className="flex w-full justify-center lg:w-[360px]">
                <PhoneMockup className="h-[600px] w-[300px]">
                  <HomeScreen />
                </PhoneMockup>
              </div>
            </div>
          </div>

          {/* Features 2-4 */}
          <div className="grid grid-cols-1 items-start justify-center gap-12 pt-4 md:grid-cols-3 md:gap-8">
            {secondaryFeatures.map((feature) => (
              <article key={feature.number} className="flex flex-col items-center gap-6">
                <div className="flex w-full justify-center">
                  <PhoneMockup className="h-[560px] w-[280px]">
                    {feature.screen}
                  </PhoneMockup>
                </div>
                <div className="flex flex-col items-center gap-3 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <FeatureNumber number={feature.number} />
                    <h3 className="text-center text-lg text-[#4b276b] sm:text-xl" style={{ fontFamily: 'Aoboshi One, serif' }}>
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-center text-sm leading-relaxed text-[#4e434e] sm:text-base [font-family:Inter,sans-serif]">
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
        <div className="relative z-10 mx-auto flex w-full max-w-screen-lg flex-col items-center gap-8">
          <span className="rounded-full border border-white/20 bg-white/10 px-6 py-1.5 text-base font-medium tracking-wide text-[#f3eaf5] backdrop-blur-md [font-family:Inter,sans-serif]">
            FASE DE VALIDAÇÃO
          </span>
          <h2
            className="max-w-screen-md text-center text-2xl text-white sm:text-3xl"
            style={{ fontFamily: 'Aoboshi One, serif' }}
          >
            Sua opinião decide o próximo passo do AOMercado
          </h2>
          <p className="max-w-3xl text-center text-base leading-relaxed text-white/90 sm:text-lg [font-family:Inter,sans-serif]">
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
            />
            <ValidationCard
              label="Tenho um mercado"
              response="Responder formulário"
              variant="dark"
              href="https://forms.gle/KEsRfyd9VzFnask4A"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex w-full flex-col items-center bg-[#faf1fc] px-8 py-12">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#efa8f8] to-[#73479c] text-white">
            <ShoppingBag className="h-5 w-5" />
          </div>
          <span className="text-xl font-medium text-[#4b276b]" style={{ fontFamily: 'Aoboshi One, serif' }}>
            AOMercado
          </span>
        </div>
        <p className="mt-3 text-center text-sm text-[#4e434e] [font-family:Inter,sans-serif]">
          AOMercado — Projeto em desenvolvimento
        </p>
        <p className="pt-8 text-center text-xs text-[#80737f] [font-family:Inter,sans-serif]">
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
}: {
  label: string;
  response: string;
  variant: 'light' | 'dark';
  href: string;
}) {
  const isLight = variant === 'light';
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex min-h-[176px] flex-col items-center justify-center gap-3 rounded-3xl p-8 transition-all hover:scale-[1.02] ${
        isLight
          ? 'bg-[#efa8f8]/90 text-[#4b276b]'
          : 'border-2 border-[#efa8f8]/50 bg-white/5 text-[#efa8f8] backdrop-blur-sm'
      }`}
    >
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full ${
          isLight ? 'bg-white/40' : 'bg-[#efa8f8]/20'
        }`}
      >
        <ShoppingBag className="h-5 w-5" />
      </div>
      <span className="text-base font-medium [font-family:Plus_Jakarta_Sans,sans-serif]">{label}</span>
      <span className="flex items-center gap-1.5 text-xs opacity-80 [font-family:Aoboshi_One,serif]">
        {response}
        <ChevronDown className="h-3 w-3 -rotate-90" />
      </span>
    </a>
  );
}

export default App;
