'use strict';

let $key = '';
const $bucketList = document.querySelector('.bucketList');

$bucketList.addEventListener('click', click_f, false); // ol 박스 영역의 클릭 이벤트 감지
$bucketList.addEventListener(
  'keyup',
  (evt) => {
    const $renameText = document.querySelector('.renameText');
    if (!$renameText.value.trim().length) {
      $renameText.value = '';
      $renameText.focus();
      return;
    }
    if (!(evt.keyCode == 13 || evt.target.tagName.toLowerCase() == 'button')) {
      return;
    }
    window.localStorage.setItem($key, $renameText.value);
    window.location.reload();
  },
  false
); // 수정 입력폼 엔터키 적용

addBtn?.addEventListener('click', add_f, false); // 추가 버튼 (클릭)
menu?.addEventListener('keyup', add_f, false); // 추가 버튼 (엔터키)

list();

function click_f(evt) {
  // 삭제버튼 클릭시
  if (evt.target.classList.contains('delBtn')) {
    const $child = evt.target.closest('li');

    if ($child) {
      if (confirm('삭제하시겠습니까?')) {
        $bucketList.removeChild($child);
        localStorage.removeItem($child.dataset.key);
      }
    }

    // 위 버튼 클릭시
  } else if (evt.target.classList.contains('upBtn')) {
    const $parent = document.querySelector('ol.bucketList');
    const $toMove = evt.target.closest('li');
    const $toTarget = $toMove.previousElementSibling;

    $parent.insertBefore($toMove, $toTarget);

    // 아래 버튼 클릭시
  } else if (evt.target.classList.contains('downBtn')) {
    const $parent = document.querySelector('ol.bucketList');
    const $toMove = evt.target.closest('li');
    const $toTarget = $toMove.nextElementSibling;

    if ($toTarget) {
      $parent.insertBefore($toTarget, $toMove);
    } else {
      $parent.insertBefore($toMove, $parent.firstChild);
    }

    // 최상단 버튼 클릭시
  } else if (evt.target.classList.contains('topBtn')) {
    const $parent = document.querySelector('ol.bucketList');
    const $toMove = evt.target.closest('li');
    const $toTarget = $parent.firstChild;

    $parent.insertBefore($toMove, $toTarget);

    // 최하단 버튼 클릭시
  } else if (evt.target.classList.contains('bottomBtn')) {
    const $parent = document.querySelector('ol.bucketList');
    const $toMove = evt.target.closest('li');

    $parent.insertBefore($toMove, null);

    // 수정 버튼 클릭시
  } else if (evt.target.classList.contains('renameBtn')) {
    console.log('수정');

    $key = evt.target.closest('li').getAttribute('data-key');
    const $div = document.querySelector('.renameTag');
    if ($div) $bucketList.removeChild($div); // 수정폼은 하나만.
    renameContent();
    return $key;

    // const $prompt = prompt('수정할 내용을 입력하세요');
    // window.localStorage.setItem($key, $prompt);
    // window.location.reload();
  }
  // 수정 확인
  if (evt.target.classList.contains('confirmBtn')) {
    console.log($key);
    const $renameText = document.querySelector('.renameText');

    window.localStorage.setItem($key, $renameText.value);
    window.location.reload();

    // 수정 취소
  } else if (evt.target.classList.contains('cancelBtn')) {
    const $remove = evt.target.closest('div');
    $bucketList.removeChild($remove);
  }
}

// 버킷리스트 추가
function add_f(evt) {
  if (!menu.value.trim().length) {
    menu.value = '';
    menu.focus();
    return;
  }

  if (!(evt.keyCode == 13 || evt.target.tagName.toLowerCase() == 'button')) {
    return;
  }

  // 리스트 초과 등록시 경고메시지
  if (localStorage.length >= 10) {
    alert('저장공간이 가득 찼습니다');
    return;
  }

  // 1) 요소(element) 생성
  const $li = document.createElement('li'); // <li></li>
  const $renameBtn = document.createElement('button'); // <button></button>
  const $delBtn = document.createElement('button'); // <button></button>
  const $upBtn = document.createElement('button'); // <button></button>
  const $downBtn = document.createElement('button'); // <button></button>
  const $topBtn = document.createElement('button'); // <button></button>
  const $bottomBtn = document.createElement('button'); // <button></button>

  // 2) 속성 추가
  $li.setAttribute('class', 'item item3');
  $li.setAttribute('id', 'id3');
  $li.setAttribute('data-key', new Date().toLocaleString());
  $renameBtn.setAttribute('class', 'renameBtn');
  $delBtn.setAttribute('class', 'delBtn');
  $upBtn.setAttribute('class', 'upBtn');
  $downBtn.setAttribute('class', 'downBtn');
  $topBtn.setAttribute('class', 'topBtn');
  $bottomBtn.setAttribute('class', 'bottomBtn');

  // 3) 컨텐츠 추가
  $li.textContent = menu.value + ' ';
  $renameBtn.textContent = '수정';
  $delBtn.textContent = '삭제';
  $upBtn.textContent = '위';
  $downBtn.textContent = '아래';
  $topBtn.textContent = '최상단';
  $bottomBtn.textContent = '최하단';

  // 4) 부모요소에 자식요소로 추가
  $bucketList.appendChild($li);
  $li.appendChild($renameBtn);
  $li.appendChild($delBtn);
  $li.appendChild($upBtn);
  $li.appendChild($downBtn);
  $li.appendChild($topBtn);
  $li.appendChild($bottomBtn);

  // 5) DOM트리에 추가
  $bucketList.appendChild($li);

  // 6) 로컬 저장소에 저장
  const currTime = new Date().toLocaleString();
  window.localStorage.setItem(currTime, menu.value);

  menu.value = '';
}

// 저장소의 데이터를 읽어와서 버킷리스트 출력
function list() {
  // 서브 DOM 생성
  const $fragment = document.createDocumentFragment();

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    const $li = document.createElement('li');
    $li.setAttribute('data-key', key);
    $li.textContent = value + ' ';

    const $renameBtn = document.createElement('button');
    const $delBtn = document.createElement('button');
    const $upBtn = document.createElement('button');
    const $downBtn = document.createElement('button');
    const $topBtn = document.createElement('button');
    const $bottomBtn = document.createElement('button');

    $renameBtn.setAttribute('class', 'renameBtn');
    $delBtn.setAttribute('class', 'delBtn');
    $upBtn.setAttribute('class', 'upBtn');
    $downBtn.setAttribute('class', 'downBtn');
    $topBtn.setAttribute('class', 'topBtn');
    $bottomBtn.setAttribute('class', 'bottomBtn');

    $renameBtn.textContent = '수정';
    $delBtn.textContent = '삭제';
    $upBtn.textContent = '위';
    $downBtn.textContent = '아래';
    $topBtn.textContent = '최상단';
    $bottomBtn.textContent = '최하단';

    $li.appendChild($renameBtn);
    $li.appendChild($delBtn);
    $li.appendChild($upBtn);
    $li.appendChild($downBtn);
    $li.appendChild($topBtn);
    $li.appendChild($bottomBtn);

    $fragment.appendChild($li);
  }

  $bucketList.appendChild($fragment);
}

function renameContent() {
  const $div = document.createElement('div');
  const $input = document.createElement('input');
  const $confirmBtn = document.createElement('button'); // 저장 버튼
  const $cancelBtn = document.createElement('button'); // 취소 버튼

  $div.setAttribute('class', 'renameTag');
  $input.setAttribute('class', 'renameText');
  $confirmBtn.setAttribute('class', 'confirmBtn');
  $cancelBtn.setAttribute('class', 'cancelBtn');

  $div.textContent = '수정내용 입력';
  $confirmBtn.textContent = '저장';
  $cancelBtn.textContent = '취소';

  $bucketList.appendChild($div);
  $div.appendChild($input);
  $div.appendChild($confirmBtn);
  $div.appendChild($cancelBtn);

  $div.style.backgroundColor = 'lightgrey';
}
