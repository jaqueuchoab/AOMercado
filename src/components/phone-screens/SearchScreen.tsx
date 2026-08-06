import type { ReactNode } from 'react';
import { Search, MapPin, Star, ArrowLeft, SlidersHorizontal, Home, Tag, ShoppingCart, User } from 'lucide-react';

const results = [
  { market: 'Super Bom Preço', price: 'R$ 4,89', dist: '0,8 km', rating: '4.8', best: true },
  { market: 'Mercado da Esquina', price: 'R$ 5,29', dist: '1,2 km', rating: '4.6', best: false },
  { market: 'Compre Mais', price: 'R$ 5,49', dist: '2,1 km', rating: '4.5', best: false },
  { market: 'Mini Mercado Luz', price: 'R$ 5,99', dist: '3,0 km', rating: '4.2', best: false },
];

export function SearchScreen() {
  return (
    <div className="flex h-full flex-col bg-[#f3eaf5]">
      <div className="flex items-center gap-2 px-4 pt-8 pb-3">
        <ArrowLeft className="h-4 w-4 text-[#4b276b]" />
        <div className="flex flex-1 items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-[#efa8f8]/40">
          <Search className="h-3.5 w-3.5 text-[#73479c]" />
          <span className="text-[10px] font-medium text-[#4b276b]">Arroz</span>
        </div>
        <SlidersHorizontal className="h-4 w-4 text-[#73479c]" />
      </div>

      <div className="flex gap-2 overflow-hidden px-4 pb-3">
        {['Menor preço', 'Mais próximo', 'Melhor avaliação'].map((tag, i) => (
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

      <div className="px-4 pb-2">
        <p className="text-[10px] font-semibold text-[#4b276b]">Arroz Branco 1kg</p>
        <p className="text-[8px] text-[#80737f]">4 mercados encontrados</p>
      </div>

      <div className="space-y-2 px-4">
        {results.map((r) => (
          <div
            key={r.market}
            className={`flex items-center justify-between rounded-xl p-2.5 shadow-sm ${
              r.best ? 'bg-[#efa8f8]/30 ring-1 ring-[#efa8f8]' : 'bg-white ring-1 ring-[#efa8f8]/20'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f3eaf5]">
                <StoreIcon />
              </div>
              <div>
                <p className="text-[10px] font-medium text-[#4b276b]">{r.market}</p>
                <div className="flex items-center gap-2 text-[8px] text-[#80737f]">
                  <span className="flex items-center gap-0.5"><MapPin className="h-2 w-2" />{r.dist}</span>
                  <span className="flex items-center gap-0.5"><Star className="h-2 w-2 fill-[#efa8f8] text-[#efa8f8]" />{r.rating}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-bold text-[#72367d]">{r.price}</p>
              {r.best && <p className="text-[7px] font-semibold text-[#4b276b]">Melhor preço</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-around border-t border-[#efa8f8]/30 bg-white px-4 py-2">
        <TabIcon icon={<Home className="h-4 w-4" />} />
        <TabIcon icon={<Search className="h-4 w-4" />} active />
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
