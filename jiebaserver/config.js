CONFIG = {
    port: 8000,
    
    /**
     * 是否啟用文字檔的記錄
     * @type Boolean
     */
    enable_jieba_log: false,
    
    /**
     * 文字檔記錄的位置
     * @type String
     */
    jieba_log_path: "/tmp/jieba.log",
    
    linked_data_proxy_check_url: "http://localhost:3000/check/wiki,moedict,cbdb,tgaz,cdict/",
    
    /**
     * 停用字，這些字不查詢
     * @type String
     */
    stopword: ".,\/#!$%\^&\*;:{}=\-_`~()"
        + "«»/•† ‡¿№×‰ºª‱¶§|‖¦©℗®℠™¤​฿​​¢​₡​₢​$​₫​₯​​₠​€​ƒ​₣​​​₭​​₾​ℳ​₥​₦​₧​₱​₰​£​៛​​​₪​৳​​₮​₩​¥⁂❧☞‽◊⁀"
        + "\n\r。，<br>─「」；：:！？{}()[].0123456789"
        + "〇零一二三四五六七八九十月日時分"
        + "…、%％【】※『』 ㈠㈡　，、。．？！～＄％＠＆＃＊‧；︰…‥﹐﹒˙·﹔﹕‘’“”〝〞‵′〃├─┼┴┬┤┌┐╞═╪╡│▕└┘╭╮╰╯╔╦╗╠═╬╣╓╥╖╒╤╕║╚╩╝╟╫╢╙╨╜╞╪╡╘╧╛﹣﹦≡｜∣∥–︱—︳╴¯￣﹉﹊﹍﹎﹋﹌﹏︴﹨∕╲╱＼／↑↓←→↖↗↙↘〔〕【】﹝﹞〈〉﹙﹚《》（）｛｝﹛﹜『』「」＜＞≦≧﹤﹥︵︶︷︸︹︺︻︼︽︾︿﹀∩∪﹁﹂﹃﹄◎⊕⊙○●△▲▽▼☆★◇◆□■☎☏◐◑♡♥♣♧☻☺♠♤▪▫∴∵☜☞♫♬◊♦►◁∈∋◘◙♀♂♩♪☼￥〒￠￡※↔↕♨卍◈§♭＿ˍ▁▂▃▄▅▆▇█▏▎▍▌▋▊▉◢◣◥◤►◄▣▤▥▦▧▨▩▒░㊣㊟㊕㊗㊡㊝①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽㈠㈡㈢㈣㈤㈥㈦㈧㈨㈩１２３４５６７８９０〡〢〣〤〥〦〧〨〩十卄卅ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩανξοπρστυφχψωクラピカマニアチェックあなたのテスト≠〃てたこれまでキャンプシーズにかけるかがきいレャズンをえたコンパやすうなどすそビジネられていアウドアやにびせだも来つリビをしたとにオはわゅうごりよろしくそうまムペㄱㄲㄳㄴㄵㄶㄷㄸㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅃㅄㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅥㅦㅧㅨㅩㅪㅫㅬㅭㅮㅯㅰㅱㅲㅳㅴㅵㅶㅷㅸㅹㅺㅻㅼㅽㅾㅿㆀㆁㆂㆃㆄㆅㆆㆇㆈㆉㆊ╳＋﹢－×÷＝≠≒∞ˇ±√⊥∠∟⊿㏒㏑∫∮∵∴ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦㄧㄨㄩ˙ˊˇˋÄÃÇÊËÎÏÐÑÕÖÛÜãäêëîïõöŸŴŽŤŘŇĩħąčĤ",

    /**
     * 同時查詢資料的上限
     * @type Number
     */
    linked_data_proxy_request_max: 200000,
    
    /**
     * 一次傳送的字句
     * @type Number
     */
    batch_check: 50
};