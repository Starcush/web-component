class DeleteBtn extends HTMLButtonElement {
  constructor() {
    super();

    let bg = document.querySelector('.bg');
    let _this = this;
    // bg.style.display = 'block';
    this.disabled = true;
    this.addEventListener('click', function() {
      bg.style.display = 'block';
      const confirmation = window.confirm('정말 지우시겠습니까?');   
      if(!confirmation) {
        bg.style.display = 'none';
      }
    });

    let checkboxes = document.querySelectorAll('.checkbox');
    let checkedboxes = 0;
    checkboxes.forEach(function(box) {
      box.addEventListener('change', function() {
        if(this.checked) {
          console.log('checked!');
          checkedboxes++;
        } else {
          console.log('unchecked!');
          checkedboxes--;
        }

        if(checkedboxes === 0) {
          _this.disabled = true;
        } else {
          _this.disabled = false;
        }
      });
    })

    
  }
}

customElements.define('delete-btn', DeleteBtn, { extends: 'button' });