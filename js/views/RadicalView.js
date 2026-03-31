// =============================================
//  RADICAL VIEW  — Character Decomposition & Radicals
//
//  Browse the 214 Kangxi radicals, see example
//  characters, and look up character components.
//  Inspired by Dong Chinese & Skritter.
// =============================================

import { View } from './View.js';
import { speechService } from '../core/SpeechService.js';

// ---- Top 120 common radicals with stroke count, meaning, and example chars ----
const RADICALS = [
  { rad:'一', strokes:1, meaning:'one',          examples:['三','上','下','不','世'] },
  { rad:'丨', strokes:1, meaning:'line/stroke',   examples:['中','丰','串'] },
  { rad:'丶', strokes:1, meaning:'dot',           examples:['主','丸','义'] },
  { rad:'丿', strokes:1, meaning:'slash',         examples:['乃','久','么'] },
  { rad:'乙', strokes:1, meaning:'second',        examples:['九','也','乞'] },
  { rad:'亅', strokes:1, meaning:'hook',          examples:['了','予','事'] },
  { rad:'二', strokes:2, meaning:'two',           examples:['五','井','些'] },
  { rad:'人', strokes:2, meaning:'person',        examples:['他','你','们','休','位','住','作'] },
  { rad:'儿', strokes:2, meaning:'legs/child',    examples:['兄','先','光','克','元'] },
  { rad:'入', strokes:2, meaning:'enter',         examples:['内','全','两'] },
  { rad:'八', strokes:2, meaning:'eight',         examples:['公','六','共','兵'] },
  { rad:'冂', strokes:2, meaning:'borders',       examples:['内','同','冈'] },
  { rad:'冖', strokes:2, meaning:'cover',         examples:['写','军','冠'] },
  { rad:'冫', strokes:2, meaning:'ice',           examples:['冬','冷','准','冰','冻'] },
  { rad:'几', strokes:2, meaning:'table',         examples:['风','凡','凤'] },
  { rad:'刀', strokes:2, meaning:'knife',         examples:['分','切','刊','别','到','刚'] },
  { rad:'力', strokes:2, meaning:'power/force',   examples:['办','加','功','动','助','努'] },
  { rad:'勹', strokes:2, meaning:'wrap',          examples:['包','句','勿'] },
  { rad:'匕', strokes:2, meaning:'spoon',         examples:['北','化','匙'] },
  { rad:'十', strokes:2, meaning:'ten',           examples:['千','午','半','华','南'] },
  { rad:'卜', strokes:2, meaning:'divination',    examples:['上','下','卡'] },
  { rad:'又', strokes:2, meaning:'again',         examples:['又','友','双','发','对'] },
  { rad:'口', strokes:3, meaning:'mouth',         examples:['吃','叫','听','可','只','吗','呢','嘴'] },
  { rad:'囗', strokes:3, meaning:'enclosure',     examples:['四','因','回','国','图','园'] },
  { rad:'土', strokes:3, meaning:'earth/ground',  examples:['在','地','场','城','坐','块'] },
  { rad:'夕', strokes:3, meaning:'evening',       examples:['外','多','夜','名'] },
  { rad:'大', strokes:3, meaning:'big',           examples:['天','太','夫','头','央'] },
  { rad:'女', strokes:3, meaning:'woman',         examples:['好','妈','她','姐','妹','始','如'] },
  { rad:'子', strokes:3, meaning:'child/son',     examples:['字','学','孩','孙','存'] },
  { rad:'宀', strokes:3, meaning:'roof/house',    examples:['家','安','完','定','实','客','宝'] },
  { rad:'寸', strokes:3, meaning:'inch',          examples:['对','寻','导','封'] },
  { rad:'小', strokes:3, meaning:'small',         examples:['少','尖','尘'] },
  { rad:'尸', strokes:3, meaning:'corpse/body',   examples:['尺','尾','局','居','层','展'] },
  { rad:'山', strokes:3, meaning:'mountain',      examples:['出','岁','岛','岸'] },
  { rad:'巾', strokes:3, meaning:'cloth/towel',   examples:['市','布','帮','师','帽'] },
  { rad:'干', strokes:3, meaning:'dry/shield',    examples:['平','年','并'] },
  { rad:'广', strokes:3, meaning:'shelter/wide',  examples:['店','度','座','庭','应'] },
  { rad:'弓', strokes:3, meaning:'bow',           examples:['引','张','强','弟'] },
  { rad:'彳', strokes:3, meaning:'step (left)',   examples:['行','很','得','往','待'] },
  { rad:'心', strokes:4, meaning:'heart/mind',    examples:['想','思','意','感','情','忙','快','怕'] },
  { rad:'戈', strokes:4, meaning:'halberd',       examples:['我','成','或','战'] },
  { rad:'手', strokes:4, meaning:'hand',          examples:['打','找','把','拉','拿','按','指'] },
  { rad:'日', strokes:4, meaning:'sun/day',       examples:['早','时','明','春','晚','暖'] },
  { rad:'月', strokes:4, meaning:'moon/month',    examples:['有','朋','服','期','望'] },
  { rad:'木', strokes:4, meaning:'tree/wood',     examples:['本','机','来','树','林','校','果','桌'] },
  { rad:'水', strokes:4, meaning:'water',         examples:['没','河','海','池','江','法','活','洗'] },
  { rad:'火', strokes:4, meaning:'fire',          examples:['热','烧','照','点','然','灯'] },
  { rad:'牛', strokes:4, meaning:'cow/ox',        examples:['牛','物','特','牧'] },
  { rad:'犬', strokes:4, meaning:'dog',           examples:['狗','猫','狐','独'] },
  { rad:'王', strokes:4, meaning:'king/jade',     examples:['玩','现','球','班','理','环'] },
  { rad:'田', strokes:5, meaning:'field',         examples:['男','界','留','画'] },
  { rad:'目', strokes:5, meaning:'eye',           examples:['看','眼','睛','相','着','真'] },
  { rad:'石', strokes:5, meaning:'stone',         examples:['研','破','码','砖'] },
  { rad:'示', strokes:5, meaning:'show/spirit',   examples:['社','视','礼','神','祝'] },
  { rad:'禾', strokes:5, meaning:'grain/crop',    examples:['和','种','秋','科','租'] },
  { rad:'穴', strokes:5, meaning:'cave/hole',     examples:['空','穿','窗','究'] },
  { rad:'立', strokes:5, meaning:'stand',         examples:['站','端','竟','章'] },
  { rad:'竹', strokes:6, meaning:'bamboo',        examples:['笑','笔','算','等','答','第'] },
  { rad:'米', strokes:6, meaning:'rice',          examples:['类','粮','精'] },
  { rad:'糸', strokes:6, meaning:'silk/thread',   examples:['红','给','经','结','练','线','绿'] },
  { rad:'耳', strokes:6, meaning:'ear',           examples:['听','闻','聪'] },
  { rad:'肉', strokes:6, meaning:'meat/flesh',    examples:['脸','脚','能','胖'] },
  { rad:'虫', strokes:6, meaning:'insect',        examples:['虽','蛋','蛇'] },
  { rad:'衣', strokes:6, meaning:'clothing',      examples:['被','裙','裤','衬'] },
  { rad:'言', strokes:7, meaning:'speech/words',  examples:['说','话','请','让','语','课','读','谢','认'] },
  { rad:'豆', strokes:7, meaning:'bean',          examples:['豆','短','登'] },
  { rad:'走', strokes:7, meaning:'walk/run',      examples:['起','越','赶','超'] },
  { rad:'足', strokes:7, meaning:'foot',          examples:['跑','路','跳','踢','跟'] },
  { rad:'车', strokes:4, meaning:'vehicle/car',   examples:['车','轻','转','输'] },
  { rad:'辶', strokes:4, meaning:'walk/road',     examples:['过','还','这','进','边','近','远','道','达'] },
  { rad:'门', strokes:3, meaning:'door/gate',     examples:['开','关','间','问','闻'] },
  { rad:'雨', strokes:8, meaning:'rain',          examples:['雪','零','雷','需','霜'] },
  { rad:'食', strokes:9, meaning:'food/eat',      examples:['饭','饮','饱','饿','馆'] },
  { rad:'马', strokes:3, meaning:'horse',         examples:['吗','妈','骑','驾'] },
  { rad:'鸟', strokes:5, meaning:'bird',          examples:['鸡','鸭','鹅'] },
  { rad:'鱼', strokes:8, meaning:'fish',          examples:['鲜','鲤','鲸'] },
  { rad:'黑', strokes:12,meaning:'black',         examples:['默','墨','黯'] },
  { rad:'金', strokes:8, meaning:'gold/metal',    examples:['钱','银','铁','错','锁','镜','铅'] },
  { rad:'页', strokes:6, meaning:'page/leaf',     examples:['题','颜','领','须'] },
  { rad:'风', strokes:4, meaning:'wind',          examples:['风','飘','飓'] },
  { rad:'麻', strokes:11,meaning:'hemp',          examples:['磨','摩','魔'] },
];

// Character decomposition examples (common characters → components)
const DECOMPOSITIONS = {
  '好': { parts: ['女','子'], meaning: 'woman + child = good' },
  '妈': { parts: ['女','马'], meaning: 'woman + horse (sound mǎ) = mother (mā)' },
  '明': { parts: ['日','月'], meaning: 'sun + moon = bright' },
  '休': { parts: ['亻','木'], meaning: 'person + tree = rest' },
  '林': { parts: ['木','木'], meaning: 'two trees = forest/grove' },
  '森': { parts: ['木','木','木'], meaning: 'three trees = dense forest' },
  '男': { parts: ['田','力'], meaning: 'field + power = man' },
  '安': { parts: ['宀','女'], meaning: 'roof + woman = peace/safe' },
  '家': { parts: ['宀','豕'], meaning: 'roof + pig = home/family' },
  '字': { parts: ['宀','子'], meaning: 'roof + child = character/word' },
  '想': { parts: ['相','心'], meaning: 'appearance + heart = to think' },
  '看': { parts: ['手','目'], meaning: 'hand + eye = to look' },
  '从': { parts: ['人','人'], meaning: 'two persons = to follow/from' },
  '众': { parts: ['人','人','人'], meaning: 'three persons = crowd' },
  '吃': { parts: ['口','乞'], meaning: 'mouth + beg = to eat' },
  '问': { parts: ['门','口'], meaning: 'door + mouth = to ask' },
  '间': { parts: ['门','日'], meaning: 'door + sun = between/room' },
  '闻': { parts: ['门','耳'], meaning: 'door + ear = to hear/smell' },
  '们': { parts: ['亻','门'], meaning: 'person + door = plural marker' },
  '请': { parts: ['讠','青'], meaning: 'speech + green/young = please/invite' },
  '语': { parts: ['讠','吾'], meaning: 'speech + I/self = language' },
  '谢': { parts: ['讠','射'], meaning: 'speech + shoot = to thank' },
  '认': { parts: ['讠','人'], meaning: 'speech + person = to recognize' },
  '说': { parts: ['讠','兑'], meaning: 'speech + exchange = to speak/say' },
  '花': { parts: ['艹','化'], meaning: 'grass + change = flower' },
  '茶': { parts: ['艹','人','木'], meaning: 'grass + person + wood = tea' },
  '打': { parts: ['扌','丁'], meaning: 'hand + nail = to hit/strike' },
  '找': { parts: ['扌','戈'], meaning: 'hand + halberd = to look for' },
  '把': { parts: ['扌','巴'], meaning: 'hand + cling = to hold/marker' },
  '时': { parts: ['日','寸'], meaning: 'sun + inch = time' },
  '河': { parts: ['氵','可'], meaning: 'water + can = river' },
  '海': { parts: ['氵','每'], meaning: 'water + every = sea' },
  '洗': { parts: ['氵','先'], meaning: 'water + first = to wash' },
  '没': { parts: ['氵','殳'], meaning: 'water + weapon = not have/sink' },
  '热': { parts: ['执','灬'], meaning: 'hold + fire = hot' },
  '然': { parts: ['月','犬','灬'], meaning: 'flesh + dog + fire = yes/so/like that' },
  '点': { parts: ['占','灬'], meaning: 'occupy + fire = dot/point' },
  '照': { parts: ['昭','灬'], meaning: 'shine + fire = to illuminate' },
  '能': { parts: ['厶','月','匕','匕'], meaning: 'bear (animal) = can/able' },
  '国': { parts: ['囗','玉'], meaning: 'enclosure + jade = country' },
  '回': { parts: ['囗','口'], meaning: 'enclosure + mouth = to return' },
};

export class RadicalView extends View {
  constructor() {
    super('radicals');
    this._filter = '';
    this._selectedRadical = null;
  }

  onActivate() {
    this._render();
  }

  onDeactivate() {}

  _render() {
    const root = this.el.querySelector('#radicals-root');
    if (!root) return;

    root.innerHTML = `
      <div class="rad-tabs">
        <button class="rad-tab active" data-tab="radicals">📝 Radicals (部首)</button>
        <button class="rad-tab" data-tab="decompose">🔍 Character Breakdown</button>
      </div>
      <div id="rad-content-radicals" class="rad-content">
        <div class="rad-search-bar">
          <input type="text" id="rad-search" placeholder="Search radicals by meaning, character, or stroke count…" />
        </div>
        <div class="rad-stroke-legend">
          <span class="rad-legend-title">Filter by strokes:</span>
          <div class="rad-stroke-btns" id="rad-stroke-btns">
            <button class="rad-stroke-btn active" data-strokes="all">All</button>
            ${[1,2,3,4,5,6,7,8].map(s => `<button class="rad-stroke-btn" data-strokes="${s}">${s}</button>`).join('')}
            <button class="rad-stroke-btn" data-strokes="9+">9+</button>
          </div>
        </div>
        <div class="rad-grid" id="rad-grid"></div>
        <div class="rad-detail hidden" id="rad-detail"></div>
      </div>
      <div id="rad-content-decompose" class="rad-content hidden">
        <div class="rad-search-bar">
          <input type="text" id="decompose-input" placeholder="Type a character to see its components…" maxlength="1" />
        </div>
        <div id="decompose-result"></div>
        <h4 style="margin:1.5rem 0 1rem">Common Decompositions</h4>
        <div class="decompose-grid" id="decompose-grid"></div>
      </div>`;

    this._bindEvents(root);
    this._renderRadicalGrid();
    this._renderDecompositions();
  }

  _bindEvents(root) {
    // Tab switching
    root.querySelector('.rad-tabs').addEventListener('click', e => {
      const btn = e.target.closest('.rad-tab');
      if (!btn) return;
      root.querySelectorAll('.rad-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.dataset.tab;
      root.querySelector('#rad-content-radicals').classList.toggle('hidden', tab !== 'radicals');
      root.querySelector('#rad-content-decompose').classList.toggle('hidden', tab !== 'decompose');
    });

    // Radical search
    root.querySelector('#rad-search').addEventListener('input', e => {
      this._filter = e.target.value.toLowerCase();
      this._renderRadicalGrid();
    });

    // Stroke filter
    root.querySelector('#rad-stroke-btns').addEventListener('click', e => {
      const btn = e.target.closest('.rad-stroke-btn');
      if (!btn) return;
      root.querySelectorAll('.rad-stroke-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      this._strokeFilter = btn.dataset.strokes;
      this._renderRadicalGrid();
    });

    // Decompose input
    root.querySelector('#decompose-input').addEventListener('input', e => {
      const char = e.target.value.trim();
      this._showDecomposition(char);
    });
  }

  _renderRadicalGrid() {
    const grid = this.el.querySelector('#rad-grid');
    if (!grid) return;

    let filtered = RADICALS;

    // Text filter
    if (this._filter) {
      filtered = filtered.filter(r =>
        r.rad.includes(this._filter) ||
        r.meaning.toLowerCase().includes(this._filter) ||
        String(r.strokes).includes(this._filter) ||
        r.examples.some(ex => ex.includes(this._filter))
      );
    }

    // Stroke filter
    if (this._strokeFilter && this._strokeFilter !== 'all') {
      if (this._strokeFilter === '9+') {
        filtered = filtered.filter(r => r.strokes >= 9);
      } else {
        const s = parseInt(this._strokeFilter, 10);
        filtered = filtered.filter(r => r.strokes === s);
      }
    }

    grid.innerHTML = filtered.map(r => `
      <div class="rad-card" data-radical="${r.rad}">
        <div class="rad-char">${r.rad}</div>
        <div class="rad-info">
          <span class="rad-meaning">${r.meaning}</span>
          <span class="rad-strokes">${r.strokes} strokes</span>
        </div>
      </div>
    `).join('');

    // Click handler for detail
    grid.addEventListener('click', e => {
      const card = e.target.closest('.rad-card');
      if (!card) return;
      const rad = card.dataset.radical;
      this._showRadicalDetail(rad);
    });
  }

  _showRadicalDetail(radChar) {
    const detailEl = this.el.querySelector('#rad-detail');
    const rad = RADICALS.find(r => r.rad === radChar);
    if (!rad) { detailEl.classList.add('hidden'); return; }

    detailEl.classList.remove('hidden');
    detailEl.innerHTML = `
      <div class="rad-detail-card">
        <button class="rad-detail-close" id="rad-detail-close">✕</button>
        <div class="rad-detail-char">${rad.rad}</div>
        <div class="rad-detail-meaning">${rad.meaning}</div>
        <div class="rad-detail-strokes">${rad.strokes} stroke${rad.strokes > 1 ? 's' : ''}</div>
        <div class="rad-detail-section">
          <h4>Characters using this radical</h4>
          <div class="rad-example-chars">
            ${rad.examples.map(ex => `<span class="rad-ex-char" data-char="${ex}">${ex}</span>`).join('')}
          </div>
        </div>
      </div>`;

    detailEl.querySelector('#rad-detail-close').addEventListener('click', () => {
      detailEl.classList.add('hidden');
    });

    // Click example chars to speak
    detailEl.querySelectorAll('.rad-ex-char').forEach(el => {
      el.addEventListener('click', () => speechService.speak(el.dataset.char));
    });
  }

  _renderDecompositions() {
    const grid = this.el.querySelector('#decompose-grid');
    if (!grid) return;

    const entries = Object.entries(DECOMPOSITIONS);
    grid.innerHTML = entries.map(([char, data]) => `
      <div class="decompose-card" data-char="${char}">
        <div class="dc-char">${char}</div>
        <div class="dc-parts">${data.parts.map(p => `<span class="dc-part">${p}</span>`).join(' + ')}</div>
        <div class="dc-meaning">${data.meaning}</div>
      </div>
    `).join('');

    grid.addEventListener('click', e => {
      const card = e.target.closest('.decompose-card');
      if (!card) return;
      speechService.speak(card.dataset.char);
    });
  }

  _showDecomposition(char) {
    const resultEl = this.el.querySelector('#decompose-result');
    if (!resultEl) return;

    if (!char) {
      resultEl.innerHTML = '';
      return;
    }

    const data = DECOMPOSITIONS[char];
    if (data) {
      resultEl.innerHTML = `
        <div class="decompose-result-card">
          <div class="dr-char">${char}</div>
          <div class="dr-arrow">→</div>
          <div class="dr-parts">${data.parts.map(p => `<span class="dc-part">${p}</span>`).join(' + ')}</div>
          <div class="dr-meaning">${data.meaning}</div>
        </div>`;
    } else {
      resultEl.innerHTML = `
        <div class="decompose-result-card">
          <div class="dr-char">${char}</div>
          <div class="dr-meaning" style="color:var(--text-muted)">Decomposition not available for this character yet.</div>
        </div>`;
    }
  }
}
