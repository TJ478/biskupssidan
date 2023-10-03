export interface AfrekProps {
  tegund: string
  gildi: number
  afrek: string
  nanar: string
  class: string
}

const AfrekArray = [
  {
    tegund: 'stig',
    gildi: 5,
    afrek: 'lítilvirkur biskup',
    nanar: 'Hefur fengið 5 eða fleiri stig',
    class: 'bg-neutral-900 text-amber-900',
  },
  {
    tegund: 'stig',
    gildi: 10,
    afrek: 'krúttlegur biskup',
    nanar: 'Hefur fengið 10 eða fleiri stig',
    class: 'bg-neutral-900 text-neutral-500',
  },
  {
    tegund: 'stig',
    gildi: 20,
    afrek: 'virðulegur biskup',
    nanar: 'Hefur fengið 20 eða fleiri stig',
    class: 'bg-neutral-900 text-red-500',
  },
  {
    tegund: 'stig',
    gildi: 50,
    afrek: 'Háttvirtur biskup',
    nanar: 'Hefur fengið 50 eða fleiri stig',
    class: 'bg-neutral-900 text-yellow-500',
  },
  {
    tegund: 'stig',
    gildi: 100,
    afrek: 'Æruverðugur biskup',
    nanar: 'Hefur fengið 100 eða fleiri stig',
    class: 'bg-neutral-900 text-blue-500',
  },
  {
    tegund: 'stig',
    gildi: 200,
    afrek: '♗Eðalbiskup♗',
    nanar: 'Hefur fengið 200 eða fleiri stig',
    class: 'bg-neutral-900 text-neutral-50',
  },
  {
    tegund: 'frettir',
    gildi: 1,
    afrek: 'fréttamaður',
    nanar: 'Hefur skrifað frétt á síðuna',
    class: 'bg-neutral-900 text-pink-600',
  },
  {
    tegund: 'frettir',
    gildi: 5,
    afrek: 'Greinarhöfundur',
    nanar: 'Hefur skrifað 5 eða fleiri fréttir á síðuna',
    class: 'bg-neutral-900 text-pink-400',
  },
  {
    tegund: 'frettir',
    gildi: 20,
    afrek: 'Fær engan svefn',
    nanar: 'Hefur skrifað 20 eða fleiri fréttir á síðuna',
    class: 'bg-neutral-900 text-pink-200',
  },
  {
    tegund: 'frettir',
    gildi: 50,
    afrek: '🤦Hefur ekkert líf🤦',
    nanar: 'Hefur skrifað 50 eða fleiri fréttir á síðuna',
    class: 'bg-neutral-900 text-purple-500',
  },
  {
    tegund: 'frettir',
    gildi: 100,
    afrek: 'Reglan er lífið',
    nanar: 'Hefur skrifað 100 eða fleiri fréttir á síðuna',
    class: 'bg-neutral-900 text-purple-300',
  },
  {
    tegund: 'verkefni',
    gildi: 3,
    afrek: 'Námsmaður',
    nanar: 'Hefur tekið þátt í 3 eða fleiri verkefnum',
    class: 'bg-neutral-900 text-amber-500',
  },
  {
    tegund: 'verkefni',
    gildi: 10,
    afrek: 'Vinnusamur',
    nanar: 'Hefur tekið þátt í 10 eða fleiri verkefnum',
    class: 'bg-neutral-900 text-lime-500',
  },
  {
    tegund: 'verkefni',
    gildi: 20,
    afrek: 'Duglegur',
    nanar: 'Hefur tekið þátt í 20 eða fleiri verkefnum',
    class: 'bg-neutral-900 text-emerald-500',
  },
  {
    tegund: 'verkefni',
    gildi: 50,
    afrek: '😩Vinnufíkill😩',
    nanar: 'Hefur tekið þátt í 50 eða fleiri verkefnum',
    class: 'bg-neutral-900 text-cyan-400',
  },
  {
    tegund: 'years',
    gildi: 1,
    afrek: 'Langvarandi meðlimur',
    nanar: 'Hefur verið meðlimur í meira en ár',
    class: 'bg-neutral-900 text-green-400',
  },
  {
    tegund: 'years',
    gildi: 3,
    afrek: 'þrálátur meðlimur',
    nanar: 'Hefur verið meðlimur í meira en 3 ár',
    class: 'bg-neutral-900 text-green-600',
  },
  {
    tegund: 'years',
    gildi: 5,
    afrek: '📜Reglan virðist aldrei ætla þverra📜',
    nanar: 'Hefur verið meðlimur í meira en 5 ár',
    class: 'bg-neutral-900 text-green-800',
  },
  {
    tegund: 'sida_stig',
    gildi: 3,
    afrek: 'Tilbúin/n í slaginn ',
    nanar: 'Er með myndband og texta á síðu sinni og sitt eigið hlutverk ',
    class: 'bg-neutral-900 text-orange-500',
  },
  {
    tegund: 'nota_eftirlaun',
    gildi: true,
    afrek: '👴Gamlingi👴',
    nanar: 'Er komin/n á eftirlaun',
    class: 'bg-neutral-900 text-rose-400',
  },
  {
    tegund: 'eftirlaun',
    gildi: 1,
    afrek: 'Dauðadagar nálgast',
    nanar: 'Búin/n að vera á eftirlaunum í meira en ár',
    class: 'bg-neutral-900 text-rose-500',
  },
  {
    tegund: 'eftirlaun',
    gildi: 2,
    afrek: 'Á dánarbeðinu',
    nanar: 'Búin/n að vera á eftirlaunum í meira en 2 ár',
    class: 'bg-neutral-900 text-rose-600',
  },
  {
    tegund: 'eftirlaun',
    gildi: 3,
    afrek: '💀Dauður💀',
    nanar: 'Búin/n að vera á eftirlaunum í meira en 3 ár',
    class: 'bg-neutral-900 text-rose-700',
  },
  {
    tegund: 'frettadur',
    gildi: 5,
    afrek: 'Þekkt/ur',
    nanar: 'hefur komið fram í frétt 5 sinnum eða oftar',
    class: 'bg-neutral-900 text-teal-100',
  },
  {
    tegund: 'frettadur',
    gildi: 10,
    afrek: 'Frægur einstaklingur',
    nanar: 'hefur komið fram í frétt 10 sinnum eða oftar',
    class: 'bg-neutral-900 text-teal-300',
  },
  {
    tegund: 'frettadur',
    gildi: 20,
    afrek: 'Stjarna',
    nanar: 'hefur komið fram í frétt 20 sinnum eða oftar',
    class: 'bg-neutral-900 text-teal-500',
  },
  {
    tegund: 'frettadur',
    gildi: 50,
    afrek: '📷Mikið rómaður náungi📷',
    nanar: 'hefur komið fram í frétt 50 sinnum eða oftar',
    class: 'bg-neutral-900 text-teal-700',
  },
] as AfrekProps[]



export default AfrekArray