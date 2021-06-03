// 모바일 브라우저 가로크기 체크
    // 햄버거 바 아이콘 선택자
    const menuOpenEl = document.getElementById('menu_btn')
    // 닫는 아이콘 선택자
    const menuCloseEl = document.getElementById('close_btn')
    // 사이드 네비게이션 선택자
    const sideMenuEl = document.getElementById('side_menu')
    
    // 햄버거 바 아이콘에 클릭 이벤트가 발생하면,
    menuOpenEl.addEventListener("click", function() {
        // 햄버거 바 아이콘을 보이지 않게 처리하고,
        menuOpenEl.style.display = "none"
        // 닫는 아이콘 보이게
        menuCloseEl.style.display = "block"
        // 사이드 메뉴를 보이게 합니다 
        sideMenuEl.style.transform = "translateX(0%)"
    })
    
    // 닫는 아이콘 클릭하면
    menuCloseEl.addEventListener("click", function() {
        menuCloseEl.style.display = "none"
        menuOpenEl.style.display = "block"
        sideMenuEl.style.transform = "translateX(-100%)"
    })
       
      
    
    