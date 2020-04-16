function replace(classname,description){
	var elems=document.getElementsByClassName(classname);
	for(var i=0;i<elems.length;i++){
		elems[i].setAttribute("aria-label",description);
	}
}

window.addEventListener("load", main, false);
function main(e){
	replace("ic01","(方向キー左下)");
	replace("ic02","(方向キー下)");
	replace("ic03","(方向キー右下)");
	replace("ic04","(方向キー左)");
	replace("ic05","(方向キーなにも押さない)");
	replace("ic06","(方向キー右)");
	replace("ic07","(方向キー左上)");
	replace("ic08","(方向キー上)");
	replace("ic09","(方向キー右上)");
	replace("icH2","方向キー下を長押し")
	replace("icH4","方向キー左を長押し")
	replace("icH6","方向キー右を長押し")
	replace("icH8","方向キー上を長押し")
	replace("icLp","(弱パンチ)");
	replace("icMp","(中パンチ)");
	replace("icHp","(強パンチ)");
	replace("icLk","(弱キック)");
	replace("icMk","(中キック)");
	replace("icHk","(強キック)");
	replace("icGp","(任意のパンチ)");
	replace("icGk","(任意のキック)");
	replace("icAp","(パンチ3つ同時)");
	replace("icAk","(キック3つ同時)");
	replace("icSp01","(方向キー下から右へ)");
	replace("icSp02","(方向キー下から左へ)");
	replace("icSp03","(方向キー右から下へ、そのご右下)");
	replace("icSp04","(方向キー左から下へ、そのご左下)");
	replace("icSp05","(方向キー左、下、右まで半回転)");
	replace("icSp06","(方向キー右、下、左まで半回転)");
	replace("icSp07","(方向キー1回転)");
	replace("icAd01","(プラス)");
	replace("icAd03","(または)");
	replace("icAd02","(または 候補複数)");
	replace("icAd04","(次の技として)");
}

