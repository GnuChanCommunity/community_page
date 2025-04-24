import { Injectable } from "@angular/core";
import { IHeaderData } from "../models/i-header-data";
import { IFooterData } from "../models/i-footer-data";

@Injectable()
export class FooterDataTrService implements IFooterData {
  footerHeader: string = "© 2025 GnuChanCommunity | Tüm Hakları Saklıdır.";
  footerInfo: string =
    "Bu site, açık kaynak katkılarını teşvik etmek amacıyla topluluk tarafından geliştirilmektedir. Katkıda bulunmak, geri bildirim sağlamak veya projeler hakkında daha fazla bilgi edinmek için lütfen bizimle iletişime geçin.";
}
