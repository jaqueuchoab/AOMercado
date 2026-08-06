import type { ReactNode } from 'react';
import { Search, MapPin, Star, Bell, Home, ShoppingCart, User, Tag } from 'lucide-react';

export function HomeScreen() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#f3eaf5] to-white">
      <div className="flex items-center justify-between px-4 pt-8 pb-3">
        <span className="text-base font-medium text-[#4b276b]" style={{ fontFamily: 'Aoboshi One, serif' }}>
          AOMercado
        </span>
        <div className="relative">
          <Bell className="h-4 w-4 text-[#73479c]" />
          <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-[#efa8f8]" />
        </div>
      </div>

      <div className="px-4 pb-3">
        <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-[#efa8f8]/40">
          <Search className="h-3.5 w-3.5 text-[#73479c]" />
          <span className="text-[10px] text-[#80737f]">Buscar produtos...</span>
        </div>
      </div>

      <div className="flex gap-2 overflow-hidden px-4 pb-3">
        {['Ofertas', 'Mercados', 'Categorias', 'Listas'].map((tag, i) => (
          <span
            key={tag}
            className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[9px] font-medium ${
              i === 0 ? 'bg-[#efa8f8] text-[#4b276b]' : 'bg-white text-[#73479c] ring-1 ring-[#efa8f8]/30'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mx-4 mb-3 rounded-2xl bg-gradient-to-br from-[#efa8f8] to-[#73479c] p-3 text-white shadow-md">
        <p className="text-[9px] font-semibold opacity-90">OFERTA DA SEMANA</p>
        <p className="mt-0.5 text-sm font-bold leading-tight">Até 30% OFF em hortifruti</p>
        <p className="mt-1 text-[9px] opacity-80">Mercados próximos a você</p>
      </div>

      <div className="px-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[11px] font-semibold text-[#4b276b]">Mercados recomendados</span>
          <span className="text-[9px] text-[#73479c]">Ver todos</span>
        </div>
        <div className="space-y-2">
          {[
            { name: 'Super Bom Preço', dist: '0,8 km', rating: '4.8' },
            { name: 'Mercado da Esquina', dist: '1,2 km', rating: '4.6' },
            { name: 'Compre Mais', dist: '2,1 km', rating: '4.5' },
          ].map((m) => (
            <div key={m.name} className="flex items-center justify-between rounded-xl bg-white p-2 shadow-sm ring-1 ring-[#efa8f8]/20">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f3eaf5]">
                  <StoreIcon />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-[#4b276b]">{m.name}</p>
                  <div className="flex items-center gap-1 text-[8px] text-[#80737f]">
                    <MapPin className="h-2 w-2" /> {m.dist}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-0.5 rounded-full bg-[#f3eaf5] px-1.5 py-0.5">
                <Star className="h-2.5 w-2.5 fill-[#efa8f8] text-[#efa8f8]" />
                <span className="text-[8px] font-semibold text-[#72367d]">{m.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto flex items-center justify-around border-t border-[#efa8f8]/30 bg-white px-4 py-2">
        <TabIcon icon={<Home className="h-4 w-4" />} active />
        <TabIcon icon={<Search className="h-4 w-4" />} />
        <TabIcon icon={<Tag className="h-4 w-4" />} />
        <TabIcon icon={<ShoppingCart className="h-4 w-4" />} />
        <TabIcon icon={<User className="h-4 w-4" />} />
      </div>
    </div>
  );
}

function StoreIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#73479c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l1-5h16l1 5" /><path d="M4 9v11h16V9" /><path d="M9 22V12h6v10" />
    </svg>
  );
}

function TabIcon({ icon, active = false }: { icon: ReactNode; active?: boolean }) {
  return (
    <div className={`flex flex-col items-center ${active ? 'text-[#73479c]' : 'text-[#80737f]'}`}>
      {icon}
    </div>
  );
}
