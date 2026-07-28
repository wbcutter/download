// load-data.js
(function() {
  console.log('📡 Đang tải data.js...');
  
  // Hàm tải file JS động
  function loadScript(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.type = 'text/javascript';
      script.async = true;
      
      script.onload = function() {
        console.log('✅ data.js tải thành công');
        resolve();
      };
      
      script.onerror = function(error) {
        console.error('❌ Lỗi tải data.js:', error);
        reject(error);
      };
      
      document.head.appendChild(script);
    });
  }
  
  // Tải data.js
  loadScript('data.js')
    .catch(error => {
      console.error('Không tải được data.js, sử dụng dữ liệu mặc định');
      
      // Dữ liệu mặc định nếu data.js không tải
      window.getFilesData = function() {
        return [
          {
            id: 'default1',
            name: 'File Mẫu 1.rar',
            cover: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22180%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(102,126,234);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(118,75,162);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22300%22 height=%22180%22 fill=%22url(%23grad)%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22white%22 font-size=%2224%22 font-family=%22Arial%22 font-weight=%22bold%22%3EFile Mẫu%3C/text%3E%3C/svg%3E',
            description: 'File mẫu - Kiểm tra data.js'
          }
        ];
      };
      
      // Trigger render files
      if (window.renderFiles) {
        window.renderFiles();
      }
    });
})();