function selectAddr() {
    var oHeader = document.getElementsByTagName('header')[0];
    var oAddr = oHeader.getElementsByTagName('h2')[0].getElementsByTagName('p')[0];
    var oAddrList = oHeader.getElementsByClassName('addrSelect')[0];
    var oAddrListAnchor = oAddrList.getElementsByTagName('a');
    var timer = null;

    oAddr.onmouseover = oAddrList.onmouseover = function() {
    	clearTimeout(timer);
        oAddr.className = 'active';
        oAddrList.className = 'addrSelect show';
    }
    oAddr.onmouseout = oAddrList.onmouseout = function() {
    	timer = setTimeout(function () {
	        oAddr.className = '';
	        oAddrList.className = 'addrSelect hidden';
    	},100);
    }
    for (var i = 0; i < oAddrListAnchor.length; i++) {
    	oAddrListAnchor[i].onclick = function () {
    		for (var j = 0; j < oAddrListAnchor.length; j++) {
    			oAddrListAnchor[j].className = '';
    		}
    		this.className = 'now';
    		oAddr.innerHTML = this.innerHTML+'<i class="arrow-down"></i>';
    		oAddr.className = '';
    		oAddrList.className = 'addrSelect hidden';
    	}
    }
}
selectAddr();

function topAdHid() {
    var oAdBanner = document.getElementsByClassName('topAdBanner')[0];
    var oBtnClose = oAdBanner.getElementsByClassName('close')[0];
	oBtnClose.onclick = function () {
        setMov(oAdBanner,{opacity:0},function () {
            oAdBanner.style.height = '0';
        });
    }
}
topAdHid();