import type { ReactNode } from 'react';
import { Trophy, MapPin, Star, Home, Search, Tag, ShoppingCart, User } from 'lucide-react';

const markets = [
  { name: 'Super Bom Preço', total: 'R$ 38,90', dist: '0,8 km', rating: '4.8', best: true, savings: 'R$ 12,40' },
  { name: 'Mercado da Esquina', total: 'R$ 42,50', dist: '1,2 km', rating: '4.6', best: false, savings: '' },
  { name: 'Compre Mais', total: 'R$ 45,10', dist: '2,1 km', rating: '4.5', best: false, savings: '' },
];

export function CompareScreen() {
  return (
    <div className="flex h-full flex-col bg-[#f3eaf5]">
      <div className="px-4 pt-8 pb-2">
        <p className="text-sm font-semibold text-[#4b276b]">Comparativo de Lista</p>
        <p className="text-[9px] text-[#80737f]">8 itens · 3 mercados</p>
      </div>

      <div className="mx-4 mb-3 rounded-xl bg-gradient-to-br from-[#4b276b] to-[#73479c] p-3 text-white shadow-md">
        <div className="flex items-center gap-2">
          <Trophy className="h-4 w-4 text-[#efa8f8]" />
          <div>
            <p className="text-[9px] opacity-90">Melhor opção</p>
            <p className="text-xs font-bold">Super Bom Preço · R$ 38,90</p>
          </div>
        </div>
        <p className="mt-1.5 text-[9px] text-[#efa8f8]">Economize R$ 12,40 nesta lista</p>
      </div>

      <div className="space-y-2 px-4">
        {markets.map((m) => (
          <div
            key={m.name}
            className={`rounded-xl p-2.5 shadow-sm ${
              m.best ? 'bg-[#efa8f8]/30 ring-1 ring-[#efa8f8]' : 'bg-white ring-1 ring-[#efa8f8]/20'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f3eaf5]">
                  <StoreIcon />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-[#4b276b]">{m.name}</p>
                  <div className="flex items-center gap-2 text-[8px] text-[#80737f]">
                    <span className="flex items-center gap-0.5"><MapPin className="h-2 w-2" />{m.dist}</span>
                    <span className="flex items-center gap-0.5"><Star className="h-2 w-2 fill-[#efa8f8] text-[#efa8f8]" />{m.rating}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-bold text-[#72367d]">{m.total}</p>
                {m.best && <p className="text-[7px] font-semibold text-[#4b276b]">Menor total</p>}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-around border-t border-[#efa8f8]/30 bg-white px-4 py-2">
        <TabIcon icon={<Home className="h-4 w-4" />} />
        <TabIcon icon={<Search className="h-4 w-4" />} />
        <TabIcon icon={<Tag className="h-4 w-4" />} />
        <TabIcon icon={<ShoppingCart className="h-4 w-4" />} active />
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
