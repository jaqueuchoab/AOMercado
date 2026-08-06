import type { ReactNode } from 'react';
import { Plus, Trash2, Home, Search, Tag, ShoppingCart, User } from 'lucide-react';

const categories = [
  { name: 'Hortifruti', items: ['Banana', 'Tomate', 'Alface'], color: 'bg-[#efa8f8]/30' },
  { name: 'Padaria', items: ['Pão Francês', 'Pão de Forma'], color: 'bg-white' },
  { name: 'Açougue', items: ['Carne Moída', 'Frango'], color: 'bg-white' },
  { name: 'Mercearia', items: ['Arroz 1kg', 'Feijão 1kg', 'Óleo'], color: 'bg-white' },
];

export function ListScreen() {
  return (
    <div className="flex h-full flex-col bg-[#f3eaf5]">
      <div className="px-4 pt-8 pb-2">
        <p className="text-sm font-semibold text-[#4b276b]">Minha Lista de Compras</p>
        <p className="text-[9px] text-[#80737f]">8 itens em 4 categorias</p>
      </div>

      <div className="mx-4 mb-3 flex items-center justify-between rounded-xl bg-gradient-to-r from-[#efa8f8] to-[#73479c] p-3 text-white shadow-md">
        <div>
          <p className="text-[9px] opacity-90">Total estimado</p>
          <p className="text-base font-bold">R$ 42,70</p>
        </div>
        <button className="rounded-full bg-white/20 px-3 py-1.5 text-[9px] font-semibold backdrop-blur-sm">
          Comparar
        </button>
      </div>

      <div className="flex-1 space-y-3 overflow-hidden px-4 pb-2">
        {categories.map((cat) => (
          <div key={cat.name} className={`rounded-xl ${cat.color} p-2.5 shadow-sm ring-1 ring-[#efa8f8]/20`}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[10px] font-semibold text-[#4b276b]">{cat.name}</span>
              <Plus className="h-3 w-3 text-[#73479c]" />
            </div>
            <div className="space-y-1">
              {cat.items.map((item) => (
                <div key={item} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#efa8f8]" />
                    <span className="text-[9px] text-[#4e434e]">{item}</span>
                  </div>
                  <Trash2 className="h-2.5 w-2.5 text-[#80737f]/50" />
                </div>
              ))}
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

function TabIcon({ icon, active = false }: { icon: ReactNode; active?: boolean }) {
  return (
    <div className={`flex flex-col items-center ${active ? 'text-[#73479c]' : 'text-[#80737f]'}`}>
      {icon}
    </div>
  );
}
