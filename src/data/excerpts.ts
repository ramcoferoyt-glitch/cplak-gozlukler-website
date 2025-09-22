export interface Excerpt {
  id: string;
  title: string;
  content: string;
  publishDate: string;
  audioUrl?: string;
  featured: boolean;
}

export const excerpts: Excerpt[] = [
  {
    id: "cocukluk-koyu-yollari",
    title: "Çocukluk Köy Yolları",
    content: "Çocukluğum köy yollarında geçti; çıplak ayak, gönül rehberi. Gözlerim az gördükçe, kulaklarım ve içim daha çok duymaya başladı. İnsanların yüzünü değil, niyetini okumayı öğrendim. Bu bölümde, \"çakal\" diye damgalanan mizacın nasıl yalnızca dürüstlüğe tahammülsüz toplumun icadı olduğunu anlatıyorum.",
    publishDate: "2024-01-15",
    featured: true
  },
  {
    id: "gorme-engelim-durbun",
    title: "Görme Engelim Dürbün Verdi",
    content: "Görme engelim bana duvar değil dürbün verdi. Bu dürbünle suskunlukların bağırdığını, yüzlerin altındaki hikâyeleri gördüm. Toplumsal cinsiyet rollerinin gölgesinde hem kadınların hem erkeklerin taşıdığı görünmez yükleri keşfettim. Çıplak görmek, utanılacak bir suç değil; uyanmanın ilk adımı.",
    publishDate: "2024-01-08",
    featured: true
  },
  {
    id: "dijital-dunya-arac",
    title: "Dijital Dünya Araç Oldu",
    content: "Dijital dünya bana kaçış değil araç oldu. Bir tweet, bir kayıt, bir ses… İnsanların içini dışarı çıkaran bir köprü. Bu kısımda dijital araçların farkındalık yaratmadaki gücünü ve kendi sesini bulmanın yollarını paylaşıyorum. Her kelime bir altın; yeter ki aramayı bil.",
    publishDate: "2024-01-01",
    featured: true
  }
];

