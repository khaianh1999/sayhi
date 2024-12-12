export default ({ app }, inject) => {
    const createModal = (targetElId, userOptions = {}) => {
        const defaultOptions = {
            placement: 'center', // Mặc định là "center"
            backdrop: 'dynamic',
            backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
            enableBackdropClick: true, // Bật/tắt đóng modal khi nhấp nền
            closable: true,
            onHide: () => {
            console.log('modal is hidden');
            },
            onShow: () => {
            console.log('modal is shown');
            },
            onToggle: () => {
            console.log('modal has been toggled');
            },
        };
  
        const mergedOptions = { ...defaultOptions, ...userOptions };
    
        const $targetEl = document.getElementById(targetElId);
        if (!$targetEl) {
            console.error(`Modal element with id "${targetElId}" not found.`);
            return null;
        }
    
        // Apply placement
        if (mergedOptions.placement === 'center') {
            $targetEl.classList.add('modal-center');
        } else if (mergedOptions.placement === 'bottom-right') {
            $targetEl.style.position = 'fixed';
            $targetEl.style.bottom = '1rem';
            $targetEl.style.right = '1rem';
        }
  
        // Create backdrop element
        let $backdrop = document.createElement('div');
        $backdrop.className = mergedOptions.backdropClasses;

        // Xử lý sự kiện click trên backdrop (nếu bật)
        if (mergedOptions.enableBackdropClick) {
            $backdrop.addEventListener('click', (e) => {
            if (mergedOptions.closable) {
                instance.hide(); // Đóng modal khi nhấp nền
            }
            });
        }
  
        const instance = {
            show() {
                if (mergedOptions.backdrop === 'dynamic') {
                    document.body.appendChild($backdrop);
                }
                $targetEl.style.display = 'block';

                // Ngăn scroll Y từ html
                document.documentElement.classList.add('no-scroll');

                if (mergedOptions.onShow) mergedOptions.onShow();
                
            },
            hide() {
                if (mergedOptions.backdrop === 'dynamic' && $backdrop.parentElement) {
                    document.body.removeChild($backdrop);
                }
                $targetEl.style.display = 'none';
                
                // Cho phép scroll Y từ html
                document.documentElement.classList.remove('no-scroll');
                
                if (mergedOptions.onHide) mergedOptions.onHide();
            },
            toggle() {
            if ($targetEl.style.display === 'none' || !$targetEl.style.display) {
                this.show();
            } else {
                this.hide();
            }
            if (mergedOptions.onToggle) mergedOptions.onToggle();
            },
        };
  
      return instance;
    };
  
    inject('modal', createModal);
  };
  