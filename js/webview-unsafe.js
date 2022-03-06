(function (w) {

    const svgCode = '<?xml version="1.0" encoding="UTF-8"?><svg style="height:16px;width:16px" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><style type="text/css">.st0{fill:#4B4B4B;}</style><path class="st0" d="m256 0c-141.39 0-256 114.61-256 256 0 141.39 114.61 256 256 256 141.38 0 256-114.61 256-256 0-141.38-114.61-256-256-256zm-68.939 203.11c0 0.366-0.157 0.689-0.436 0.916l-72.053 53.582 72.053 53.608c0.279 0.192 0.436 0.541 0.436 0.89v33.07c0 0.41-0.201 0.776-0.532 0.968-0.148 0.079-0.296 0.13-0.471 0.13-0.192 0-0.392-0.07-0.558-0.2l-103.77-77.182c-0.27-0.201-0.445-0.541-0.445-0.898v-20.765c0-0.366 0.174-0.706 0.445-0.907l103.77-77.18c0.166-0.131 0.366-0.192 0.558-0.192 0.174 0 0.323 0.044 0.471 0.13 0.332 0.183 0.532 0.55 0.532 0.968v33.062zm51.453 157.29c-0.148 0.445-0.514 0.741-0.951 0.741h-29.006c-0.331 0-0.628-0.175-0.82-0.472-0.183-0.278-0.236-0.645-0.131-0.976l65.87-208.12c0.131-0.437 0.514-0.724 0.942-0.724h29.014c0.314 0 0.628 0.166 0.811 0.454s0.236 0.654 0.131 0.994l-65.86 208.1zm192.18-92.408c0 0.357-0.156 0.698-0.436 0.898l-103.77 77.181c-0.166 0.13-0.357 0.2-0.558 0.2-0.166 0-0.322-0.052-0.471-0.13-0.331-0.192-0.532-0.558-0.532-0.968v-33.062c0-0.357 0.157-0.706 0.436-0.898l72.053-53.608-72.053-53.582c-0.278-0.209-0.436-0.54-0.436-0.906v-33.071c0-0.418 0.201-0.785 0.532-0.968 0.148-0.086 0.305-0.13 0.471-0.13 0.201 0 0.392 0.061 0.558 0.192l103.77 77.18c0.28 0.201 0.436 0.541 0.436 0.907v20.765z" fill="#4b4b4b"/></svg>';
    const svgInfo = '<?xml version="1.0" encoding="UTF-8"?><svg style="height:16px;width:16px" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><style type="text/css">st0{fill:#4B4B4B;}</style><path class="st0" d="m255.99 8e-3c-141.37 0-255.99 114.62-255.99 255.99s114.63 255.99 255.99 255.99c141.4 0 256.01-114.62 256.01-255.99s-114.61-255.99-256.01-255.99zm44.95 373.52c-10.355 11.492-16.29 18.322-27.467 29.007-16.918 16.177-36.128 20.484-51.063 4.516-21.467-22.959 1.048-92.804 1.597-95.449 4.032-18.564 12.08-55.667 12.08-55.667s-17.387 10.644-27.709 14.419c-7.613 2.782-16.225-0.871-18.354-8.234-1.984-6.822-0.404-11.161 3.774-15.822 10.354-11.484 16.289-18.314 27.467-28.999 16.934-16.185 36.128-20.483 51.063-4.524 21.467 22.959 5.628 60.732 0.064 87.497-0.548 2.653-13.742 63.627-13.742 63.627s17.387-10.645 27.709-14.427c7.628-2.774 16.241 0.887 18.37 8.242 1.985 6.823 0.389 11.161-3.789 15.814zm-27.773-197.4c-23.886 2.096-44.934-15.564-47.031-39.467-2.08-23.878 15.58-44.934 39.467-47.014 23.87-2.097 44.934 15.58 47.015 39.458 2.096 23.879-15.581 44.943-39.451 47.023z" fill="#4b4b4b"/></svg>';
    w.addEventListener('click', function () {
        try {
            // code
            if (w.document.getElementById('_code')) {
                w.document.getElementById('_code').remove();
            }
            let _emoticonSelector = w.document.querySelector('#_emoticon');
            let codeButton = _emoticonSelector.cloneNode(true);
            codeButton.setAttribute('id', '_code');
            codeButton.setAttribute('aria-label', 'コードタグを挿入します');
            codeButton.innerHTML = svgCode;
            _emoticonSelector.parentNode.appendChild(codeButton);
            w.document.querySelector('#_code').addEventListener('click', function () {
                w.document.querySelector('textarea[type="default"]').value =
                    w.document.querySelector('textarea[type="default"]').value + '[code]' + "\n\n" + '[/code]' + "\n";
            });

            // info
            if (w.document.getElementById('_info')) {
                w.document.getElementById('_info').remove();
            }
            let codeInfo = _emoticonSelector.cloneNode(true);
            codeInfo.setAttribute('id', '_info');
            codeInfo.setAttribute('aria-label', '囲み情報タグを挿入します');
            codeInfo.innerHTML = svgInfo;
            _emoticonSelector.parentNode.appendChild(codeInfo);
            w.document.querySelector('#_info').addEventListener('click', function () {
                w.document.querySelector('textarea[type="default"]').value =
                    w.document.querySelector('textarea[type="default"]').value + '[info][title]Title[/title]Body' + "\n\n" + '[/info]';
            });
        } catch (e) {
            console.error(e.message);
            return false;
        }
    });

}(window));