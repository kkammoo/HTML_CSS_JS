//수정 버튼
if (evt.target.matches('.editBtn')) {
  console.log('수정');
  const editTime = $toMove.dataset.key;

  const $edit = document.createElement('li');
  const $input = document.createElement('input');
  const $saveBtn = document.createElement('button');
  const $cancelBtn = document.createElement('button');
  const $content = $toMove.firstChild;

  $edit.setAttribute('data-key', editTime);
  $input.setAttribute('type', 'text');
  $input.setAttribute('id', 'menu1');
  $saveBtn.setAttribute('class', 'saveBtn');
  $cancelBtn.setAttribute('class', 'cancelBtn');

  $input.value = $content.textContent.trim();
  $input.size = $input.value.length;
  $saveBtn.textContent = '저장';
  $cancelBtn.textContent = '취소';

  $edit.appendChild($input);
  $edit.appendChild($saveBtn);
  $edit.appendChild($cancelBtn);

  $bucketList.replaceChild($edit, $toMove);

  menu1.focus();
}
