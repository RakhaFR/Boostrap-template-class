document.addEventListener('DOMContentLoaded', () => {
    // 1. Tangani .component-section (Template 01-15)
    const sections = document.querySelectorAll('.component-section');
    
    sections.forEach(section => {
        // Buat tombol copy
        const copyBtn = document.createElement('button');
        copyBtn.className = 'btn btn-sm btn-outline-primary position-absolute copy-btn';
        copyBtn.style.top = '10px';
        copyBtn.style.right = '10px';
        copyBtn.style.zIndex = '10';
        copyBtn.innerHTML = '<i class="bi bi-clipboard"></i> Copy';
        
        // Pastikan section relative agar posisi absolute tombol berfungsi dengan baik
        if(getComputedStyle(section).position === 'static') {
            section.style.position = 'relative';
        }

        section.appendChild(copyBtn);

        copyBtn.addEventListener('click', () => {
            // Clone section untuk mengambil HTML murni tanpa elemen tambahan
            const clone = section.cloneNode(true);
            
            // Hapus label section dan tombol copy dari hasil clone
            const label = clone.querySelector('.section-label');
            if(label) label.remove();
            
            const btn = clone.querySelector('.copy-btn');
            if(btn) btn.remove();

            // Ambil HTML dan bersihkan spasi berlebih
            let code = clone.innerHTML;
            
            // Hapus baris kosong di awal dan akhir
            code = code.replace(/^\s*[\r\n]/g, '').replace(/[\r\n]\s*$/g, '');
            
            // Algoritma untuk menghapus indentasi berlebih (unindent)
            const lines = code.split('\n');
            let minIndent = Infinity;
            
            lines.forEach(line => {
                if (line.trim().length > 0) {
                    const match = line.match(/^(\s*)/);
                    const indentLength = match ? match[1].length : 0;
                    if (indentLength < minIndent) {
                        minIndent = indentLength;
                    }
                }
            });

            if (minIndent !== Infinity && minIndent > 0) {
                code = lines.map(line => line.substring(minIndent)).join('\n');
            }

            navigator.clipboard.writeText(code).then(() => {
                const originalText = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="bi bi-check2"></i> Copied!';
                copyBtn.classList.replace('btn-outline-primary', 'btn-success');
                copyBtn.classList.add('text-white');
                
                setTimeout(() => {
                    copyBtn.innerHTML = originalText;
                    copyBtn.classList.replace('btn-success', 'btn-outline-primary');
                    copyBtn.classList.remove('text-white');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                alert('Gagal menyalin teks ke clipboard!');
            });
        });
    });

    // 2. Tangani .demo-window (Template 16-20)
    const demoWindows = document.querySelectorAll('.demo-window');
    
    demoWindows.forEach(demo => {
        const header = demo.querySelector('.demo-window-header');
        const body = demo.querySelector('.demo-window-body');
        
        if (header && body) {
            const copyBtn = document.createElement('button');
            copyBtn.className = 'btn btn-sm btn-outline-secondary ms-auto copy-btn';
            copyBtn.innerHTML = '<i class="bi bi-clipboard"></i> Copy Code';
            
            header.appendChild(copyBtn);
            
            copyBtn.addEventListener('click', () => {
                let codeToCopy = '';
                
                // Cari apakah ada snippet terkait (biasanya .code-snippet setelah demo-window)
                const nextSibling = demo.nextElementSibling;
                if (nextSibling && nextSibling.classList.contains('code-snippet')) {
                    const codeEl = nextSibling.querySelector('code');
                    if (codeEl) {
                        codeToCopy = codeEl.innerText || codeEl.textContent;
                    }
                }
                
                if (!codeToCopy) {
                    // Fallback: ambil innerHTML dari body, buang komentar HTML seperti <!-- START -->
                    let html = body.innerHTML;
                    html = html.replace(/<!--[\s\S]*?-->/g, '');
                    html = html.replace(/^\s*[\r\n]/g, '').replace(/[\r\n]\s*$/g, '');
                    
                    const lines = html.split('\n');
                    let minIndent = Infinity;
                    
                    lines.forEach(line => {
                        if (line.trim().length > 0) {
                            const match = line.match(/^(\s*)/);
                            const indentLength = match ? match[1].length : 0;
                            if (indentLength < minIndent) {
                                minIndent = indentLength;
                            }
                        }
                    });

                    if (minIndent !== Infinity && minIndent > 0) {
                        html = lines.map(line => line.substring(minIndent)).join('\n');
                    }
                    codeToCopy = html;
                }

                navigator.clipboard.writeText(codeToCopy).then(() => {
                    const originalText = copyBtn.innerHTML;
                    copyBtn.innerHTML = '<i class="bi bi-check2"></i> Copied!';
                    copyBtn.classList.replace('btn-outline-secondary', 'btn-success');
                    copyBtn.classList.add('text-white');
                    
                    setTimeout(() => {
                        copyBtn.innerHTML = originalText;
                        copyBtn.classList.replace('btn-success', 'btn-outline-secondary');
                        copyBtn.classList.remove('text-white');
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                    alert('Gagal menyalin teks ke clipboard!');
                });
            });
        }
    });
});
