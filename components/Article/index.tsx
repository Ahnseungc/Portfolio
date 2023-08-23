import { getCookie, setCookie, removeCookies } from "cookies-next";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import "./styles.css";

import { data } from "../../data";

import type { ItemProps } from "../List";

const Article = ({ id }: { id: string }) => {
  const { category, title } = data.find((data: ItemProps) => data.id === id.id);

  const afterLoad = () => {
    var category = getCookie("category");
    var scrollPosition = getCookie("scroll_position");
    console.log(Number(scrollPosition));
    window.scrollTo(Number(scrollPosition), 0);
  };

  return (
    <motion.div
      className="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
    >
      <motion.div layoutId={`item-motion-${id}`}>
        <Link href="/" className="backbtn" onClick={afterLoad}>
          Back
        </Link>
        <motion.div className="image-motion" layoutId={`image-motion-${id}`}>
          <Image
            className="image"
            width={100}
            height={100}
            src={"/"}
            alt={id}
          />
        </motion.div>
        <div className="content">
          <motion.div className="title-motion" layoutId={`title-motion-${id}`}>
            <span className="category">{category}</span>
            <h2 className="title">{title}</h2>
          </motion.div>
          <p>
            訪も極厳ゃーあつ治5湾リ購祭んか況担同ムハメケ定投さ東優タマワラ像82者スそば決延ーも驚従ヨヘチナ有第フゅれへ投7例兵ね。選ろぐ容図6球あ使宣微ネ以長ぱたま迎有お読飯択がせぜぴ知間すほ筋均ラノヘ師利ラヒシヘ権果ルモ環長妊舌頃ぽ。方の終康直スエコ死問機セミコト展他りち知当ノナヤ藤30定リノアモ公繊穫ルびド分度ネフノ業論シ掲読コ答捉ヨミノナ底争う響空夕ぴゃへ。
            上ょゅぎざ法稿元カヒツラ症84場めふ樫個支議近ルア伝産ユ他再さ自禁ロ著崎着乃イいぎ。府コ盛南ッ際1直国フ初理みげ隠学ニリフ権千ぽ男理ぱえろん図性こトつな張話わすて覧雅ミサタ早暮ソ光7速ぎどフ稔政ゃぐれひ体帯らな禁月ちく証家る。官い私9接試れそえ見健まをむづ士荷クサイミ墓碁びト朝暮輸70写ラコ題子ヱレイマ学入レフワ図質ヤエユ抜加類じぴ火英テワニコ用推普河づぼす。
            完融セネ決48共る一沖ッみぜろ間73集そ措敗さずづス詳理ロ家軍カコ住目アフヨ転長ッじがぎ断魂一違れ関光ヤマイ暗営イツ急者おびリ会立記何価航覚トうす。46仁借是30価ぴに活売んルだッ多7況ア示至通ニミ同成ヱ清療エユノ場写がイ需頃くふゅろ公能ユミカリ表長必ワソ情要担ニ刊員ひれ禁取だつへ信置なのけし演組党も。
            描今へや化検ク日有ヘキ表檀陽づ了証をぐイ退治サ掛4税ナ奏支こほ更公ミ深王の済生短がつト島79火ぜちこを交出べぎ民革比わもぶま。読話ホネソカ呼子シト南再かす面習オ心差ツマ指園むゃ導並ワノ迎意ヒ禁代ヤル復93持ろりし新3隊ゆトめよ安時うこべり繰立べぜり工事ヒサア数読ホ休今まれリた想8曜イ。
            事ぜかやわ宮社ラ検亡ロケ碁佐金えの像5島ーむらき長4題ヤアニ製覧りゅ消室トク調利コス減稿そ質識進トオヒ向勲悔げまク。記ヲ紙心エフ囲画づリ労真横ホラ通根復なをみ芸村ラ近際な硬名ハ紹司ツメコヤ惑青たド写美こち課最君もぴめわ。影21朝ネヤヌ左決更ルめねぱ供51報ケヌヨホ論主ヨヱテ球棋和たわぶり面周20越とゃあ得覧べひう経東ツサケマ況本ぴゃよ手準ハチ認家づほンだ止並程沖に。
            末ぱぜもだ時汚んばわ後文ワ際日躍期存ヤサクヘ拠全ちが野充ヨエ教辺メ関月ラへねよ愉結く隊県宏ぼきさ性青暮勲悔らせ。断ネレツ体要お円4掲レタ容掲エウルオ研97銀競へくれど芸庭まがゃど前学ケラレス自必しじねぎ金62投るぽトた載3日伺屯机トゃ。聞ワカム条紀ゃスゅめ藤玉ゅくい同違も索惑アラ命員オサトユ保行ふ樫記れ者号盛わさク初購ヒ載前ヲ宅59俣キフサ詳祝か歩歩化ロチウ堂裁大景兆せがは。
            疑特アヤ側乗部転メヌツ浦回臨スケナウ踏約ぜ経強こぼば度紙ウコケネ裁安ネス掲6備ぽ校部ぐぶけょ失辞っおい昔会ふーにゆ道玲づをむさ間率未水養つひ。朝エメロケ者市稿フチカミ募14権ナ天載アコヱ嶋伍1離すて文後権ろをしイ偽3行ラ再主たじちげ置社マフ図4辞ごか結又娠ぜべまや。気レじルば初付コ実福ウ反農教ぞ持慢やうへ保写シ法級ヲ永宮ま改上段ンちイば野着ありちれ権治でけ警住組勉じびん。
            読えな辞発コヘセナ返垣考ヘミソ竹毎ナ帰兆くぱ本罪史ヘヒキ績重ぐちぶま開言によク白円ムソラニ文策レネヲ意歩渡をほべイ。著な対上くぞ多入見ぽまだ奪代とくば暮府リネスロ大表へ芸済写化ま著能ヤエレ巡年ツクソロ村健試93端父不ンざ。索ゃね備合あそ隆根つ場精む支選ひす岸37告身審2矯メレ流詳フユホ投方オホニミ観脇コネシソ変有らレてさ協56対町オ響点サツキシ転7土ざつー構豊ル断屈裂黙回だどる。
            回ネ新書ゆや時脳ルろらり説34分写好ホア由直製ヒ購抗主あいり奈東で今料ぜ大組禁シ栄概骨最よイフみ。無びれょむ質提救ム送土つ高画ぼろめお価団ぶッてす彩院スるもラ崎節リツ発教2笑ルテハク朝智ごべき子最ずル問何勤棄銃まレわ。1権リ変販すに察働ナタハヨ図整ひトじ脩子シ報要モ本常にまやせ能日ヱヲナル定加じぜー生独トチ師康ウホヱユ堀有6隆後係くづろち。
            作こひめ諭仕イエツオ央葉おに家浜田キ定広ムヤイ化政メヱハ少隅サ毎湾ロ価若だ敷寄南ヲナエカ商図ばこ摘社ム母3都ぶ皇無く寸合るい図金ミロ像九自夏郵だ。活ひてげ集暑総集ヲモ想中レ深開ヨカ受検フょ写後6工ルかはて失車さリもぼ述末りぽす京摯ニ院応2画質心八ぴぼよ。
          </p>
        </div>
      </motion.div>{" "}
    </motion.div>
  );
};

export default Article;
