const sidebar = document.querySelector('aside');
        const sidebarCloser = document.getElementById('closerContainer');
        const sidebarCloserTop = sidebarCloser.children[0];
        const sidebarCloserBottom = sidebarCloser.children[1];

        sidebarCloser.addEventListener('mouseenter', () => {
            if (sidebar.classList.contains('hide')) {
                sidebarCloserTop.classList.add('anti-rotate')
                sidebarCloserBottom.classList.add('rotate')
            }
            else {
                sidebarCloserTop.classList.add('rotate')
                sidebarCloserBottom.classList.add('anti-rotate')
            }
        })

        sidebar.addEventListener('mouseleave', (e) => {
            sidebarCloserTop.classList.remove('anti-rotate')
            sidebarCloserTop.classList.remove('rotate')
            sidebarCloserBottom.classList.remove('rotate')
            sidebarCloserBottom.classList.remove('anti-rotate')
        })

        sidebarCloser.addEventListener('click', () => {
            sidebar.classList.toggle('hide')
        })
